// Vamos a cambiar el color del body

// Paso1 como podemos obtener un elemento desde JS

// Antigua
const cuerpoDeLaWeb = document.getElementsByTagName("body");
console.log("getElementsByTagName", cuerpoDeLaWeb[0]);

// Moderna
const body = document.querySelector("body");
//body.style.backgroundColor = "#eee";
//body.style.fontSize = "20px";

body.style.cssText = `
background-color: #eee;
font-size: 20px;
`;


const secondaryTitles = document.getElementsByTagName("h2");

for(const item of secondaryTitles) {
    console.log(item);
    //console.log("%o", document.getElementsByTagName("h2"))
}

console.log("------")

const secondaryTitles2 = document.querySelectorAll("h2");
secondaryTitles2.forEach((item) => {
    console.log(item);
    //console.log("%o", document.querySelectorAll("h2"));
});

// Obtener elemento por ID
// Antigua
const title = document.getElementById("title");

// Moderna
const title2 = document.querySelector("#title");

// Obtener elementos por class
// Antigua
const imageAvengers = document.getElementsByClassName("img-avengers");
console.log(imageAvengers);

// Moderna
const imageAvengers2 = document.querySelector(".img-avengers")

// button
const btnChangeWeb = document.querySelector("#btn-change-web");
btnChangeWeb.onclick = function () {
    //imageAvengers2.style.width = "600px";
    imageAvengers2.src = 
    "https://e00-mx-marca.uecdn.es/mx/assets/multimedia/imagenes/2023/04/15/16815385483724.jpg";
    imageAvengers2.style.cssText = `width : 200px`;
    title2.textContent = "Super Mario Bros"
};
