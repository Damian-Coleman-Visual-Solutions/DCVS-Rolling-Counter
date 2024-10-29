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

    // Format the number with commas for display, and as a padded string for updating individual digits
    const displayCount = currentCount.toLocaleString();  // With commas
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

    // Update the counter's text content with commas for overall display
    document.getElementById('counter').setAttribute('data-display', displayCount + ' UTD');

    // Continue updating the counter as long as it hasn't reached the end count
    if (currentCount < endCount) {
        requestAnimationFrame(updateCounter);  // Keep updating the counter smoothly
    }
}

// Start the counter
updateCounter();
