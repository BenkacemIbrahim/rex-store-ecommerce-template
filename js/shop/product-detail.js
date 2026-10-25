// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
        });
        // Recommendations Slider
        const recommendationsSlider = document.getElementById('recommendations-slider');
        const prevRecommendations = document.getElementById('prev-recommendations');
        const nextRecommendations = document.getElementById('next-recommendations');

        const scrollStep = 300;

        nextRecommendations.addEventListener('click', () => {
            recommendationsSlider.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });

        prevRecommendations.addEventListener('click', () => {
            recommendationsSlider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });

        // Back to Top Button
        const backToTopButton = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
                backToTopButton.classList.remove('opacity-100', 'visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Product Accordion
        const accordionHeaders = document.querySelectorAll('.accordion-header');

        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const arrow = header.querySelector('svg');

                // Toggle content visibility
                content.classList.toggle('hidden');

                // Toggle arrow rotation
                if (content.classList.contains('hidden')) {
                    arrow.classList.remove('rotate-180');
                } else {
                    arrow.classList.add('rotate-180');
                }
            });
        });

        // Newsletter form toggle functionality
        document.addEventListener('DOMContentLoaded', function () {
            // Email toggle functionality
            const emailCheckbox = document.getElementById('email-option');
            const emailInputContainer = document.getElementById('email-input-container');

            if (emailCheckbox && emailInputContainer) {
                // Initial state check
                emailInputContainer.style.display = emailCheckbox.checked ? 'block' : 'none';

                // Add event listener
                emailCheckbox.addEventListener('change', function () {
                    emailInputContainer.style.display = this.checked ? 'block' : 'none';
                });
            }

            // SMS toggle functionality
            const smsCheckbox = document.getElementById('sms-option');
            const phoneInputContainer = document.getElementById('phone-input-container');

            if (smsCheckbox && phoneInputContainer) {
                // Initial state check
                phoneInputContainer.style.display = smsCheckbox.checked ? 'block' : 'none';

                // Add event listener
                smsCheckbox.addEventListener('change', function () {
                    phoneInputContainer.style.display = this.checked ? 'block' : 'none';
                });
            }

            // Form submission handling (prevent default for demo)
            const form = document.querySelector('form');
            if (form) {
                form.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // Validate that at least one option is selected
                    if (!emailCheckbox.checked && !smsCheckbox.checked) {
                        alert('Please select at least one contact method (Email or SMS)');
                        return;
                    }

                    // Validate email if that option is checked
                    if (emailCheckbox.checked) {
                        const emailInput = document.getElementById('email-input');
                        if (!emailInput.value.trim()) {
                            alert('Please enter your email address');
                            emailInput.focus();
                            return;
                        }
                    }

                    // Validate phone if SMS option is checked
                    if (smsCheckbox.checked) {
                        const phoneInput = document.getElementById('phone-input');
                        if (!phoneInput.value.trim()) {
                            alert('Please enter your phone number');
                            phoneInput.focus();
                            return;
                        }
                    }

                    alert('Thank you for subscribing to REX STORE');
                });
            }
        });

        // Color swatch selection
        const colorButtons = document.querySelectorAll('[role="radio"]');
        colorButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Find all buttons in the same radiogroup
                const radiogroup = button.closest('[role="radiogroup"]');
                const buttons = radiogroup.querySelectorAll('[role="radio"]');

                // Reset all buttons
                buttons.forEach(btn => {
                    btn.setAttribute('aria-checked', 'false');
                    btn.classList.remove('ring-1');
                });

                // Set the clicked button as checked
                button.setAttribute('aria-checked', 'true');
                button.classList.add('ring-1');
            });
        });

        // Add to Bag functionality
        const addToBagButton = document.getElementById('add-to-bag');
        addToBagButton.addEventListener('click', () => {
            const sizeSelector = document.getElementById('size-selector');
            if (sizeSelector.value === '') {
                alert('Please select a size');
                return;
            }
            alert('Item added to bag');
        });

        // Add to Wishlist functionality
        const addToWishlistButton = document.getElementById('add-to-wishlist');
        addToWishlistButton.addEventListener('click', () => {
            alert('Item added to wishlist');
        });
