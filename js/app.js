
const closeBtn = document.querySelector(".cart-close")
const close = document.querySelector(".cart")
const eliminarclose = document.querySelector(".eliminar-close")
const prenda1 = document.querySelector(".hoodies")
const prenda2 = document.querySelector(".shirts")
const prenda3 = document.querySelector(".sweatshirts")
let allcontainerCard = document.querySelector(".productos-card")
let containerBuyCart = document.querySelector(".cart-container")
let pricetotal = document.querySelector(".cart-price-total")

let buyThings = [];
let totalcard = 0;

closeBtn.addEventListener("click", (e) => {
    close.classList.add("close")
})

eliminarclose.addEventListener("click", (e => {
    close.classList.remove("close")
}))

    loadEventListenrs()
function loadEventListenrs(){
    allcontainerCard.addEventListener("click", addproduct);

    containerBuyCart.addEventListener("click", deleteProduct);
}

function addproduct(e){
    e.preventDefault();
    if(e.target.classList.contains("productorbuttona")){
        const selectproduct = e.target.parentElement;
        readThecontent(selectproduct);
       // console.log(e.target.parentElement);
    }
    
}
function deleteProduct(e) {
    if(e.target.classList.contains(".cart-trash")){
        const deleteId = e.target.getAttribute("id");
        buyThings = buyThings.filter(product => product.id !== deleteId)
    }
    loadHtml();
}
function readThecontent(product){
    const infoproduct = {
        image: product.querySelector("div img").src,
        title: product.querySelector(".producto-name").textContent,
        price: product.querySelector(".producto-price2").textContent,
        id: product.querySelector("button i").getAttribute("id"),
        amount: 1
    }

    totalcard = totalcard + infoproduct.price;


    const exist = buyThings.some(product => product.id === infoproduct.id)
    if(exist){
        const pro = buyThings.map(product => {
            if(product.id === infoproduct.id){
                product.amount++;
                return product
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else{
        buyThings = [...buyThings, infoproduct]
    }
    loadHTML();
}

function loadHTML(){
    clearHtml();
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
                    </div>
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
                        <button>
                            <i class="fa-regular fa-trash-can cart-trash"></i> 
                        </button
                    </div>
                </div>
            </article>`;

            containerBuyCart.appendChild(row);

            pricetotal.innerHTML = totalcard;
    });
}
function clearHtml(){
    containerBuyCart.innerHTML ="";}