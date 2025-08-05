document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            scrollToSection(targetId);
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Show success message
            showMessage('Message sent successfully! Thank you for reaching out.', 'success');
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Social media links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className.split(' ')[1];
            
            let url;
            switch(platform) {
                case 'fa-linkedin-in':
                    url = 'https://linkedin.com';
                    break;
                case 'fa-github':
                    url = 'https://github.com';
                    break;
                case 'fa-twitter':
                    url = 'https://twitter.com';
                    break;
                case 'fa-instagram':
                    url = 'https://instagram.com';
                    break;
                default:
                    url = '#';
            }
            
            window.open(url, '_blank');
        });
    });

    // Animation on scroll
    window.addEventListener('scroll', revealOnScroll);

    // Initialize elements with hidden state
    document.querySelectorAll('.education-item, .project-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Initial check in case elements are already visible
    revealOnScroll();
});

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 80,
            behavior: 'smooth'
        });
    }
}

function revealOnScroll() {
    const elements = document.querySelectorAll('.education-item, .project-card');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const revealPoint = windowHeight - 100;
        
        if (elementPosition < revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

function showMessage(message, type) {
    const messageBox = document.createElement('div');
    messageBox.className = `message-box ${type}`;
    messageBox.textContent = message;
    
    document.body.appendChild(messageBox);
    
    setTimeout(() => {
        messageBox.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        messageBox.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(messageBox);
        }, 300);
    }, 3000);
}
