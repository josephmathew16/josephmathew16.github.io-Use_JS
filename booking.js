document.addEventListener('DOMContentLoaded', function() {
    // Variables
    let dailyRate = 35;
    let dayCounter = 0;

    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const fullDayButton = document.getElementById('full');
    const halfDayButton = document.getElementById('half');
    const clearButton = document.getElementById('clear-button');
    const calculatedCost = document.getElementById('calculated-cost');

    // Event listeners
    days.forEach(day => {
        const dayElement = document.getElementById(day);
        dayElement.addEventListener('click', function() {
            if (!dayElement.classList.contains('clicked')) {
                dayElement.classList.add('clicked');
                dayCounter++;
                updateCost();
            }
        });
    });

    fullDayButton.addEventListener('click', function() {
        dailyRate = 35;
        fullDayButton.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        updateCost();
    });

    halfDayButton.addEventListener('click', function() {
        dailyRate = 20;
        halfDayButton.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        updateCost();
    });

    clearButton.addEventListener('click', function() {
        days.forEach(day => {
            const dayElement = document.getElementById(day);
            dayElement.classList.remove('clicked');
        });
        dailyRate = 35;
        fullDayButton.classList.remove('clicked');
        halfDayButton.classList.remove('clicked');
        dayCounter = 0;
        updateCost();
    });

    // Functions
    function updateCost() {
        calculatedCost.textContent = dailyRate * dayCounter;
    }
});
