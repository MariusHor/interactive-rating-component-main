const submitButton = document.querySelector('.submit-btn'); // Created a variable that grabs and stores the submit button by its class.
const cardFirstState = document.querySelector('.card__first-state'); // Created a variable that grabs and stores the first state card by its class.
const cardSecondState = document.querySelector('.card__second-state'); // Created a variable that grabs and stores the second state card by its class.
const userRating = document.querySelector('.card__user-rating'); // Created a variable that grabs and stores the span element where I will place the selected user rating.
let ratingsValue = document.querySelectorAll('.ratings__value'); // Created a variable that grabs and stores all 5 ratings values by their class.
let clickedRating = 3; // Created a variable with a default value of 3 for the clicked user rating.

submitButton.addEventListener('click', onSubmit) // Added an event listener for the submit button that listenes for a click and then executes the 'onSubmit' function

function onSubmit() {                           // Created the 'onSubmit' function that tells what should happen when the user clicks the submit button.
    cardFirstState.classList.add('hide');       // This means that the first state card should now have the 'hide' class as well.
    cardSecondState.classList.remove('hide');   // This means that the second state card should now have the 'hide' class removed.
    userRating.textContent = clickedRating;     // This means that inside the span for the selected user rating we should place the 'clickedRating' variable value which we will assign below.
}

ratingsValue.forEach(value => {                 // We created a 'for each loop' for the rating values of the first state card. We basically tell that for each 
    value.addEventListener('click', handleClick); // value we add an event listener that listenes for a user click and when that happens we execute the 'handleClick' function.
});


function handleClick(event) {                                       // Created the 'handleClick' function
    for (let i = 0; i < ratingsValue.length; i++) {                 // Created a 'for loop'
        ratingsValue[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");  // Created the 'current' variable 
      
          // If there's no active class
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
      
          // Add the active class to the current/clicked button
          this.className += " active";
        });
    };

    clickedRating = event.target.textContent; // This assigns the value of the clicked element to the 'clickedRating' variable
}


//THIS would be an alteranate solution for the 'handleClick' function

/*function handleClick(event) {
    ratingsValue.forEach(value => {
        value.classList.remove('active')
    })

    if (event.target.classList.contains('for-ratings__value')) {
    event.target.classList.add('active')
    } else {
    event.target.parentElement.classList.add('active')};

    clickedRating = event.target.textContent;
}*/