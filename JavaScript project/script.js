let cards = JSON.parse(localStorage.getItem("myCards")) || [];



function addCard() {
    const word = document.getElementById("word").value;
    const translation = document.getElementById("translation").value;
    
    if (word && translation) {
        cards.push({ word, translation });

        localStorage.setItem("myCards", JSON.stringify(cards));
        document.getElementById("word").value = "";
        document.getElementById("translation").value = "";

        renderCards();
    }
}

function renderCards() {
    const cardsContainer = document.getElementById("cards-container");
// clear cardsContainer content 
cardsContainer.innerHTML = "";


for (let i = 0; i < cards.length; i++) {

    const card = cards[i]; 

       // create div element 
        // document.createElement
           // add this div to cardsContainer 
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
      // put word and translation indide 
    // add this div to cardsContainer 
    cardElement.innerHTML = `
        <div class="card-inner" onclick="flipCard(this)">
            <div class="card-front">${card.word}</div>
            <div class="card-back">${card.translation}</div>
        </div>
    `;


  // cardsContainer.appendChild 
     
    cardsContainer.appendChild(cardElement);
}

// create a confirm


    }

    function deleteAllCards() {
     
        localStorage.removeItem("myCards");
    
        cards = [];
        
        const cardsContainer = document.getElementById("cards-container");
        if (cardsContainer) {
            cardsContainer.innerHTML = ''; 
        }
    }
    
  

function flipCard(cardElement) {
    cardElement.classList.toggle("flipped");
}
