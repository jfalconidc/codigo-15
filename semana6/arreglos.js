const personas = ["Pablo", "Juan", "Pedro", "Maria", "Lucia"];
console.log(personas[3]);
console.log(personas[5]);
personas[2] = "Nuevo Pedro";
personas[10] = "Persona 10";

// push: Agregar un elemento al final de la lista
personas.push("Alejandro");

// length: Para contar cantidad de elementos
console.log(personas.length);
console.log(personas);

// pop: Eliminar el ultimo elemento del array
const eliminado = personas.pop();
console.log("Personas despues del POP", personas, eliminado);

//unshift; Agrega un elemento al inicio
personas.unshift("Primer elemento");
console.log("Personas unshift", personas);

//shift: Elimina el primer elemento
personas.shift();
console.log("Personas shift", personas);

// FOR
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const producto = 5;
const resultado = [];
const resultado2 = [];

for (let i = 0; i < numeros.length; i++) {
    const operacion = numeros[i] * producto;
    resultado.push(operacion);
}

console.log("Calculadora", resultado);

for (const numero of numeros) {
    resultado2.push(numero * producto);
}

console.log("For of", resultado2);

const numeros2 = [2, 5, 20, 21, 1, -5]

let mayor = numeros2[0];

for(const numero of numeros2) {
    if (numero > mayor) {
        mayor = numero
    }
}

console.log(mayor);

const numeros3 = [1, 2, 13, 23, 24, 89, 104]

// Quiero un algoritmo que diga la suma de los numeros pares e impares

// Paso 1: crear 2 variables
let sumaPar = 0
let sumaImpar = 0

// Paso 2: for of
for (const numerito of numeros3) {
  if (numerito % 2 === 0) {
    sumaPar += numerito
  } else {
    sumaImpar += numerito
  }
}


console.log("Suma Par", sumaPar)
console.log("Suma Impar", sumaImpar)

const palabra = "monitor"

const vocales = ["a", "e", "i", "o", "u"]
let contador = 0
let contador2 = 0
let letraActual = ""

for (const letra of palabra) {
  for (const vocal of vocales) {
    if (letra !== vocal) {
      contador++ 
    }
  }
}

for (const letra of palabra) {
  if (!"aeiou".includes(letra)) {
    contador2++
  }
}

console.log("contador", contador)
console.log("contador2", contador2)

// map
// forEach

// Map retorna un array y ForEach solo itera

// Ejemplo de calculadora
const numeros4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map Retorna el array donde a cada elemento de numeros lo ha
// multiplicado * 
const resultado1 = numeros4.map(function (numerito1) {
  return numerito1 * 5
})

console.log(resultado1)

//-----------------------------------------

const personas2 = [
    {
      name: "Pedro",
      lastname: "Peres",
      age: 21
    },
    {
      name: "Juan",
      lastname: "Zapata",
      age: 22
    },
    {
      name: "Maria",
      lastname: "Gonzales",
      age: 25
    }
  ]
  
  // Reto solo quiero obtener los nombres de las personas y guardarlos en un array
  const nombres = personas2.map((persona) => persona.name)
  
  console.log(nombres)

  //-----------------------------------------

  function calcular(n1, n2) {
    return n1 + n2
  }
  
  const calcular2 = (n1, n2) => {
    return n1 + n2
  }
  
  // Si solo tenemos una linea dentro de la funcion esta puede abreviarse
  const calcular3 = (n1, n2) => n1 + n2
  
  const division = (n1, n2) => {
    if (n2 === 0) return "No valido"
    return n1 / n2
  }
  
  console.log(calcular2(1, 2))
  console.log(calcular2(2, 3))

  //-----------------------------------------

  // Crear una funcion que reciba un numero es indique si es par, esta retorna true si no false

// Nivel 1
const esPar = (numero) => {
    if (numero % 2 === 0) {
      return true
    } else {
      return false
    }
  }

  // Nivel 2
const esParSilvia = (numero) => {
    if (numero % 2 === 0) return true
    return false  
  }

  //-------------------------------------------

  const nombre = undefined
    const edad = 18
    //Nulish coelscing operator ??
    console.log(nombre ?? "Nombre no encontrado")
    //Operador ternario true ? si : no
    console.log(nombre ? nombre : "Nombre no encontrado")
    console.log(edad >= 18 ? "Es mayor de Edad" : "Es menor de edad")

    //-----------------------------------------

    const esParJose = (num) => num % 2 === 0 ? true : false

    const esParRel = numero => numero % 2 === 0
    esParRel(20)

    //------------------------------------------
    const personas5 = [
        {
          name: "Pedro",
          lastname: "Peres",
          age: 21
        },
        {
          name: "Juan",
          lastname: "Zapata",
          age: 22
        },
        {
          name: "Maria",
          lastname: "Gonzales",
          age: 25
        }
      ]
      
      // Reto solo quiero obtener los edades de las personas y guardarlos en un array
      const ages = personas5.map((persona) => persona.age * 10)
      // ahora quier las edades pero multiplicas x 10
      // '[21, 22, 25]'
      // '[210, 220, 250]'
      console.log(ages)

      //------------------------------------------------
      
      const numeros5 = [1, 3, 5, 7, 9]

        numeros5.forEach((numero) => {
        console.log(numero)
        })
    
    //----------------------------------------------------

    // filter
// find
const numeros6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filtras los numeros que sea multiplo de 3
// filter: retorna un array con el filtro
const numerosFiltrados = numeros6.filter((numer) => numer % 3 === 0)

const numerosFiltrados2 = numeros6.filter((numer) => {
  return numer % 3 === 0
})

const numerosFiltrados3 = numeros6.filter(function(numer) {
  if(numer % 3 === 0) {
    return numer
  }
})

console.log(numerosFiltrados)
console.log(numerosFiltrados2)
console.log(numerosFiltrados3)

// quiero filtrar a las personas que tengas mas de 21 años y su apellido contenga la "t"
const personas6 = [
    {
      name: "Pedro",
      lastname: "Peres",
      age: 21
    },
    {
      name: "Juan",
      lastname: "Zapata",
      age: 22
    },
    {
      name: "Maria",
      lastname: "Gonzales",
      age: 25
    }
]

const filtroPersona = personas6.filter((persona) => persona.age > 21 &&
persona.lastname.toLowerCase().includes("t"))


console.log(filtroPersona)

//-----------------------------------------------------

const nombres7 = ["Pepe", "Juan", "Maria", "Mercedez", "Juan", "Maria"]

const busqueda = nombres7.findIndex((nombre) => nombre === "Carlos")
const busqueda2 = nombres.find((nombre) => nombre === "Carlos")

console.log(busqueda)
console.log(busqueda2)

//----------------------------------------------------------
let par = true

const numeros8 = [2, 4, 6, 8, 10]
// Si todos los numeros son pares
for (const numero of numeros8) {
  if (numero % 2 !== 0) {
    par = false
  } 
}

console.log("resultado", par)
const todoEsPar = numeros8.every((numero) => numero % 2 === 0)
console.log("resultado con every",todoEsPar)

//---------------------------------------------------------
const numeros9 = [2, 3, 5, 7, 9]

const respuesta = numeros9.some((numero) => numero % 2 === 0)

console.log("respuesta", respuesta)
//--------------------------------------------------------


