document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            let valid = true;

            // Clear previous error messages
            document.getElementById('name-error').textContent = '';
            document.getElementById('email-error').textContent = '';
            document.getElementById('message-error').textContent = '';

            // Validate name
            if (name.trim() === '') {
                document.getElementById('name-error').textContent = 'Please enter your name.';
                document.getElementById('name-error').style.display = 'block';
                valid = false;
            }

            // Validate email
            if (email.trim() === '') {
                document.getElementById('email-error').textContent = 'Please enter your email.';
                document.getElementById('email-error').style.display = 'block';
                valid = false;
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address.';
                document.getElementById('email-error').style.display = 'block';
                valid = false;
            }

            // Validate message
            if (message.trim() === '') {
                document.getElementById('message-error').textContent = 'Please enter your message.';
                document.getElementById('message-error').style.display = 'block';
                valid = false;
            }

            // Prevent form submission if validation fails
            if (!valid) {
                event.preventDefault();
            }
        });
    }

    // Image modal functionality
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const images = document.querySelectorAll('.preview');
    const closeBtn = document.querySelector('.close');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    let currentImageIndex;

    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            currentImageIndex = index;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        modalImg.src = images[currentImageIndex].src;
    });

    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        modalImg.src = images[currentImageIndex].src;
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
