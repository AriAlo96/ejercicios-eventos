// //Ejercicio 1
// let contenedor = document.querySelector(`.contenedor`)
// let boton = document.querySelector(`.button`)
// let cuadrado = document.querySelector(`.cuadrado`)
// let  rojo = "Rojo"

// boton.addEventListener("click",(event)=>{
// if (cuadrado.classList.contains("cuadrado")){
//     cuadrado.textContent ="Rojo"
//     cuadrado.classList.remove("cuadrado")
//     cuadrado.classList.add("cuadradoRojo");

// } else if (cuadrado.classList.contains("cuadradoRojo")){
//     cuadrado.textContent ="Celeste"
//     cuadrado.classList.remove("cuadradoRojo")
//     cuadrado.classList.add("cuadradoCeleste")
// } else {
//     cuadrado.textContent ="Gris"
//     cuadrado.classList.remove("cuadradoCeleste")
//     cuadrado.classList.add("cuadrado")
// }
// })

//Ejercicio 2
// let contenedor = document.getElementById("contenedor")
// let input = document.getElementById("input")
// let boton = document.getElementById("button2")
// let cuadrado = document.getElementById("cuadrado")

// input.addEventListener ("input",(event) => cuadrado.textContent = event.target.value)
// boton.addEventListener("click", (event)=> {
//     cuadrado.textContent = ""
//     input.value= ""
// })

//Ejercicio 3
//  let botonCalcular = document.getElementById("botonCalcular")
//  let resultado = document.getElementById("resultado")
//  let estatura = document.getElementById("estatura")
//  let peso = document.getElementById("peso")


//  botonCalcular.addEventListener("click", (evento)=>{
//      let estaturaMetros = estatura.value/100
//      let cuadradoEstatura = estaturaMetros * estaturaMetros
//      let imc = peso.value / cuadradoEstatura
//      resultado.textContent = imc
//  })

//Ejercicio 4
// let valorDolar = 700
// let valorPeso = 0.0014286
// let peso = document.getElementById("inputPeso")
// let dolar = document.getElementById("inputDolar")

// peso.addEventListener ("input", (evento)=>{
//     if (!isNaN (parseFloat(peso.value))){
//     dolar.value = parseFloat(peso.value) * valorDolar;
// } else {dolar.value=""}
// }
// )

// dolar.addEventListener ("input", (evento)=>{
//     if (!isNaN (parseFloat(dolar.value))){
//     peso.value = parseFloat(dolar.value) / valorPeso;
// } else {peso.value=""}
// }
// )