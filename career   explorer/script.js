document.addEventListener('DOMContentLoaded', function() { 
    // Handle filter buttons active state 
    const filterButtons = document.querySelectorAll('.filter-buttons .filter-btn'); 
    filterButtons.forEach(button => { 
        button.addEventListener('click', function() { 
            filterButtons.forEach(btn => 
btn.classList.remove('active')); 
            this.classList.add('active'); 
            // In a real application, you would trigger filtering of colleges here 
            console.log('Filter by:', this.textContent); 
        }); 
    }); 
 
    // Handle pagination active state (and disabled arrows) 
    const pageNumbers = document.querySelectorAll('.pagination .page-number'); 
    const pageArrows = document.querySelectorAll('.pagination .page-arrow'); 
 
    pageNumbers.forEach(numberBtn => { 
        numberBtn.addEventListener('click', function() { 
            pageNumbers.forEach(btn => 
btn.classList.remove('active')); 
            this.classList.add('active'); 
            // In a real application, you would load colleges for this page number 
            console.log('Go to page:', this.textContent); 
            updatePaginationArrows(); 
        }); 
    }); 
 
    function updatePaginationArrows() { 
        const activePage = document.querySelector('.pagination .page-number.active'); 
        const activePageNum = parseInt(activePage.textContent); 
        const firstPage = parseInt(pageNumbers[0].textContent); 
        const lastPage = parseInt(pageNumbers[pageNumbers.length - 
1].textContent); // simplified for this static example 
 
        // Disable left arrow if on first page 
        if (activePageNum === firstPage) { 
            pageArrows[0].setAttribute('disabled', 'true'); 
        } else { 
            pageArrows[0].removeAttribute('disabled'); 
        } 
 
        // Disable right arrow if on last page (simplified) 
        if (activePageNum === lastPage) { // This needs more robust logic for actual 'last page' 
            pageArrows[1].setAttribute('disabled', 'true'); 
        } else { 
            pageArrows[1].removeAttribute('disabled'); 
        } 
    } 
 
    // Initialize arrow state on load 
    updatePaginationArrows(); 
 
    pageArrows.forEach(arrow => { 
        arrow.addEventListener('click', function() { 
            if (this.hasAttribute('disabled')) return; 
 
            let activePage = document.querySelector('.pagination .page-number.active'); 
            let newActivePage = null; 
 
            if (this.classList.contains('fa-chevron-left')) { // Left 
arrow 
                newActivePage = activePage.previousElementSibling; 
                while (newActivePage && 
!newActivePage.classList.contains('page-number')) { 
                    newActivePage = 
newActivePage.previousElementSibling; 
                } 
            } else { // Right arrow 
                newActivePage = activePage.nextElementSibling; 
                while (newActivePage && 
!newActivePage.classList.contains('page-number')) { 
                    newActivePage = newActivePage.nextElementSibling; 
                } 
            } 
 
            if (newActivePage) { 
                activePage.classList.remove('active'); 
                newActivePage.classList.add('active'); 
                console.log('Go to page:', newActivePage.textContent); 
                updatePaginationArrows(); 
            } 
        }); 
    }); 
 
    // Optional: Add basic hover/click effect for action icons 
(hearts, share) 
    document.querySelectorAll('.action-icons i, .card-actions i').forEach(icon => { 
        icon.addEventListener('click', function() { 
            // Add a temporary visual feedback, e.g., toggle a class 
            this.classList.toggle('clicked'); 
            setTimeout(() => this.classList.remove('clicked'), 500); 
// Remove after 0.5s 
            // In a real app, you'd send an AJAX request to save/share 
            console.log('Action clicked:', this.classList); 
        }); 
    }); 
}); 