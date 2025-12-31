// ===== 2026 COUNTER CONFIG =====
const startDate = new Date('2026-01-01T00:00:00'); // Start of 2026
const startCount = 0;
const endCount = 283200; // 283.2k target for 2026

const msInAYear = 365 * 24 * 60 * 60 * 1000;
const incrementPerMs = (endCount - startCount) / msInAYear;

// ===== UPDATE FUNCTION =====
function updateCounter() {
    const now = new Date();
    const elapsedTime = now - startDate;

    // Calculate count
    let currentCount = Math.floor(startCount + elapsedTime * incrementPerMs);

    // Clamp so it never exceeds target
    if (currentCount > endCount) {
        currentCount = endCount;
    }
    if (currentCount < 0) {
        currentCount = 0;
    }

    // Ensure 6 digits (leading zeros)
    const formattedCount = currentCount.toString().padStart(6, '0');

    // Update each digit
    const digitElements = document.querySelectorAll('.digit');

    digitElements.forEach((digitEl, i) => {
        const newDigit = formattedCount[i];

        if (digitEl.textContent !== newDigit) {
            digitEl.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                digitEl.textContent = newDigit;
                digitEl.style.transform = 'translateY(0)';
            }, 400);
        }
    });

    requestAnimationFrame(updateCounter);
}

// Start the counter
updateCounter();
