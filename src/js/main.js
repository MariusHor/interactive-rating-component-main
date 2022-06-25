const submitButton = document.querySelector('.submit-btn');
const cardFirstState = document.querySelector('.card__first-state');
const cardSecondState = document.querySelector('.card__second-state');
const userRating = document.querySelector('.card__user-rating');
let ratingsValue = document.querySelectorAll('.for-ratings__value');
let clickedRating = 3;

submitButton.addEventListener('click', onSubmit)

function onSubmit() {
    cardFirstState.classList.add('hide');
    cardSecondState.classList.remove('hide');
    userRating.textContent = clickedRating;
}

ratingsValue.forEach(value => {
    value.addEventListener('click', handleClick);
});

function handleClick(event) {
    ratingsValue.forEach(value => {
        value.classList.remove('active')
    })

    if (event.target.classList.contains('for-ratings__value')) {
    event.target.classList.add('active')
    } else {
    event.target.parentElement.classList.add('active')};

    clickedRating = event.target.textContent;
}