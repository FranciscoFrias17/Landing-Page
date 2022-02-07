/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const section = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

let activeView = function (elem) {
    let sectionViewport = elem.getBoundingClientRect();
        if (sectionViewport.top>= 0 && sectionViewport.left>=0 && sectionViewport.right
        <=(window.innerWidth || document.documentElement.clientWidth) && sectionViewport.bottom
        <=(window.innerHeight || document.documentElement.clientHeight) === true) {
            return true; 
        } else {
            return false;
        }
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function NavBar() {
    for (let i = 0; i < section.length; i++) {
        const li = document.createElement('li');
        const anchor = document.createElement('a')
        const sectionName = section[i].getAttribute('data-nav');
        const sectionLink = section[i].getAttribute('id', 'section1');
        anchor.setAttribute('href',`#${sectionLink}`);
        anchor.setAttribute('id', 'navSection'+i);
        anchor.innerText = sectionName;
        li.appendChild(anchor);
            document.getElementById('navbar__list').appendChild(li);
        }
    };

NavBar()

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function() {
    section.forEach(element => {
        if (activeView(element)) {
            element.classList.add('your-active-class');
        } else {
            element.classList.remove('your-active-class');
        }
    }) 
})

// Scroll to anchor ID using scrollTO event

navSection0.addEventListener('click', function() {
    event.preventDefault()
    section1.scrollIntoView({behavior: 'smooth'});
});


navSection1.addEventListener('click', function() {
    event.preventDefault()
    section2.scrollIntoView({behavior: 'smooth'});
});


navSection2.addEventListener('click', function() {
    event.preventDefault()
    section3.scrollIntoView({behavior: 'smooth'});
});

navSection3.addEventListener('click', function() {
    event.preventDefault()
    section4.scrollIntoView({behavior: 'smooth'});
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active