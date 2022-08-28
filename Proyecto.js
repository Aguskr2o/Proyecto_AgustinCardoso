function Solicitar_nombre() {
    let nombre_cliente = prompt("Ingrese su nombre");
    while (nombre_cliente == "") {
        alert("No ingresaste tu nombre");
        nombre_cliente = prompt("Ingrese su nombre nuevamente");
    }
    alert("Bienvenido/a " + nombre_cliente);

}

function Solicitar_telefono() {
    let numero_cliente = prompt("Ingrese su numero de celular");
    while (numero_cliente == "") {
        alert("No ingresaste tu telefono!");
        numero_cliente = prompt("Ingrese su telefono nuevamente")
    }
    alert("el numero ingresado es " + numero_cliente);
}



    class Producto {
        constructor(nombre, precio, categoria) {
            this.nombre = nombre;
            this.precio = precio;
            this.categoria = categoria;
        }

        get_datos() {
            console.log("datos del producto");
            console.log("Nombre:", this.nombre);
            console.log("precio:", this.precio);
            console.log("categoria", this.categoria);
        }
    }

    //Verduleria//
    let acelga = new Producto("acelga", 309, "Verduras");
    let batata = new Producto("batata", 109, "Verduras");
    let berenjena = new Producto("berenjena", 169, "Verduras");
    let brocoli = new Producto("brocoli", 499, "Verduras");
    let calabaza = new Producto("calabaza", 205, "Verduras");
    let cebolla = new Producto("cebolla", 129, "Verduras");
    let coliflor = new Producto("coliflor", 240, "Verduras");
    let espinaca = new Producto("espinaca", 50, "Verduras");
    let lechuga = new Producto("lechuga", 120, "Verduras");
    let palta = new Producto("palta", 410, "Verduras");
    let papa = new Producto("papa", 42, "Verduras");
    let rucula = new Producto("rucula", 300, "Verduras");
    let tomate = new Producto("tomate", 250, "Verduras");
    let zanahoria = new Producto("zanahoria", 225, "Verduras");
    let zapallito = new Producto("zapallito", 219, "Verduras");

    //Fruteria//
    let banana = new Producto("banana", 169, "Frutas");
    let limon = new Producto("limon", 99, "Frutas");
    let mandarina = new Producto("mandarina", 85, "Frutas");
    let manzana = new Producto("manzana", 179, "Frutas");
    let naranja = new Producto("naranja", 75, "Frutas");
    let pera = new Producto("pera", 169, "Frutas");
    let pomelo = new Producto("pomelo", 135, "Frutas");
    let uva = new Producto("uva", 349, "Frutas");

    //Almacen//
    let arroz = new Producto("arroz", 94, "Almacen");
    let harina = new Producto("harina", 80, "Almacen");
    let fideos = new Producto("fideos", 135, "Almacen");
    let azucar = new Producto("azucar", 140, "Almacen");
    let cacao = new Producto("cacao", 105, "Almacen");
    let cafe = new Producto("cafe", 730, "Almacen");
    let te = new Producto("te", 118, "Almacen");
    let yerba = new Producto("yerba", 580, "Almacen");
    let dulce_de_leche = new Producto("dulce de leche", 290, "Almacen");
    let mermelada = new Producto("mermelada", 148, "Almacen");
    let miel = new Producto("miel", 504, "Almacen");
    let galletitas = new Producto("galletitas", 200, "Almacen");

    //Bebidas//
    let agua = new Producto("agua", 94, "Bebidas");
    let gaseosa = new Producto("gaseosa", 209, "Bebidas");
    let jugos = new Producto("jugos", 131, "Bebidas");
    let soda = new Producto("soda", 133, "Bebidas");
    let cerveza_lata = new Producto("cerveza_lata", 250, "Bebidas");
    let vino_promedio = new Producto("vino_promedio", 500, "Bebidas");

    //Limpieza//
    let desengrasante = new Producto("desengrasante", 135, "Limpieza");
    let detergente = new Producto("detergente", 750, "Limpieza");
    let esponja = new Producto("esponja", 135, "Limpieza");
    let Jabon_ropa = new Producto("Jabon ropa", 870, "Limpieza");
    let lavandina = new Producto("lavandina", 75, "Limpieza");
    let liquido_pisos = new Producto("liquido para pisos", 208, "Limpieza");
    let suavizante = new Producto("suavizante", 650, "Limpieza");

    //Baño//
    let acondicionador = new Producto("acondicionador", 753, "Baño");
    let dentifrico = new Producto("dentifrico", 596, "Baño");
    let desodorante = new Producto("desodorante", 390, "Baño");
    let jabon_tocador = new Producto("jabon de tocador", 127, "Baño");
    let papel_higienico = new Producto("papel higienico", 307, "Baño");
    let shampoo = new Producto("shampoo", 629, "Baño");

    //Lacteos//
    let leche = new Producto("leche", 188, "Lacteos");
    let crema = new Producto("crema", 342, "Lacteos");
    let manteca = new Producto("manteca", 206, "Lacteos");
    let queso = new Producto("queso", 500, "Lacteos");
    let yogurt = new Producto("yogurt", 290, "Lacteos");

    //Carne//
    let cerdo = new Producto("cerdo", 650, "Carne");
    let pollo = new Producto("pollo", 550, "Carne");
    let merluza = new Producto("merluza", 750, "Carne");
    let res = new Producto("res", "el rosquete", "Carne");


   
   
    let lista = []

    function agregar_a_lista(Producto) {
        lista.push(Producto);

    }






    
agregar_a_lista(merluza);
agregar_a_lista(acondicionador);
console.log(lista);

Solicitar_nombre()
Solicitar_telefono()