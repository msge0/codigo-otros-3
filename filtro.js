// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
]

// se modifica el metodo para acceder al id del elemento div en dom

const list = document.getElementById("lista-de-productos");
//se quita el . porque no es una clase y se esta accediendo al elemento input del dom con el metodo query
const input = document.querySelector("input");


// Se define la función para mostrar los productos filtrados en el DOM
const displayProductos = (productos) => {


  for (let i = 0; i < productos.length; i++) {
    //se declara la variable como element
    var element = document.createElement("div");
    element.classList.add("producto");

    //se declara la variable como name 
    var name = document.createElement("p");
    name.classList.add("titulo");
    name.textContent = productos[i].nombre;

    //se declara la variable como image
    var image = document.createElement("img");
    image.setAttribute('src', productos[i].img);

    element.appendChild(name);
    element.appendChild(image);

    list.appendChild(element);
  }
}

const botonDeFiltro = document.querySelector("button");

//se crea la funcion para filtrar al presionar el boton 
botonDeFiltro.onclick = function() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);
}

const filtrado = (productos, texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  