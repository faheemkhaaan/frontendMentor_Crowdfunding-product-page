const backThisPro = document.querySelector(".back-this-pro");
const bookmarkButton = document.querySelector(".bookmark")
const container2 = document.querySelector(".container2");
const main = document.querySelector("main")
const cross = document.querySelector(".cross");
const bamboPledge = document.querySelector(".bambo-stand")
const selectBamboPledge = document.querySelector(".select-bambo-pledge")
const progessBar = document.querySelector(".bar-top");
const amountRecivedDisplay = document.querySelector(".receive-amount");
const successModal = document.querySelector(".success-modal");
const radioSelection = document.querySelectorAll(".radio-button")
const pledgeSelection = document.querySelectorAll(".pledge")
const revealSelectedPledge = document.querySelectorAll(".revealing-selected-pledge")
const blackEdtionLeft = document.querySelectorAll(".black-left")
const bamboStandLeft = document.querySelectorAll(".bambo-left")
const specialEditon = document.querySelector(".special-edition-container");
const barTop = document.querySelector(".bar-top");

let totalBackers = 5007;
let totalAmountBacked = 89914;
let isBookmarked = false;
let selectedPledgeAmount = 0;
let blackLeft = 64;
let bamboLeft = 101;


const progessPercentage = ((89914 / 100000) * 100);

barTop.style.width = `${parseInt(progessPercentage)}%`

console.log(barTop)
console.log(barTop.style.width)



function updateTotalAmountBacked(amount) {
    totalAmountBacked += amount;

    document.querySelector(".receive-amount").textContent = `$${totalAmountBacked}`;
   const progress = (totalAmountBacked/100000)*100
    document.querySelector(".bar-top").style.width = `${progress}%`

    

}

function updateTotalBackers() {
    totalBackers += 1;
    document.querySelector(".total-backers-recieved").textContent = totalBackers;
}

function toggleBookmark() {
    isBookmarked = !isBookmarked;
    const bookmarkImg = document.querySelector("#bookmark-img");
    bookmarkImg.src = isBookmarked ? 'images/icon-bookmark-filled.svg' : 'images/icon-bookmark.svg'
}

document.querySelectorAll(".btn:not(.ignore-button)").forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();
       

        if (button.parentElement.classList.contains("bambo-stand")) {
            let bamboElement = document.getElementById("bambo-stand-value");

            let bamboValue = parseInt(bamboElement.value);
            selectedPledgeAmount = bamboValue;
           bamboLeft -= 1;
        } else if (button.parentElement.classList.contains("black")) {
            let blacKLeft = 64;
            let blackEditionElement = document.getElementById('black-edition-value');
            let blackEditionValue = parseInt(blackEditionElement.value);
            selectedPledgeAmount = blackEditionValue;
            blackLeft -= 1;
            console.log(selectBamboPledge + "selectbambopledge")
            

        } else if (button.parentElement.classList.contains("special-edition")) {
            selectedPledgeAmount = 200;
        }

        updateTotalAmountBacked(selectedPledgeAmount);
        updateTotalBackers();
        updateBamboValue(bamboLeft)
        updateBlackValue(blackLeft)

        container2.style.display = 'none'
        successModal.classList.toggle("visible");
        // document.body.style.backgroundColor = "rgba(0,0,0,0)"
        main.classList.toggle("darkBackground");
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    })
})

document.querySelector(".bookmark").addEventListener("click", toggleBookmark)

backThisPro.addEventListener("click", project)
let block = "none"
// container2.style.display = "none";

function project() {
 
    if (container2.style.display === "") {
        container2.style.display = "block";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
        main.classList.toggle("darkBackground")
      

    } else if (container2.style.display === "none") {
        container2.style.display = "block";
        block = "block";
        
        main.classList.toggle("darkBackground")
        document.body.style.backgroundColor = "rgba(0,0,0,0.3)"


    } else if (container2.style.display === "block") {
        block = 'none'
        main.classList.toggle("darkBackground")
        document.body.style.backgroundColor = "rgba(0,0,0,0)"
       

    }
}



cross.addEventListener("click", hide)

function hide() {
    container2.style.display = "none"
    if (container2.style.display === "none") {
        main.classList.toggle("darkBackground")
        document.body.style.backgroundColor = "rgba(0,0,0,0)"
    } else if (container2.style.display === "block") {
        container2.style.display = "none"
        block = 'none'
        main.classList.toggle("darkBackground")
        document.body.style.backgroundColor = "rgba(0,0,0,0)"
       
    }

}




document.querySelector(".success-modal-btn").addEventListener("click", () => {
    // document.querySelector(".success-modal").style.display = 'none'
    successModal.classList.toggle("visible")
    document.body.style.backgroundColor = "rgba(0,0,0,0)"
})
revealSelectedPledge.forEach((div) => {
    div.style.display = "none"
})

specialEditon.style.display = "none"
radioSelection.forEach((button, index) => {
    button.addEventListener("click", () => {

        pledgeSelection.forEach((div) => {
            div.style.outline = "none"
        })
        revealSelectedPledge.forEach((div) => {
            div.style.display = "none"
        })
        pledgeSelection[index].style.outline = "2px solid blue"
        revealSelectedPledge[index].style.display = "block"
        
    })
})



function updateBlackValue(blackleft){
    let value = blackleft;

    blackEdtionLeft.forEach((blackDiv) => {
        blackDiv.textContent = value;
        console.log("black button clicked")
       
    })
    console.log("hello")
}

function updateBamboValue(bamboleft){
    let value = bamboleft
    bamboStandLeft.forEach((bamboDiv) => {
        bamboDiv.textContent = value;
        console.log("bambo button clicked")
        
    })
    console.log(bamboStandLeft[1])

}