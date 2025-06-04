// // main.js

// document.addEventListener('DOMContentLoaded', () => {
//     // Initialize presentation elements
//     const slides = document.querySelectorAll('.slide');
//     let currentSlide = 0;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.display = (i === index) ? 'block' : 'none';
//         });
//     }

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slifdes.length;
//         showSlide(currentSlide);
//     }

//     function prevSlide() {
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//         showSlide(currentSlide);
//     }

//     // Event listeners for navigation buttons
//     document.getElementById('nextBtn').addEventListener('click', nextSlide);
//     document.getElementById('prevBtn').addEventListener('click', prevSlide);

//     // Show the first slide
//     showSlide(currentSlide);
// });

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const progress = document.querySelector('.progress');
    let currentSlide = 0;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.display = 'none';
        });
        
        // Show current slide
        slides[index].classList.add('active');
        slides[index].style.display = 'block';
        
        // Update progress bar
        const progressWidth = ((index + 1) / slides.length) * 100;
        progress.style.width = `${progressWidth}%`;
        
        // Update button states
        document.getElementById('prevBtn').disabled = index === 0;
        document.getElementById('nextBtn').disabled = index === slides.length - 1;
    }

    function nextSlide() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    // Event listeners
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    
    // Initialize first slide
    showSlide(0);
});