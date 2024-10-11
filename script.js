const startDate = new Date('2024-01-01T00:00:00');  // Starting from Jan 1, 2024, midnight
const startCount = 0;          // The initial count
const endCount = 350000;       // The final count after 1 year
const msInAYear = 365 * 24 * 60 * 60 * 1000;  // Number of milliseconds in a year
const incrementPerMs = (endCount - startCount) / msInAYear; // Increment per millisecond

function updateCounter() {
    const now = new Date();  // Current date and time
    const elapsedTime = now - startDate;  // Time that has passed since the start

    // Log the current time and elapsed time for debugging
    console.log('Current Time:', now);
    console.log('Elapsed Time (ms):', elapsedTime);
    
    // Calculate the current count
    const currentCount = Math.floor(startCount + elapsedTime * incrementPerMs);
    // Cap the count at endCount
    const displayCount = Math.min(currentCount, endCount);
    
    document.getElementById('counter').textContent = displayCount;  // Update the counter display

    // If the elapsed time is less than zero, reset to startCount
    if (elapsedTime < 0) {
        document.getElementById('counter').textContent = startCount;
    } else if (displayCount < endCount) {
        requestAnimationFrame(updateCounter);  // Keep updating the counter
    }
}

// Start the counter
updateCounter();
