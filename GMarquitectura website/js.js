d
ocument.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Get all anchor tags within the list
    var anchors = document.querySelectorAll('.bullet-points ul li a');

    // Loop through each anchor tag
    anchors.forEach(function(anchor) {
        // Check if the anchor's href matches the current page URL
        if (anchor.href === currentPageUrl) {
            // Add the "active" class to the anchor
            anchor.classList.add('active');
        }
    });
});