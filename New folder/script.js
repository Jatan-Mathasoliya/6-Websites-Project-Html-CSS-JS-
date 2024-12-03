// Selecting the dropdown trigger and the expanding dropdown element
const dropdownTrigger = document.querySelector('.dropdown-trigger');
const expandingDropdown = document.getElementById('expandingDropdown');

// Show dropdown on hover over "Products" link
dropdownTrigger.addEventListener('mouseenter', () => {
    expandingDropdown.classList.add('active');
});

// Keep dropdown visible when hovering over dropdown content
expandingDropdown.addEventListener('mouseenter', () => {
    expandingDropdown.classList.add('active');
});

// Hide dropdown when leaving both "Products" link and dropdown content
dropdownTrigger.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!expandingDropdown.matches(':hover')) {
            expandingDropdown.classList.remove('active');
        }
    }, 100);
});

expandingDropdown.addEventListener('mouseleave', () => {
    expandingDropdown.classList.remove('active');
});
