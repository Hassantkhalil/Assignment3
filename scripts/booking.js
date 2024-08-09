/********* create variables *********/
// Useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

let costPerDay = 35; // Initial cost per day (full day rate)
let dayCounter = 0;
let totalCost = 0;

const dayButtons = document.querySelectorAll('.day-selector li');
const clearButton = document.querySelector('#clear-button');
const halfDayButton = document.querySelector('#half');
const fullDayButton = document.querySelector('#full');
const calculatedCostElement = document.querySelector('#calculated-cost');

/********* colour change days of week *********/
// When the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables.
// Then, we can recalculate the total cost.

dayButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            dayCounter++;
        } else {
            button.classList.remove('clicked');
            dayCounter--;
        }
        calculateTotalCost();
    });
});

/********* clear days *********/
// When the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', function() {
    dayButtons.forEach(function(button) {
        button.classList.remove('clicked');
    });
    dayCounter = 0;
    calculateTotalCost();
});

/********* change rate *********/
// When the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function() {
    costPerDay = 20; // Half-day rate
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateTotalCost();
});

// When the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function() {
    costPerDay = 35; // Full-day rate
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateTotalCost();
});

/********* calculate *********/
// When a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value.

function calculateTotalCost() {
    totalCost = dayCounter * costPerDay;
    calculatedCostElement.innerHTML = totalCost.toString();
}

