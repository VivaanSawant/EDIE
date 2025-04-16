document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Initialize first tab as active
    if (tabButtons.length > 0) {
        tabButtons[0].click();
    }
    
    // Update slider value display
    const sliders = document.querySelectorAll('.urgency-slider');
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
        });
    });
    
    // Form submission
    const requestForm = document.querySelector('.request-form');
    if (requestForm) {
        requestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your maintenance request has been submitted!');
        });
    }
});