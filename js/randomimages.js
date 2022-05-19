const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["image1.jpg", "images2.jpg", "images3.jpg", "images4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() { 
    let randomIndex = images [Math.floor(Math.random () * images.length)];
    console.log (randomIndex);
    image.src = "images/"+[randomIndex];
}