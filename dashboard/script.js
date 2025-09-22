document.addEventListener('DOMContentLoaded', function() { 
    const faqQuestions = document.querySelectorAll('.faq-question'); 
 
    faqQuestions.forEach(question => { 
        question.addEventListener('click', () => { 
            const answer = question.nextElementSibling; 
            const icon = question.querySelector('i'); 
 
            // Toggle the 'active' class on the question button 
            question.classList.toggle('active'); 
 
            // Toggle the answer's visibility by changing max-height 
            if (answer.style.maxHeight) { 
                answer.style.maxHeight = null; 
            } else { 
                answer.style.maxHeight = answer.scrollHeight + 'px'; 
            } 
 
            // Toggle the icon's rotation 
            if (question.classList.contains('active')) { 
                icon.style.transform = 'rotate(180deg)'; 
            } else { 
                icon.style.transform = 'rotate(0deg)'; 
            } 
        }); 
    }); 
}); 
