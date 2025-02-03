function showResponse(answer) {
    const responseMessage = document.getElementById('responseMessage');
    const noButton = document.getElementById('noButton');
    
    if (answer === 'yes') {
        responseMessage.textContent = "Yay! 💕 I'm so happy you said yes! 😄 Let's make this Valentine's Day special!";
    } else {
        responseMessage.textContent = "Aww... 😔 That's okay, I'll still always care about you! 💖";
        
        // Apply animation to the "No" button when clicked
        noButton.classList.add('movingNoButton');
        
        // After animation, make it slide away
        setTimeout(function () {
            noButton.classList.remove('movingNoButton');
            noButton.classList.add('slideAwayNoButton');
        }, 500); // Wait for the initial move before sliding it away
    }
    
    // Disable the buttons after answering
    document.getElementById('yesButton').disabled = true;
    document.getElementById('noButton').disabled = true;
}
