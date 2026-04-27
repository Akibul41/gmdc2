
// JavaScript to load header, navbar and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        });


        fetch('link.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('link').innerHTML = data;
        });




        fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});
    





const slides = document.querySelectorAll('.slide img'); 
const description = document.getElementById('description');
const descriptions = [
  'Main Building',
  'Hostel',
  'Administrative Building'
];
let currentIndex = 0;

function slideshow() {
  slides.forEach((slide) => slide.classList.remove('active')); // Remove active class from all slides
  slides[currentIndex].classList.add('active'); // Add active class to current slide
  description.textContent = descriptions[currentIndex]; // Update description
  currentIndex = (currentIndex + 1) % slides.length; // Loop through slides
}

// Show the first image immediately
slideshow();

// Run the slideshow every 3 seconds
setInterval(slideshow, 3000);




        function showSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.add('open'); // Add the class to show the sidebar
        }

        function hideSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('open'); // Remove the class to hide the sidebar
        }

