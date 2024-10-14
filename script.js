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

    // Format the number with commas
    const formattedCount = currentCount.toLocaleString();

    // Display the formatted count in the HTML element with id 'counter'
    document.getElementById('counter').textContent = formattedCount;

    // Continue updating the counter as long as it hasn't reached the end count
    if (currentCount < endCount) {
        requestAnimationFrame(updateCounter);  // Keep updating the counter smoothly
    }
}

// Start the counter
updateCounter();
