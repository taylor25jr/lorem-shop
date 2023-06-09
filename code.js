// carrito de compras


const buyHeadphones = document.querySelector('#buy-headphones');
const buyControl = document.querySelector('#buy-control');
const buyIphone = document.querySelector('#buy-iphone');
const buyAirdrop = document.querySelector('#buy-airdrop');
const buyGalaxy = document.querySelector('#buy-galaxy');
const buyXbox = document.querySelector('#buy-xbox');
const buyIpad = document.querySelector('#buy-ipad');
const buyCard = document.querySelector('#buy-card');
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');

//prices
const precioAudifono = document.querySelector('.price-headphones');
const precioControl = document.querySelector('.price-joystick');
const precioIphone = document.querySelector('.price-iphone');
const precioAirdrop = document.querySelector('.price-airdrop');
const precioGalaxy = document.querySelector('.price-galaxy');
const precioXbox = document.querySelector('.price-xbox');
const precioIpad = document.querySelector('.price-ipad');
const precioCard = document.querySelector('.price-card');
const mostrarTotal = document.querySelector('#mostrar');

//string
const headphonesprice = parseFloat(precioAudifono.textContent.replace('$', ''));
const controlPrice = parseFloat(precioControl.textContent.replace('$', ''));
const iphonePrice = parseFloat(precioIphone.textContent.replace('$', ''));
const airdropPrice = parseFloat(precioAirdrop.textContent.replace('$', ''));
const galaxyPrice = parseFloat(precioGalaxy.textContent.replace('$', ''));
const xboxPrice = parseFloat(precioXbox.textContent.replace('$', ''));
const ipadPrice = parseFloat(precioIpad.textContent.replace('$', ''));
const cardPrice = parseFloat(precioCard.textContent.replace('$', ''));

//Array

const precios = [
    parseFloat(precioAudifono.textContent.replace('$', '')),
    parseFloat(precioControl.textContent.replace('$', '')),
    parseFloat(precioIphone.textContent.replace('$', '')),
    parseFloat(precioAirdrop.textContent.replace('$', '')),
    parseFloat(precioGalaxy.textContent.replace('$', '')),
    parseFloat(precioXbox.textContent.replace('$', '')),
    parseFloat(precioIpad.textContent.replace('$', '')),
    parseFloat(precioCard.textContent.replace('$', ''))
];


//items

const items = {
    headphones: 0,
    control: 0,
    iphone: 0,
    airdrop: 0,
    galaxy: 0,
    xbox: 0,
    ipad: 0,
    card: 0
};

//variables y constantes
let total = 0;
const selectProduct = [];
const cantidad = [];

//funcion productos en carrito

const listaArticulos = (a) => {
    const listItems = document.querySelector('#elements');

    listItems.innerHTML = '';
    const keys = Object.keys(items);

    if (!listItems.innerHTML.includes(keys[a])) {
        selectProduct.push(keys[a]);
        listItems.innerHTML = Array.from(new Set(selectProduct)).join('<br>');

    }
}


//funcion Cantidad de productos en carrito

const listaCantidad = (a) => {

    const listCant = document.querySelector('#quantity');
    listCant.innerHTML = '';

    for (const key in items) {
        const cantidadProducto = items[key];

        if (cantidadProducto > 0) {
            listCant.innerHTML += items[key] + '<br>';
        }
    }
}


//funcion precio de productos en carrito

const listaPrice = (a) => {
    const listPrice = document.querySelector('#price');

    if (!listPrice.innerHTML.includes(parseInt(precios[a]))) {
        listPrice.innerHTML += parseInt(precios[a]) + '<br>';
    }
}


//eventos

buyHeadphones.addEventListener('click', () => {
    total += parseInt(headphonesprice);
    mostrarTotal.innerHTML = total + 'USD';
    items.headphones++;
    listaArticulos(0);
    listaCantidad(0);
    listaPrice(0);

})


buyControl.addEventListener('click', () => {
    total += parseInt(controlPrice);
    mostrarTotal.innerHTML = total + 'USD';
    items.control++;
    listaArticulos(1);
    listaCantidad(1);
    listaPrice(1);


})

buyIphone.addEventListener('click', () => {

    total += parseInt(iphonePrice);
    mostrarTotal.innerHTML = total + 'USD';
    items.iphone++;

    listaArticulos(2);
    listaCantidad(2);
    listaPrice(2);



})

buyAirdrop.addEventListener('click', () => {
    total += parseInt(airdropPrice);
    mostrarTotal.innerHTML = total + 'USD';
    items.airdrop++;
    listaArticulos(3);
    listaCantidad(3);
    listaPrice(3);

})

buyGalaxy.addEventListener('click', () => {
    total += parseInt(galaxyPrice);
    mostrarTotal.innerHTML = total + 'USD';
    items.galaxy++;
    listaArticulos(4);
    listaCantidad(4);
    listaPrice(4);

})

buyXbox.addEventListener('click', () => {
    total += parseInt(xboxPrice);
    mostrarTotal.innerHTML = total + 'USD';
    items.xbox++;
    listaArticulos(5);
    listaCantidad(5);
    listaPrice(5);

})

buyIpad.addEventListener('click', () => {
    total += parseInt(ipadPrice);
    mostrarTotal.innerHTML = total + 'USD';
    items.ipad++;
    listaArticulos(6);
    listaCantidad(6);
    listaPrice(6);

})

buyCard.addEventListener('click', () => {
    total += parseInt(cardPrice);
    mostrarTotal.innerHTML = total + 'USD';
    items.card++;
    listaArticulos(7);
    listaCantidad(7);
    listaPrice(7);

})


//Carrito

