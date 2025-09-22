document.addEventListener('DOMContentLoaded', () => { 
    const optionCards = document.querySelectorAll('.option-card'); 
    const nextBtn = document.querySelector('.next-btn'); 
 
    optionCards.forEach(card => { 
        card.addEventListener('click', () => { 
            // Remove 'selected' class from all option cards 
            optionCards.forEach(c => c.classList.remove('selected')); 
            // Add 'selected' class to the clicked card 
            card.classList.add('selected'); 
        }); 
    }); 
 
    // You can add more logic here for quiz progression, 
    // e.g., handling the next button click to move to the next 
question. 
    nextBtn.addEventListener('click', () => { 
        const selectedOption = 
document.querySelector('.option-card.selected'); 
        if (selectedOption) { 
            alert(`You selected: ${selectedOption.dataset.value}. 
Moving to the next question.`); 
            // Implement logic to load the next question here. 
        } else { 
            alert('Please select an option before proceeding.'); 
        } 
    }); 
 
    // Example of a 'Submit Quiz' button handler. 
    const submitBtn = document.querySelector('.submit-btn'); 
    submitBtn.addEventListener('click', () => { 
        // Implement logic to handle quiz submission. 
        alert('Quiz submitted!'); 
    }); 
}); 