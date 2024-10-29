// Function to update the counter
function updateCounter() {
    const now = new Date();  // Get the current date and time
    const elapsedTime = now - startDate;  // Calculate elapsed time since start date
    const currentCount = Math.floor(startCount + elapsedTime * incrementPerMs);  // Calculate the current count

    // Format the number with commas for display
    const displayCount = currentCount.toLocaleString();  // Format with commas
    const formattedCount = currentCount.toString().padStart(6, '0');  // Six-digit, padded

    // Update each digit individually without commas for alignment
    const digitElements = document.querySelectorAll('.digit');
    for (let i = 0; i < digitElements.length; i++) {
        const newDigit = formattedCount[i];

        if (digitElements[i].textContent !== newDigit) {
            digitElements[i].style.transform = 'translateY(-100%)'; // Slide the digit out of view
            setTimeout(() => {
                digitElements[i].textContent = newDigit;  // Update the digit
                digitElements[i].style.transform = 'translateY(0)';  // Slide the digit into view
            }, 400); // Delay for smooth rolling effect
        }
    }

    // Update the data-display attribute to show formatted count
    document.getElementById('counter').setAttribute('data-display', displayCount);

    // Continue updating the counter as long as it hasn't reached the end count
    if (currentCount < endCount) {
        requestAnimationFrame(updateCounter);  // Keep updating the counter smoothly
    }
}
