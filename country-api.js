function loadFlage() {
  fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json =>{
        let countryInfo = ""
        for (let js of json){
          console.log(js);
           countryInfo +=
           `<div>
           <h1>${js.name.common}</h1>
           <img src=${js.flags.png}>
           </div>`
        }
        document.getElementById('country-information').innerHTML = countryInfo

      })
}