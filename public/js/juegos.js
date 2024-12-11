

//inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 40;
let timerInicial = 40;
let tiempoRegresivo = null;

//apuntado a documentos HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t_restante');

//generador de numeros aleatorios
let numero =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numero = numero.sort(()=> {return Math.random()-0.5});
console.log(numero);

//funciones
function contarTiempo() {
    tiempoRegresivo = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer==0){
            clearInterval(tiempoRegresivo);
            bloquearTarjetas();
        }
    },1000);
}

function bloquearTarjetas() {
    for(let i = 0; i<=15; i++){
        let tarjetaBloqueada =document.getElementById(i);
        tarjetaBloqueada.innerHTML = numero[i];
        tarjetaBloqueada.disabled = true;
    }
}

//funcion principal
function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true;

    }
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if (tarjetasDestapadas ==1) {
        //mostrar primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numero[id];
        tarjeta1.innerHTML = primerResultado;
        
        //Desahabilitar primer boton
        tarjeta1.disabled = true;    
    }else if (tarjetasDestapadas ==2) {
        //mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numero[id];
        tarjeta2.innerHTML = segundoResultado;

        //Deshabilitar el segundo boton
        tarjeta2.disabled= true;

        //incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            //encerrar contador tarjetas destapadas
            tarjetasDestapadas = 0;

            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos == 8){
                clearInterval(tiempoRegresivo);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos}🥳🎉`;
                mostrarTiempo.innerHTML = `Fantastico solo demoraste ${timerInicial - timer}segundos🤗`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 😎👌`;

            }
        }else{
            //Mostrar momentaneamente los datos y tapar de nuevo
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled =false;
                tarjetasDestapadas = 0;
            },800)
        }

    }

}

 function toggleHamburgerMenu() {
            const menuHamburger = document.getElementById('menuHamburger');
            menuHamburger.classList.toggle('active');
        }
//fondo_static_animacion//
const animatedBackground = document.querySelector('.animated-background');

function changeGradient() {
    //colores de la paleta//
    const colors = [
        'linear-gradient(270deg, #fffff, #feb47b)',
        'linear-gradient(270deg, #2CC295, #2575fc)',
        'linear-gradient(270deg, #0eb67b, #O32221)',
        'linear-gradient(270deg, #, #O32221)',
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    animatedBackground.style.background = randomColor;
}

// el tiempode cambio es 4s//
setInterval(changeGradient, 4000);
