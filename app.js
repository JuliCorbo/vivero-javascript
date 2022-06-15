const usuario1 = prompt("ingrese su nombre de usuario")

alert("hola " + usuario1 + " " + "bienvenido a la tienda virtual de Vivero Pimpaji!")

console.log( usuario1 + "inicio session")

const seccion = prompt("en esta tienda encontraras los mejores fertilizantes! Para continuar ingrese SI o Ingrese NO para salir")




    console.log ( usuario1 + " " + "ingreso a la tienda virtual")


    class Fertilizantes {
        constructor (id, variedad, volumen, precio) {
            this.id = id;
            this.variedad = variedad;
            this.volumen = volumen;
            this.precio = precio;
        }

    }

    const productos = [];

    productos.push(new Fertilizantes(1, "floracion", "20ml", 500));
    productos.push(new Fertilizantes(2,"hierro","20ml",500));
    productos.push(new Fertilizantes(3, "fertilizador", "300gr", 450));

    


    const carrito = [];

    function agregarCarrito(tipo, cantidad) {
        const buscar = productos.filter(elemento => elemento.id === tipo).map(elemento=>{
            return {
                id: elemento.id,
                variedad: elemento.variedad,
                volumen: elemento.volumen,
                precio: elemento.precio * cantidad
            }
        })

        carrito.push(buscar)
    }


    function sumar(){
        return carrito.reduce((acumulador, elemento) => acumulador + elemento [0].precio, 0)
    }
    while(seccion != "no" || seccion != "No"){
        alert("usted ingreso a la seccion de fertilizantes")
        let tipo = Number(prompt("ingrese que fertilizante desea. 1 para nuquifol. 2 para quelafol. 3 para nitrofosca. 4 para salir"));
        
        if(tipo !=4){
            let cantidad = Number(prompt("ingrese la cantidad que necesita"));
            console.log(usuario1 + " ingreso" + " " + cantidad + " "+ "de id" + " "+ tipo )
            agregarCarrito(tipo,cantidad);

        }else{
            alert(`el total de su pedido es de $ ${sumar()}`)
            console.log(`el total del pedido de ${usuario1} es de ${sumar()}`)
            break;
        }


      
    }
    
    console.log(carrito[0][0].precio)
    console.log(carrito[0][0].volumen)
    console.log(carrito[0][0].variedad)
    

