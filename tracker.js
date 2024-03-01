
document.addEventListener('DOMContentLoaded', ()=> {
    setCurrentIp();
})

const setCurrentIp = async() => {
    let getUserIpUrl = 'https://api.ipify.org/?format=json';
    const searchInput = document.getElementById("search-input");

    let response = await fetch(getUserIpUrl);
    let result = await response.json();
    let ipAddress = result.ip;
    searchInput.value = ipAddress;

}

const toggleSearch = async ()=> {
    const searchInput = document.getElementById("search-input");
    let url = "https://geo.ipify.org/api/v2/country?apiKey=at_gsIoiEGBbCkViyAEuCGYe9K5PnXrQ&ipAddress="+searchInput.value;

    let response  = await fetch(url);
    if (response.ok) {
        let result = await response.json();

        let labelIp = document.getElementById('label-ip');
        let labelCity = document.getElementById('label-city');
        let labelTZ = document.getElementById('label-TZ');
        let labelIsp = document.getElementById('label-isp');

        labelIp.innerHTML   = result.ip;
        labelCity.innerHTML = result.location.region;
        labelTZ.innerHTML   = result.location.timezone;
        labelIsp.innerHTML  = result.as.name;

    }
    else {
        console.error(response.status);
    }

}

