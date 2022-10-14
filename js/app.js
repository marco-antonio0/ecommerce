
const closeBtn = document.querySelector(".cart-close")
const close = document.querySelector(".cart")
const eliminarclose = document.querySelector(".eliminar-close")
const prenda1 = document.querySelector(".hoodies")
const prenda2 = document.querySelector(".shirts")
const prenda3 = document.querySelector(".sweatshirts")
let allcontainerCard = document.querySelector(".productos-card")
let containerBuyCart = document.querySelector(".cart-container")
let buyThings = []

closeBtn.addEventListener("click", (e) => {
    close.classList.add("close")
})

eliminarclose.addEventListener("click", (e => {
    close.classList.remove("close")
}))

    loadEventListenrs()
function loadEventListenrs(){
    allcontainerCard.addEventListener("click", addproduct);
}

function addproduct(e){
    e.preventDefault();
    if(e.target.classList.contains("productorbuttona")){
        const selectproduct = e.target.parentElement;
        readThecontent(selectproduct);
       // console.log(e.target.parentElement);
    }
    
}

function readThecontent(product){
    const infoproduct = {
        image: product.querySelector("div img").src,
        title: product.querySelector(".producto-name").textContent,
        price: product.querySelector(".producto-price2").textContent,
        id: product.querySelector("button i").getAttribute("id"),
        amount: 1
    }

    buyThings = [...buyThings, infoproduct]
    loadHTML();

    console.log(infoproduct);
}

function loadHTML(){
    buyThings.forEach(product => {
        const {image, title, price, id, amount} = product;
        const row = document.createElement("div");
        row.classList.add("item");
        row.innerHTML = `
        <article class="cart--card">
                <div class="cart-box">
                    <img class="cart-img-box" src="${image}"
                <div class="cart-details">
                    <h3 class="cart-title-h3">${title}</h3>
                    <span class="cart-stock">stock: 10 | </div>
                    <span class="cart-subtotal">Subtotal: ${price}</span>
                    <div class="cart-amount">
                        <div class="cart-amount-content">
                            <span class="cart-amount-box minus">
                                <i class="fa-solid fa-minus"></i>
                            </span>
                            <span class="cart-amount-number">${amount} units</span>
                            <span class="cart-amount-box plus">
                                <i class="fa-regular fa-plus" id="${id}"></i>
                            </span>
                        </div>
                        <i class="fa-regular fa-trash-can cart-trash"></i>
                    </div>
                </div>
            </article>`;

            containerBuyCart.appendChild(row);
    });
}
    




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



