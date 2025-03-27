//When the button is clicked, it gets the fetchCat function
document.getElementById("fetchCat").addEventListener("click", fetchCat);
function fetchCat(){
    //catImage gets the image where the cat will be displayed
    const catImage = document.getElementById("catImage");
    catImage.hidden = true;
    fetch("https://cataas.com/cat?json=true")
        .then(response => response.json())
        .then(data => {
            //get the image url
            const imageUrl = "https://cataas.com/cat/" + data.id;
            catImage.src = imageUrl;
            //reveal image
            catImage.hidden = false;
        })
}