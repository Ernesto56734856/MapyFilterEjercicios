let arraynuevo = [1,2,3,4]
let multiplicador = arraynuevo.map(function(arraynuevo){
    return arraynuevo * 3;
})
console.log(multiplicador)


let arrayconnumeros = [10, -5, 20, -15, 30]
let tomarnegativos = arrayconnumeros.filter(function(arrayconnumeros){
  return arrayconnumeros < 0 
})
console.log(tomarnegativos)


let listadenumeros = [1,2,3,4,5,6]
let numerosacambiar = listadenumeros.map(function(listadenumeros){
  return listadenumeros * listadenumeros
})
console.log(numerosacambiar)

let nuevalista = numerosacambiar.filter(function(numerosacambiar){
  return numerosacambiar % 2 === 0
})
console.log(nuevalista)

let palabras = ['sol','montana','rio','maravilla','playa']

let filtrapalabras = palabras.filter(function(palabras){
  return palabras.length > 5
})
let palabrasMayusculas = filtrapalabras.map(function (palabra) {
  return palabra.toUpperCase()
});
console.log(palabrasMayusculas)


let listadenumeritos = [1,2,3,4,5,6,7,8,9]
let filtradordenumeritos = listadenumeritos.filter(function(listadenumeritos){
  return !(listadenumeritos % 2 === 0)
})
console.log(filtradordenumeritos)

let multiplicadordenumeritos = filtradordenumeritos.map(function(filtradordenumeritos){
  return filtradordenumeritos * 3
})

console.log(multiplicadordenumeritos)

let mayoresquedies = multiplicadordenumeritos.filter(function(multiplicadordenumeritos){
  return multiplicadordenumeritos > 10
})

mayoresquedies





