//Bloque de codigo que hara algo

/*Recomendaciones
*El nombre de la funcion sea un verbo infinitivo (ar, er, ...)
*/

/**
 * Recibir
 *  numero1 = n1
 *  numero2 = n2
 *  operador = + - * /
 */

function calcular(n1, n2, operador) {
    //...
    /*const suma = n1 + n2;
    console.log("N1:", n1);
    console.log("N2:", n2);
    console.log("Suma", suma);
    console.log("Operador:", operador);*/
    if (operador === "+") {
        return n1 + n2;
    }
    
    if (operador === "-") {
        return n1 - n2;
    }
    
    if (operador === "*") {
        return n1 * n2;
    }
    
    if (operador === "/") {
        if(n2 != 0){
            return n1 / n2;
        } else {
            return "No es posible dividir entre 0";
        }
    }
    return "Operador no identificado /valido";
}

//Siempre debemos llamar a la funcion
console.log(calcular(23, 45, "+"));
console.log(calcular(18, 0, "/"));
console.log(calcular(18, 0, ")"));


function calcular2(n1, n2, operador) {
    if (operador === "+") return n1 + n2;
    if (operador === "-") return n1 - n2;
    if (operador === "*") return n1 * n2;
    if (operador === "/") {
        if(n2 === 0) return "No es posible dividir entre 0";
        return n1 / n2;
    }
    return "Operador no identificado /valido";
}

console.log("Usando la funcion mejorada");
console.log(calcular(23, 45, "+"));
console.log(calcular(18, 0, "/"));
console.log(calcular(18, 0, ")"));

function calcular3(n1, n2, operador) {
    //Validar el error de la division
    if(n2 === 0 && operador === "/") return "No es posible dividir entre"

    const operaciones = { 
        "+": n1 + n2,
        "-": n1 - n2,
        "*": n1 * n2,
        "/": n1 / n2,
        "potencia": Math.pow(n1, n2)
    };

    return operaciones[operador] ?? "Operacion no valida";

    console.log("Usando la funcion mejorada 2");
    console.log(calcular(23, 45, "+"));
    console.log(calcular(18, 0, "/"));
    console.log(calcular(18, 0, ")"));
    console.log(calcular(4, 6, "potencia"));
}

function calcular4(n1, n2, operador) {
    try {
      return eval(`${n1}${operador}${n2}`) === Infinity
        ? "Operacion No valida"
        : eval(`${n1}${operador}${n2}`);
    } catch (err) {
      return err;
    }
  }

    console.log("Usando la funcion mejorada 3");
    console.log(calcular(23, 45, "+"));
    console.log(calcular(18, 0, "/"));
    console.log(calcular(18, 0, ")"));
    console.log(calcular(4, 6, "potencia"));


function calcular5(n1, n2, operador) {
    try {
      const res = eval(`${n1}${operador}${n2}`);
      return isFinite(res) ? res : "Operacion No valida";
    } catch (err) {
      return err;
    }
  }

    console.log("Usando la funcion mejorada 3");
    console.log(calcular(23, 45, "+"));
    console.log(calcular(18, 0, "/"));
    console.log(calcular(18, 0, ")"));
    console.log(calcular(4, 6, "potencia"));
