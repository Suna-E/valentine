const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const bgMusic = document.getElementById("bgMusic"); //music

function startEverything() {
    bgMusic.play().catch(e => console.log("Playback failed:", e));
    // Remove the listeners so they don't keep firing
    document.removeEventListener('click', startEverything);
    document.removeEventListener('touchstart', startEverything);
}

document.addEventListener('click', startEverything);
document.addEventListener('touchstart', startEverything);

let noClickCount = 0;
const messages = [
    "𝐴𝑟𝑒 𝑦𝑜𝑢 𝑠𝑢𝑟𝑒? 🥺",
    "𝑎𝑟𝑒 𝑦𝑜𝑢 𝑟𝑒𝑎𝑙𝑙𝑦 𝑠𝑢𝑟𝑒?? 💔",
    "𝑎𝑟𝑒 𝑦𝑜𝑢 𝑟𝑒𝑎𝑙𝑙𝑦 𝑟𝑒𝑎𝑙𝑙𝑦 𝑠𝑢𝑟𝑒?? 🌹",
    "ℎ𝑒𝑟𝑒 𝑙𝑒𝑡’𝑠 𝑡𝑟𝑦 𝑎𝑔𝑎𝑖𝑛! ❤️"
];
/*
function playMusic() {
    bgMusic.play().catch(error => {
        console.log("Audio waiting for interaction");
    });
} //music
*/
noBtn.addEventListener("click", () => {
    //playMusic(); //music
    if (noClickCount < messages.length) {
        // Change the text of the No button to the next guilt-trip message
        noBtn.innerText = messages[noClickCount];
        
        // Increase the size of the Yes button
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 15) + "px"; 
        
        // Increase padding to keep the button looking good as it grows
        const currentPaddingTop = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
        const currentPaddingLeft = parseFloat(window.getComputedStyle(yesBtn).paddingLeft);
        yesBtn.style.padding = `${currentPaddingTop + 5}px ${currentPaddingLeft + 10}px`;
        
        noClickCount++;
    }/* else {
        // After all messages are used, keep a final message on the No button
        noBtn.innerText = "Please? ❤️";
    }*/
});



yesBtn.addEventListener("click", () => {
    //playMusic(); //music
    if (noClickCount < messages.length) {
    } else {
    //question.innerHTML = "𝑇𝑜𝑔𝑒𝑡ℎ𝑒𝑟 𝑓𝑜𝑟𝑒𝑣𝑒𝑟 𝑐ℎ𝑒́𝑟𝑖𝑒 ❤️";
    question.innerHTML = "together forever ch\u00e9rie!❤️";
    
    // Hide buttons after she says Yes
    document.querySelector('.buttons').style.display = "none";
    
    // Change background to a romantic pink
    document.body.style.backgroundColor = "#ffcdd2";
    }
    
});