// ---------------------Add event listeners for copying color codes---------------------
document.getElementById("codeHEX").addEventListener('click', handleCopy);
document.getElementById("codeRGB").addEventListener('click', handleCopy);
// --------------------------------------------------------------------------------------




// --------------------Handle copying the color code to the clipboard--------------------
function handleCopy(event) {
    // Get the color code from the clicked element
    let colorCode = event.target.innerText;
    // Copy the color code and animate confirmation message
    let confirmationMessage = copyToClipboard(colorCode);
    textAnimation(confirmationMessage);
}
// --------------------------------------------------------------------------------------




// -------------------------copy the given text to the clipboard-------------------------
function copyToClipboard(text) {
    // Create a temporary input element
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;

    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');
    // navigator.clipboard.writeText(text); // Modern API alternative

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Return the confirmation message
    return `Color code ${text} copied to clipboard!`;
}
// --------------------------------------------------------------------------------------



// ------------------------------------Text Animation------------------------------------
// Function to animate the transition of text between two <p> elements
function textAnimation(text) {
    // Get the first and second <p> elements by their IDs
    let p1 = document.getElementById('p1');
    let p2 = document.getElementById('p2');

    // Hide the first and show the second
    p1.setAttribute('class', 'hide');
    p2.setAttribute('class', 'show');

    // Update the second <p> element with the text
    p2.innerHTML = text;

    // Revert changes after 2 seconds
    setTimeout(() => {
        p1.setAttribute('class', 'show');
        p2.setAttribute('class', 'hide');
    }, 2000);
}
// --------------------------------------------------------------------------------------





// ------------------Function to generate a random RGB color and set it------------------
function generateRandomRGB() {
    // Generate random values for red, green, and blue
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let rgb = `rgb(${red}, ${green}, ${blue})`;

    // Set the generated color
    applyColor(rgb, 'RGB');
}
// --------------------------------------------------------------------------------------




// -------------------Function to generate a random HEX color and set it-----------------
function generateRandomHEX() {
    let hex = `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;
    applyColor(hex, 'HEX');
}
// --------------------------------------------------------------------------------------




// ------------Function to apply the given color to the appropriate elements------------
function applyColor(color, type) {
    if (type === 'HEX') {
        // Set the background color and update the displayed HEX code
        // document.getElementsByClassName("hex")[0].style.backgroundColor = color;
        document.documentElement.style.setProperty('--hex-color', color);
        document.getElementById("codeHEX").innerHTML = color;
    } else if (type === 'RGB') {
        // Set the background color and update the displayed RGB code
        // document.getElementsByClassName("rgb")[0].style.backgroundColor = color;
        document.documentElement.style.setProperty('--rgb-color', color);
        document.getElementById("codeRGB").innerHTML = color;
    }
}
// --------------------------------------------------------------------------------------




// ----------------------------Generate initial random colors----------------------------
generateRandomHEX();
generateRandomRGB();
// --------------------------------------------------------------------------------------