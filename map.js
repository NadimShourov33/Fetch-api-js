function getIP(){
    let ip = document.getElementById("ipaddress").value;
    let url =` https://api.ipgeolocation.io/ipgeo?ip=${ip}&apiKey=a25ad4b491824dd28d0ecf74b70838fa
    `
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let lat = data.latitude;
      let long = data.longitude;
      console.log(lat,long);
    })
    
    .catch(error => console.error('Error:', error));
     
  }