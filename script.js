let add_buttonP = document.getElementById("p-button");
let add_buttonImage = document.getElementById("img-button");
let add_p = document.getElementById("p-div");
let add_Image = document.getElementById("img-div");

function addP() {
    let newphrase = document.createElement("p");
    newphrase.innerText = "Hot chochlate is bad today";
    newphrase.style.color = "white"
    newphrase.style.backgroundColor = "black";
    add_Image.style.display = "none"
    add_p.style.display = "block"
    add_p.appendChild(newphrase);

}

function addImg() {
    let newImg = document.createElement("img");
    newImg.src = "pikachu.png";// <img src="images/squirtle.png"
    newImg.style.width = "300px"
    newImg.style.height = "300px"
    add_Image.style.display = "block";

    add_p.style.display = "none"

    add_Image.appendChild(newImg);
}

add_buttonP.addEventListener("click", addP);


add_buttonImage.addEventListener("click", addImg);
