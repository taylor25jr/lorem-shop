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




//variables y constantes
let headphones = 0;
let control = 0;
let iphone = 0;
let airdrop = 0;
let galaxy = 0;
let xbox = 0;
let ipad = 0;
let card = 0;
let total = 0;

const quantities = {
    headphones: 0,
    control: 0,
    iphone: 0,
    airdrop: 0,
    galaxy: 0,
    xbox: 0,
    ipad: 0,
    card: 0,
  };


const quantityElements = {
    headphones: document.querySelector('#cantidad-headphones'),
    control: document.querySelector('#cantidad-control'),
    iphone: document.querySelector('#cantidad-iphone'),
    airdrop: document.querySelector('#cantidad-airdrop'),
    galaxy: document.querySelector('#cantidad-galaxy'),
    xbox: document.querySelector('#cantidad-xbox'),
    ipad: document.querySelector('#cantidad-ipad'),
    card: document.querySelector('#cantidad-card'),
  };



//eventos

buyHeadphones.addEventListener('click', () => {
    total += parseInt(headphonesprice);
    mostrarTotal.innerHTML = total + 'USD';
    quantities.headphones++
    const listCant = document.querySelector('#cantidad');
    const listItems = document.querySelector('#elements');
    const listPrice = document.querySelector('#price');
    
    quantityElements.headphones.innerHTML = quantities.headphones;


    if(!listItems.innerHTML.includes('headphones')){
        const div = document.createElement('div');
        div.innerHTML = 'headphones';
        listItems.appendChild(div)}
        
        if (!listPrice.innerHTML.includes(parseInt(headphonesprice))) {
            const div = document.createElement('div');
            div.innerHTML = headphonesprice;
            listPrice.appendChild(div)
        }

        
        
        
    })
    
    
    buyControl.addEventListener('click', () => {
        total += parseInt(controlPrice);
        mostrarTotal.innerHTML = total + 'USD';
        quantities.control++
        const listCant = document.querySelector('#cantidad');
        const listItems = document.querySelector('#elements');
        const listPrice = document.querySelector('#price');
        
        quantityElements.control.innerHTML = quantities.control;

        
    if(!listItems.innerHTML.includes('control')){
        const div = document.createElement('div');
        div.innerHTML = 'control';
        listItems.appendChild(div)}
        
        if (!listPrice.innerHTML.includes(parseInt(controlPrice))) {
            const div = document.createElement('div');
            div.innerHTML = controlPrice;
            listPrice.appendChild(div)
        }
        
        
        
        
    })
    
    buyIphone.addEventListener('click', () => {
        
        total += parseInt(iphonePrice);
        mostrarTotal.innerHTML = total + 'USD';
        quantities.iphone++
        quantityElements.iphone.innerHTML = quantities.iphone;
        
        const listCant = document.querySelector('#cantidad');
        const listItems = document.querySelector('#elements');
        const listPrice = document.querySelector('#price');
        
      
        
        
        
    if(!listItems.innerHTML.includes('iphone')){
        const div = document.createElement('div');
        div.innerHTML = 'iphone';
        listItems.appendChild(div)}
        
        if (!listPrice.innerHTML.includes(parseInt(iphonePrice))) {
            const div = document.createElement('div');
            div.innerHTML = iphonePrice;
            listPrice.appendChild(div)
        }
    
        
        
        
        
    })
    
    buyAirdrop.addEventListener('click', () => {
        total += parseInt(airdropPrice);
        mostrarTotal.innerHTML = total + 'USD';
        
        airdrop++
        const listCant = document.querySelector('#cantidad');
        const listItems = document.querySelector('#elements');
        const listPrice = document.querySelector('#price');
        
    
    
    if(!listItems.innerHTML.includes('airdrop')){
        const div = document.createElement('div');
        div.innerHTML = 'airdrop';
    listItems.appendChild(div)}

    if (!listPrice.innerHTML.includes(parseInt(airdropPrice))) {
        const div = document.createElement('div');
        div.innerHTML = airdropPrice;
        listPrice.appendChild(div)
    }
    
})

buyGalaxy.addEventListener('click', () => {
    total += parseInt(galaxyPrice);
    mostrarTotal.innerHTML = total + 'USD';

    galaxy++
    const listCant = document.querySelector('#cantidad');
    const listItems = document.querySelector('#elements');
    const listPrice = document.querySelector('#price');

    listCant.innerHTML = galaxy;
    
    if(!listItems.innerHTML.includes('galaxy')){
        const div = document.createElement('div');
        div.innerHTML = 'galaxy';
    listItems.appendChild(div)}

    if (!listPrice.innerHTML.includes(parseInt(galaxyPrice))) {
        const div = document.createElement('div');
        div.innerHTML = galaxyPrice;
        listPrice.appendChild(div)
    }

    
   

})

buyXbox.addEventListener('click', () => {
    total += parseInt(xboxPrice);
    mostrarTotal.innerHTML = total + 'USD';

    xbox++
    const listCant = document.querySelector('#cantidad');
    const listItems = document.querySelector('#elements');
    const listPrice = document.querySelector('#price');

    listCant.innerHTML = xbox;
    
    if(!listItems.innerHTML.includes('xbox')){
        const div = document.createElement('div');
        div.innerHTML = 'xbox';
    listItems.appendChild(div)}

    if (!listPrice.innerHTML.includes(parseInt(xboxPrice))) {
        const div = document.createElement('div');
        div.innerHTML = xboxPrice;
        listPrice.appendChild(div)
    }

})


buyIpad.addEventListener('click', () => {
    total += parseInt(ipadPrice);
    mostrarTotal.innerHTML = total + 'USD';

    ipad++
    const listCant = document.querySelector('#cantidad');
    const listItems = document.querySelector('#elements');
    const listPrice = document.querySelector('#price');

    listCant.innerHTML = ipad;
    
    if(!listItems.innerHTML.includes('ipad')){
        const div = document.createElement('div');
        div.innerHTML = 'ipad';
    listItems.appendChild(div)}

    if (!listPrice.innerHTML.includes(parseInt(ipadPrice))) {
        const div = document.createElement('div');
        div.innerHTML = ipadPrice;
        listPrice.appendChild(div)
    }

    
    

})

buyCard.addEventListener('click', () => {
    total += parseInt(cardPrice);
    mostrarTotal.innerHTML = total + 'USD';

    card++
    const listCant = document.querySelector('#cantidad');
    const listItems = document.querySelector('#elements');
    const listPrice = document.querySelector('#price');

    listCant.innerHTML = card;
    
    
    if(!listItems.innerHTML.includes('card')){
        const div = document.createElement('div');
        div.innerHTML = 'card';
    listItems.appendChild(div)}

    if (!listPrice.innerHTML.includes(parseInt(cardPrice))) {
        const div = document.createElement('div');
        div.innerHTML = cardPrice;
        listPrice.appendChild(div);
    }

    
  

})

