const questions = [
    {
        question: "Which of the following best describes “career interest” ?",
        answers: [
            {text: "A short-term hobby" , correct: false},
            {text: "An area of work that matches personal preferences and strengths" , correct: true},
            {text: "A subject studied in school" , correct: false},
            {text: "A temporary job requirement" , correct: false},
        ]
    },
    {
        question: "Someone who enjoys solving mathematical problems might be most interested in which career ?",
        answers: [
            {text: "Graphic Designer" , correct: false},
            {text: "Software Engineer" , correct: true},
            {text: "Journalist" , correct: false},
            {text: "Photographer" , correct: false},
        ]
    },
    {
        question: "A person who is artistic and enjoys drawing or designing is likely to be interested in which career path ?",
        answers: [
            {text: "Data Analyst" , correct: false},
            {text: "Architect" , correct: true},
            {text: "Accountant" , correct: false},
            {text: "Civil Servant" , correct: false},
        ]
    },
    {
        question: "Which career interest type focuses on helping others, teaching, or working in social services ?",
        answers: [
            {text: "Conventional" , correct: false},
            {text: "Realistic" , correct: false},
            {text: "Social" , correct: true},
            {text: "Enterprising" , correct: false},
        ]
    },
    {
        question: "Which of the following careers would best suit a person with strong communication and persuasion skills ?",
        answers: [
            {text: "Sales & Marketing" , correct: true},
            {text: "Mechanical Engineer" , correct: false},
            {text: "Laboratory Scientist" , correct: false},
            {text: "Database Administrator" , correct: false},
        ]
    },
    {
        question: "If someone prefers hands-on activities and working with tools, which career category fits them best ?",
        answers: [
            {text: "Realistic" , correct: true},
            {text: "Artistic" , correct: false},
            {text: "Conventional" , correct: false},
            {text: "Investigative" , correct: false},
        ]
    },
    {
        question: "A person interested in leadership, business, and decision-making is likely to be drawn toward which career interest ?",
        answers: [
            {text: "Social" , correct: false},
            {text: "Enterprising" , correct: true},
            {text: "Artistic" , correct: false},
            {text: "Investigative" , correct: false},
        ]
    },
    {
        question: "Which career interest is most aligned with a person who enjoys organizing data, following rules, and managing information ?",
        answers: [
            {text: "Conventional" , correct: true},
            {text: "Artistic" , correct: false},
            {text: "Social" , correct: false},
            {text: "Realistic" , correct: false},
        ]
    },
    {
        question: "A student who enjoys experimenting, researching, and analyzing problems is best suited for which type of career ?",
        answers: [
            {text: "Investigative" , correct: true},
            {text: "Social" , correct: false},
            {text: "Enterprising" , correct: false},
            {text: "Artistic" , correct: false},
        ]
    },
    {
        question: "If a person enjoys performing, creating new ideas, and expressing themselves, which career interest do they belong to ?",
        answers: [
            {text: "Artistic" , correct: true},
            {text: "Realistic" , correct: false},
            {text: "Social" , correct: false},
            {text: "Conventional" , correct: false},
        ]
    }
]



const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".options-grid");
const nextButton = document.querySelector(".next-btn");
const previousButton = document.querySelector(".previous-btn");
const countNo = document.querySelector(".card-header p");
const submitButton = document.querySelector(".submit-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    countNo.innerHTML = "Question " + questionNo + " of 10";
    questionElement.innerHTML = currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
            {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer)
        });
    }


    function resetState(){
    nextButton.style.display = "none";
    previousButton.style.display = "none";
    // submitButton.style.display = "none";

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}



function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        console.log("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
        console.log("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            // button.style.background = "#9aeabc"; 
            // button.style.color = "black"; 
            
        }
        // else{
        //     // button.style.background = "#ff9393";
        //     button.style.color = "black"; 
        // }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    previousButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    // nextButton.innerHTML = "Play Again";
    nextButton.style.display = "none";
    previousButton.style.display = "none";
    submitButton.style.display = "none";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        // submitButton.style.display = "block";
        submitButton.addEventListener("click", ()=>{
            showScore();
            // submitButton.style.display = "none";
        })
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    // else{
    //     submitButton.addEventListener("click", ()=>{
    //         startQuiz();  // only this line is real code
    //     })
    // }
})



startQuiz();












































// document.addEventListener('DOMContentLoaded', () => { 
//     const optionCards = document.querySelectorAll('.option-card'); 
//     const nextBtn = document.querySelector('.next-btn'); 
 
//     optionCards.forEach(card => { 
//         card.addEventListener('click', () => { 
//             // Remove 'selected' class from all option cards 
//             optionCards.forEach(c => c.classList.remove('selected')); 
//             // Add 'selected' class to the clicked card 
//             card.classList.add('selected'); 
//         }); 
//     }); 
 
//     // You can add more logic here for quiz progression, 
//     // e.g., handling the next button click to move to the next 
// question. 
//     nextBtn.addEventListener('click', () => { 
//         const selectedOption = 
// document.querySelector('.option-card.selected'); 
//         if (selectedOption) { 
//             alert(`You selected: ${selectedOption.dataset.value}. 
// Moving to the next question.`); 
//             // Implement logic to load the next question here. 
//         } else { 
//             alert('Please select an option before proceeding.'); 
//         } 
//     }); 
 
//     // Example of a 'Submit Quiz' button handler. 
//     const submitBtn = document.querySelector('.submit-btn'); 
//     submitBtn.addEventListener('click', () => { 
//         // Implement logic to handle quiz submission. 
//         alert('Quiz submitted!'); 
//     }); 
// }); 