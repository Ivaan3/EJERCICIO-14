const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => alert("click en el botón"))

$("#btn").click(function () {
    console.log("Hola, estoy utilizando jQuery")
})