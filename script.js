function seatClicked(elementId) {
    const getElement = document.getElementById(elementId);
    getElement.classList.remove("bg-slate-200");
    getElement.classList.add("bg-orange-400");
    getElement.classList.add("btn-disabled")



    //Selected Seat Number Increase Functionality
    const selectedSeatNumber = document.getElementById('selectedSeatNumber');
    const stringSelected = selectedSeatNumber.innerText;
    const makeNumberSelected = parseInt(stringSelected);
    const selectedNewValue = makeNumberSelected + 1;
    selectedSeatNumber.innerText = selectedNewValue;


    //Left Seat Number Functionality
    const leftSeat = document.getElementById('left-seat');
    const seat40 = leftSeat.innerText;
    const makeNumber = parseInt(seat40);
    const valueNew = makeNumber - 1;
    leftSeat.innerText = valueNew;
    console.log(valueNew);

 
    //Ticket Name Text
    const seatSelected = document.getElementById('seat-selected');
    const p = document.createElement('p');
    p.innerText = getElement.innerText;
    seatSelected.appendChild(p);


    //Ticket Economy Text
    const economy = document.getElementById('economy');
    const economyText = document.createElement('p');
    economyText.innerText = "Economy";
    economy.appendChild(economyText);


    //Ticket Price Text
    const price = document.getElementById('550');
    const priceText = document.createElement('p');
    priceText.innerText = "550";
    price.appendChild(priceText);


    const priceId = document.getElementById('priceId')
    const childCount = seatSelected.childElementCount;
    const ticketPrice = 550;
    const totalPrice = ticketPrice * childCount;
    priceId.innerText = totalPrice;

    const grandId = document.getElementById('grandId');
    const childCountNumber = seatSelected.childElementCount;
    const ticketPriceNumber = 550;
    const totalPriceNumber = ticketPriceNumber * childCountNumber;
    grandId.innerText = totalPriceNumber;


    if(childCount>4){
        alert("You Cant Select More Than 4 Seats");
        getElement.classList.add("bg-slate-200");
        getElement.classList.remove("bg-orange-400");
        priceId.innerText = "00";
        grandId.innerText = "00"

       
    }

    const applyButton = document.getElementById('apply-button');
    if(childCount>=4){
        applyButton.classList.remove("btn-disabled")
        applyButton.classList.remove("bg-red-100")
        applyButton.classList.add("bg-orange-500")
    }

 
}
function promoButton() {
    const grandId = document.getElementById('grandId');
    const totalPrice = grandId.innerText;
    const totalPriceNumber = parseInt(totalPrice);
    const promoCode = document.getElementById("promo-code");
    const codeValue = promoCode.value;
    
    const applyButton = document.getElementById("apply-button")
    if (codeValue === "NEW15") {
        const finalPrice = totalPriceNumber * 0.85;
        grandId.innerText = finalPrice;
        applyButton.classList.add("hidden")
    } 
    else if(codeValue === "COUPLE20"){
        const finalPrice = totalPriceNumber * 0.80;
        grandId.innerText = finalPrice;
        applyButton.classList.add("hidden")
    }
}

function nextButton(){
    const nextButton = document.getElementById('nextButton');    
    const seatSelected = document.getElementById('seat-selected');
    const childCount = seatSelected.childElementCount;
    if (childCount>=1) {
        nextButton.classList.remove('btn-disabled');
        nextButton.classList.remove('bg-gray-500');
        nextButton.classList.add('bg-yellow-400');
    }
}