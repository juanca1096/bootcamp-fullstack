//  Mutacion de datos. Los string no son mutables pero podemos crear copias de un dato y modificarlo

const firtsname = 'Camilo'
const firtsnameWithUppercase = firtsname.toUpperCase()

console.log(firtsname)
console.log(firtsnameWithUppercase)


// Los arrays, objetos y funciones si son mutables, podemos cambiar su valor
// Metodos de los arrays =

const list = [1]
console.log(list[0])

// No siempre queremos mutar nuestra lista inicial por eso tenemos metodos como el concat
const anotherList = list.concat(157) // concatenar valores de arrays.
console.log(anotherList)

// Objetos

const persona = {
    name : 'Camilo',
    twitter : '@Juanca1096',
    cel : 3214397291,
    age : 25,
    links : ['https://google.com', 'https://midu.live']
}

console.log(persona.age)
console.log(persona.links[0])

// forma dinamica de acceder al elemento de un objeto 
const field = 'twitter'

console.log(persona[field])


// FUNCIONES

const sumar = (a, b) => {
    console.log(a)
    console.log(b)

    return a + b
}

console.log(sumar(5, 10))

const op1 = 8
const op2 = 3

console.log(sumar(op1, op2))

function restar (a, b) { // forma de usar funciones que aplica el hoisting de js
    return a - b
}





