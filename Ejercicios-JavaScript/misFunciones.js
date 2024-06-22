/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} nombre - El nombre de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgada
 */
let convertirUnidades = (nombre, valor) => {
    //TODO: Debería admitir números con coma.
    let metro, pulgada, pie, yarda;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        metro = "";
        pie = "";
        pulgada = "";
        yarda = "";
        alert("El valor ingresado no es correcto")
    } else if (nombre === "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;
    } else if (nombre === "pulgada") {
        pulgada = valor;
        metro = valor * 0.0254;
        pie = valor * 0.833333;
        yarda = valor * 0.02777778;
    } else if (nombre === "pie") {
        pie = valor;
        metro = valor * 0.3048;
        pulgada = valor * 12;
        yarda = valor * 0.333333;
    } else if (nombre === "yarda") {
        yarda = valor;
        metro = valor * 0.9144;
        pulgada = valor * 36;
        pie = valor * 3;
    }
    document.getElementById("metro").value = Math.round(metro * 100) / 100;
    document.getElementById("pie").value = Math.round(pie * 100) / 100;
    document.getElementById("pulgada").value = pulgada.toFixed(2);
    document.getElementById("yarda").value = yarda.toFixed(2);
}

/**
 * Permite convertir grados a radianes y viceversa.
 * @method convertirGR
 * @param {string} id - grados, radianes
 */
function convertirGR(id) {
    let grad, rad;
    //TODO: Agregar mensajes de error cuando se agregan letras.
    //TODO: Debería admitir números con coma.
    if (id == "grados") {
        grad = document.getElementById("grados").value;
        rad = (grad * Math.PI) / 180;
        document.getElementById("radianes").value = rad;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        grad = (rad * 180) / Math.PI
        document.getElementById("grados").value = grad;
    }
}

/**
 * Permite mostrar y ocultar un div en base a la selección de un radio button
 * @param mostrar_ocultar
 * @param {string} valor - contiene: val_mostrar, val_ocultar
 */
let mostrar_ocultar = (valor) => {
    if (valor === "val_mostrar") {
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else if (valor === "val_ocultar") {
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}
/**
 * Permite sumar 2 numeros ingresados por el usuario
 * @param suma
 */
let suma = () => {
    const s1 = Number(document.getElementById("nums1").value);
    const s2 = Number(document.getElementById("nums2").value);
    document.getElementById("totalS").innerHTML = s1 + s2;
}

/**
 * Permite restar 2 numeros ingresados por el usuario
 * @param resta
 */
let resta = () => {
    const r1 = Number(document.getElementById("numr1").value);
    const r2 = Number(document.getElementById("numr2").value);
    document.getElementById("totalR").innerHTML = r1 - r2;
}

/**
 * Permite dividir 2 numeros ingresados por el usuario
 * @param divide
 */
let divide = () => {
    const d1 = Number(document.getElementById("numd1").value);
    const d2 = Number(document.getElementById("numd2").value);
    document.getElementById("totalD").innerHTML = d1 / d2;
}

/**
 * Permite multiplicar 2 numeros ingresados por el usuario
 * @param resta
 */
let multiplica = () => {
    const m1 = Number(document.getElementById("numm1").value);
    const m2 = Number(document.getElementById("numm2").value);
    document.getElementById("totalM").innerHTML = m1 * m2;
}

/**
 * Permite pasar valores ingresados por el usuario
 * @param pasarValores
 */
function pasarValores() {
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementById("unidades").value;

    //window.open("segundaWeb.html#"+distancia+"#"+unidad); FORMA QUE NO SE USA MUCHO
    window.open(`segundaWeb.html#${distancia}#${unidad}`);
}

/**
 * Permite tomar los valores ingresados por el usuario
 * @param tomarValores
 */
function tomarValores() {
    let urlCompleta = window.location.href;
    urlCompleta = urlCompleta.split("#");
    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

function guardarLS() {
    const distancia = document.getElementById("distancia").value;
    const unidad = document.getElementById("unidades").value;

    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad);
    window.open("2_Web.html");
}

function cargarLS() {
    const dist = localStorage.getItem("distanciaLS");
    const unid = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = `${dist} ${unid}`;
}

function dibujarCirculoCuadrado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const tamnio = 200;
    const alturamax = canvas.height;
    const anchomax = canvas.width;
    const margen = 10;
    ctx.fillStyle = "yellow";
    ctx.fillRect(margen, alturamax - tamnio - margen, tamnio, tamnio);
    ctx.fillStyle = "blue";
    ctx.arc(anchomax / 2, alturamax / 2, tamnio / 2, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

function cargarEventListener() {
    document.getElementById("myCanvas").addEventListener("mousemove", dibujar);
}

var bandera;

function dibujar(event) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };
    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
    }
}

function BorrarCanvas() {
    const canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}

function dibujarCuadriculado() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const paso = 20;
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    ctx.strokeStyle = "#9f9fd0";

    //LINEAS HORIZONTALES
    for (let i = paso; i < alturaMax;) {
        ctx.beginPath();
        //Acá dibujo lineas
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.stroke();

        ctx.closePath();
        //i=i+paso;
        i += paso;
    }

    //LINEAS VERTICALES
    for (let i = paso; i < anchoMax;) {
        ctx.beginPath();
        //Acá dibujo lineas
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.stroke();

        ctx.closePath();
        //i=i+paso;
        i += paso;
    }

    //EJE X
    ctx.strokeStyle = "#ff071b";
    ctx.beginPath();
    //Acá dibujo lineas
    ctx.moveTo(0, alturaMax / 2);
    ctx.lineTo(anchoMax, alturaMax / 2);
    ctx.stroke();

    ctx.closePath();

    //EJE Y
    ctx.strokeStyle = "#ff071b";
    ctx.beginPath();
    //Acá dibujo lineas
    ctx.moveTo(anchoMax / 2, 0);
    ctx.lineTo(anchoMax / 2, alturaMax);
    ctx.stroke();

    ctx.closePath();
}

function dibujarImagen(posX, posY) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);
    const img = new Image();
    img.src = "images/auto.png";
    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, posX, posY);
    }
    if (posX<0 || posY<0 || posX>canvas.width || posY>canvas.canvas.height){
        mostrarDialog();
    }else{
        img.onload=function (){
            ctx.drawImage(img,posX,posY);
        }
    }
}

let mostrarDialog=()=>{
    const dialog=document.getElementById("mensajeError");
    dialog.showModal();
}

let cierreDialog=()=>{
    const dialog=document.getElementById("mensajeError");
    dialog.close();
}