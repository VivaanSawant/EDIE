document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.results-tabs button');
    const tabContents = document.querySelectorAll('.results-section > div:not(.results-tabs):not(.results-count)');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active-tab'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabName = this.textContent.trim().toLowerCase().replace(' ', '-');
            document.querySelector(`.${tabName}-results`).classList.add('active-tab');
        });
    });
    
    // Set the first tab as active by default
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
    
    // Urgency button functionality
    const urgencyButtons = document.querySelectorAll('.urgency-buttons button');
    urgencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            urgencyButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = '';
            });
            
            this.classList.add('active');
            if (this.classList.contains('high')) {
                this.style.backgroundColor = '#ff9999';
            } else if (this.classList.contains('low')) {
                this.style.backgroundColor = '#99ff99';
            }
        });
    });
});