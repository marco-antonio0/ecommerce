
const closeBtn = document.querySelector(".cart-close")
const close = document.querySelector(".cart")
const eliminarclose = document.querySelector(".eliminar-close")
const prenda1 = document.querySelector(".hoodies")
const prenda2 = document.querySelector(".shirts")
const prenda3 = document.querySelector(".sweatshirts")
const caja = document.querySelector(".cart-container")
const contenedorDeProductos = document.getElementById(".productos-content")
let carrito = []
closeBtn.addEventListener("click", (e) => {
    close.classList.add("close")
})

eliminarclose.addEventListener("click", (e => {
    close.classList.remove("close")
}))

prenda1.addEventListener("click", (e) =>{
    
})

console.log(contenedorDeProductos)
const element = caja.map((task) =>{
    return
    ` <article>
    <div class="producto-ropa">
        <img class="producto-img" src="https://academlo-store.netlify.app/assets/img/featured1.png" alt="Hoodies">
    </div>
    <div>
        <h2 class="producto-price">$14.00 <span class="producto-cantidad">| Stock: 10</span></h2>
        <h3 class="producto-name">Hoodies</h3>
        <button class="productor-button">
            <i class="fa-solid fa-plus hoodies" id="1"></i>
        </button>
    </div>
</article>  ` 
})









/*

stockproductos.forEach((producto) =>{
    const div = document.createElement("div")
    div.classList.add(".producto")
    div.innerHTML = 
    `   <div class="producto-ropa">
           <img class="producto-img" src="${producto.img}" alt="${producto.nombre}">
        </div>
        <div>
            <h2 class="producto-price">${producto.precio}<span class="producto-cantidad">| ${producto.cantidad}</span></h2>
            <h3 class="producto-name"> ${producto.nombre}</h3>
            <button class="productor-button" id="agregar${producto.id}">
                <i class="fa-solid fa-plus hoodies" ></i>
            </button>
        </div>`
    contenedorDeProductos.appendChild(div)

    const boton = document.getElementById("agregar${producto.id}")

   
})
 boton.addEventListener("click", () =>{
        agregarAlCarrito(producto.id)
    })


const agregarAlCarrito = (prodId) => {
    const item = stockproductos.find((prod) => prod.id === prodId)
    carrito.push(item)
    console.log(carrito)
}
*/



