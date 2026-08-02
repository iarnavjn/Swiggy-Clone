// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get input fields
    const deliveryInput = document.querySelector('input[placeholder="Enter delivery location"]');
    const searchInput = document.querySelector('input[placeholder="search for resturant item or more"]');

    // Listen for Enter key on delivery location
    deliveryInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            alert('Delivery location entered: ' + deliveryInput.value);
        }
    });

    // Listen for Enter key on search input
    searchInput.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            alert('Searching for: ' + searchInput.value);
        }
    });

});
