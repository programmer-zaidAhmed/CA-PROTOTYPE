document.addEventListener('DOMContentLoaded', () => { 
    // Select all 'Start Quiz' buttons 
    const startQuizButtons = 
document.querySelectorAll('.start-quiz-btn'); 
 
    // Add a click event listener to each button 

    
    // startQuizButtons.forEach(button => { 
    //     button.addEventListener('click', () => { 
    //         alert('Redirecting to quiz page!'); // Replace with actual redirection logic 
    //     }); 
    // }); 
 
    // Select the 'Explore Quizzes' button 
    const exploreQuizzesBtn = document.querySelector('.explore-btn'); 
 
    // Add a click event listener 
    exploreQuizzesBtn.addEventListener('click', () => { 
        // Smoothly scroll to the quizzes section 
        const quizzesSection = 
document.querySelector('.quizzes-section'); 
        if (quizzesSection) { 
            quizzesSection.scrollIntoView({ behavior: 'smooth' }); 
        } 
    }); 
});