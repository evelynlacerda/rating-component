const buttons = document.querySelectorAll('.buttons button');
// SELECT ALL BUTTONS OF CLASS BUTTONS
const form = document.querySelector('#form');
const cardVote = document.querySelector('.card');
const cardThanks = document.querySelector('.thank-you');
const numbSelection = document.querySelector('#select');

function removeSelected () {
    // REMOVE CLASS SELECTED OF BUTTONS WHEN CLICK IN OTHER BUTTON
    buttons.forEach((button) => {
        button.classList.remove('selected');
    })
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonSelect = document.querySelector('.selected');

        if (buttonSelect) removeSelected();

        button.classList.add('selected');
    })
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // PREVENT DEFAULT EVENT FORM SUBMIT

    const hasSelectedOption = document.querySelector('.selected');

    if (!hasSelectedOption) return;
    // RETURN FORM SUBMIT FOR NOT SELECTED OPTION

    const selectedOption = hasSelectedOption.textContent;

    cardVote.classList.remove('active');
    cardThanks.classList.add('active');
    numbSelection.innerText = `You selected ${selectedOption} out of 5`;
    // CHANGE TEXT CARD VOTE FOR CARD THANKS
})