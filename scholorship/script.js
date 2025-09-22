document.addEventListener('DOMContentLoaded', function() { 
    const tabButtons = document.querySelectorAll('.tab-button'); 
    const tabPanes = document.querySelectorAll('.tab-pane'); 
     
    tabButtons.forEach(button => { 
        button.addEventListener('click', () => { 
            // Remove active class from all buttons and panes 
            tabButtons.forEach(btn => btn.classList.remove('active')); 
            tabPanes.forEach(pane => pane.classList.remove('active')); 
             
            // Add active class to the clicked button and corresponding pane 
            const targetTab = button.dataset.tab; 
            button.classList.add('active'); 
            
document.getElementById(targetTab).classList.add('active'); 
        }); 
    }); 
 
    // Optional: Add simple logic for calendar day click to highlight 
it 
    const dayCells = document.querySelectorAll('.day-cell'); 
    dayCells.forEach(cell => { 
        cell.addEventListener('click', () => { 
            if (cell.classList.contains('inactive')) return; 
             
            dayCells.forEach(d => d.classList.remove('active')); 
            cell.classList.add('active'); 
             
            // You could dynamically update the calendar-details section here 
            // based on the clicked date 
            console.log('Selected date:', cell.textContent); 
        }); 
    }); 
});