//My Custom Javascript 

//Back To Top Button 


const backToTopButton = document.querySelector('#back-to-top-btn'); //Places button's id into a variable

window.addEventListener('scroll', scrollFunction); //Window Object Listens for scroll, then implements scroll function


//Shows how many pixels down the document the user is, then shows or hides the button
function scrollFunction() {
    if (window.pageYOffset > 400) { //if the user is more than 300px down the page,change the button from display:none to display:block

        if (!backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnExit');
            backToTopButton.classList.add('btnEntrance');
            backToTopButton.style.display = "block";
        }

    } else { //In all other cases, display:none 
        if (backToTopButton.classList.contains('btnEntrance')) {
            backToTopButton.classList.remove('btnEntrance');
            backToTopButton.classList.add('btnExit');

            setTimeout(function () {
                backToTopButton.style.display = "none";
            }, 250);


        }

    }
}

backToTopButton.addEventListener('click', backToTopFunction); //onClick implement the backToTopFunction

function backToTopFunction() {
    window.scrollTo(0, 0); //Scroll to top of page
}
