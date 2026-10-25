// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
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
            const newsletterForm = document.querySelector('section.py-24 form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function (e) {
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

            // Contact form functionality
            const contactForm = document.querySelector('section.py-16.bg-gray-50 form');
            const inquiryType = document.getElementById('inquiry-type');
            const orderNumberField = document.getElementById('order-number-field');

            if (contactForm && inquiryType && orderNumberField) {
                // Show/hide order number field based on inquiry type
                inquiryType.addEventListener('change', function () {
                    if (this.value === 'order') {
                        orderNumberField.classList.remove('hidden');
                    } else {
                        orderNumberField.classList.add('hidden');
                    }
                });

                // Form submission handling
                contactForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // Basic form validation
                    const firstName = document.getElementById('first-name').value.trim();
                    const lastName = document.getElementById('last-name').value.trim();
                    const email = document.getElementById('email').value.trim();
                    const message = document.getElementById('message').value.trim();
                    const privacyConsent = document.getElementById('privacy-consent').checked;

                    if (!firstName || !lastName || !email || !message || !privacyConsent) {
                        alert('Please fill in all required fields');
                        return;
                    }

                    // Show success message
                    alert('Thank you for your message. We will get back to you shortly.');
                    contactForm.reset();
                });
            }
        });
