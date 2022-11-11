axios.get("https://catfact.ninja/fact")
    .then(function (response) {
        document.getElementById("description").innerHTML = response.data.fact;
        document.getElementById("description2").innerHTML = response.data.fact;
    })
    .catch(function (error) {
        console.log(error);
    })

axios.get("https://api.thecatapi.com/v1/images/search")
    .then(function (response) {
        document.getElementById("img").src = response.data[0].url;
        document.getElementById("img2").src = response.data[0].url;
    })
    .catch(function (error) {
        console.log(error);
    })