// Function to toggle the visibility of the mission info
function toggleInfo(element) {
    const info = element.nextElementSibling;  // Get the next sibling which is the .mission-info div
    console.log("Clicked:", element);
    console.log("Targeted Info:", info);

    const allInfos = document.querySelectorAll('.mission-info');
    // Close any currently open info boxes
    allInfos.forEach(function(item) {
        if (item !== info) {
            item.classList.remove('open');
        }
    });

    // Toggle the current mission info
    info.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded', function() {
    window.toggleInfo = function(element) {
        const info = element.nextElementSibling;  // Get the next sibling which is the .mission-info div
        console.log("Clicked:", element);
        console.log("Targeted Info:", info);

        const allInfos = document.querySelectorAll('.mission-info');
        // Close any currently open info boxes
        allInfos.forEach(function(item) {
            if (item !== info) {
                item.classList.remove('open');
            }
        });

        // Toggle the current mission info
        info.classList.toggle('open');
    };
});