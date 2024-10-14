// Set up the start date, initial count, and end count
const startDate = new Date('2024-01-01T00:00:00');  // Starting from Jan 1, 2024
const startCount = 0;          // The initial count
const endCount = 350000;       // The final count after 1 year
const msInAYear = 365 * 24 * 60 * 60 * 1000;  // Number of milliseconds in a year
const incrementPerMs = (endCount - startCount) / msInAYear;  // Increment per millisecond

// Function to update the counter
function updateCounter() {
    const now = new Date();  // Get the current date and time
    const elapsedTime = now - startDate;  // Calculate elapsed time since start date
    const currentCount = Math.floor(startCount + elapsedTime * incrementPerMs);  // Calculate the current count

    // Format the number with commas and ensure it's exactly 6 digits
    const formattedCount = currentCount.toString().padStart(6, '0');  // Pad with leading zeros if necessary

    // Update each digit individually
    const digitElements = document.querySelectorAll('.digit');
    for (let i = 0; i < digitElements.length; i++) {
        // Get the current digit in the counter
        const newDigit = formattedCount[i];

        // Animate the digit by updating the text content
        if (digitElements[i].textContent !== newDigit) {
            digitElements[i].style.transform = 'translateY(-100%)'; // Slide the digit out of view
            setTimeout(() => {
                digitElements[i].textContent = newDigit;  // Update the digit
                digitElements[i].style.transform = 'translateY(0)';  // Slide the digit into view
            }, 400); // Delay the update slightly to create a smooth rolling effect
        }
    }

    // Continue updating the counter as long as it hasn't reached the end count
    if (currentCount < endCount) {
        requestAnimationFrame(updateCounter);  // Keep updating the counter smoothly
    }
}

// Start the counter
updateCounter();

