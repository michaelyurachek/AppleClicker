// Get the input element
const factoryNameInput = document.getElementById('factoryName');

// Add click event listener to the input element
factoryNameInput.addEventListener('click', function() {
    // Prompt user to enter new factory name
    let newName = prompt("Enter the new name for the factory (up to 20 characters):");
    
    // Check if user entered a name
    if (newName !== null) {
      // Trim the input to limit to 20 characters
      newName = newName.trim().substring(0, 10);
      
      // Append " Apple Factory" to the entered name
      newName += " Apple Factory";
      
      // Update input field value with the new name
      this.value = newName;
    }
  });


let totalApples = 0;
let multi = 1;

const appleButton = document.getElementById('appleButton');
const appleTotal = document.getElementById('appleTotal');
const applePerSec = document.getElementById('applePerSecond');

appleButton.addEventListener('click', function() {
    totalApples += 1 * multi;
    var audio = new Audio('/AppleClicker/asset/mp3/bop.wav'); // Change to /AppleClicker 
    audio.play();
    // Check if totalApples is a whole number
    if (Number.isInteger(totalApples)) {
        appleTotal.value = totalApples + " Apples"; // Display as whole number
    } else {
        totalApples = Math.round(totalApples * 10) / 10; // Round to nearest tenth
        appleTotal.value = totalApples.toFixed(1) + " Apples"; // Display rounded value with one decimal place
    }
});

function playHoverSound() {
    var audio = new Audio('/AppleClicker/asset/mp3/hoverSound.wav'); // Change to /AppleClicker 
    audio.play();
}

function playClickSound() {
    var audio = new Audio('/AppleClicker/asset/mp3/clickSound.wav'); // Change to /AppleClicker 
    audio.play();
}