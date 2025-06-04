document.addEventListener('DOMContentLoaded', function() {
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Update the element with the current year
    document.getElementById('currentYear').textContent = currentYear;
});