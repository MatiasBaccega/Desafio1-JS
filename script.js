let montoCapital;
let cantidadCuotas;


const saludo = () => {
    let nombre;
    do{
        nombre = prompt("Bienvenido al banco CODER. \nIngrese su nombre");

    } while(nombre === "" || !isNaN(nombre));

        console.log ("Hola " + nombre); 
}

const capital = () => {
    do{
montoCapital = parseInt(prompt("Ingrese el monto a simular\n Recuerde que debe ser mayor o igual a $10000"));
    }while (montoCapital < 10000 || isNaN(montoCapital))
}

const cuotas = () => {
    do {
    cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas (hasta 36) a pagar."))}
    while(cantidadCuotas > 36 || isNaN(cantidadCuotas));

} 

const resultado = () => {
    let total;
    if (montoCapital >= 10000 && montoCapital <= 250000){
        total = alert("El monto a abonar es " + cantidadCuotas + " cuotas de " + ((montoCapital * 1.2)/cantidadCuotas ) + "\n Gracias!")
    }else if (montoCapital > 250000 && montoCapital <= 500000){
        total = alert("El monto a abonar es " + cantidadCuotas + " cuotas de " + ((montoCapital * 2)/cantidadCuotas) + "\n Gracias!")
    }else if(montoCapital > 500000)
    {
        total = alert("El monto a abonar es " + cantidadCuotas + " cuotas de " + ((montoCapital * 2.5)/cantidadCuotas) + "\n Gracias!") 
    }
    else{
        alert("Ingrese un monto valido")
    }
}

/* 1.2 
    2
   2.5
SON INDICES DE INTERES */

saludo();
capital ();
cuotas ();
resultado();