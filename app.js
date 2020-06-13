// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class



// toggleBar icon button
const navToggle = document.querySelector('.nav-toggle')
// nav items
const links = document.querySelector('.links')


navToggle.addEventListener('click', function() {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // }

    links.classList.toggle('show-links')
})