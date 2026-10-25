// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
        });

        // FAQ Accordion Functionality
        document.addEventListener('DOMContentLoaded', function () {
            const faqQuestions = document.querySelectorAll('.faq-question');

            faqQuestions.forEach(question => {
                question.addEventListener('click', function () {
                    // Toggle active class on the question
                    this.classList.toggle('active');

                    // Get the answer element
                    const answer = this.nextElementSibling;

                    // Toggle the answer visibility
                    if (answer.style.maxHeight) {
                        answer.style.maxHeight = null;
                    } else {
                        answer.style.maxHeight = answer.scrollHeight + "px";
                    }

                    // Rotate the icon
                    const icon = this.querySelector('.faq-icon');
                    icon.classList.toggle('rotate-180');
                });
            });

            // Category Filtering
            const categoryButtons = document.querySelectorAll('.category-button');
            const faqCategories = document.querySelectorAll('.faq-category');
            const faqItems = document.querySelectorAll('.faq-item');

            categoryButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // Remove active class from all buttons
                    categoryButtons.forEach(btn => btn.classList.remove('active'));

                    // Add active class to clicked button
                    this.classList.add('active');

                    const category = this.getAttribute('data-category');

                    if (category === 'all') {
                        // Show all categories
                        faqCategories.forEach(cat => cat.style.display = 'block');
                        faqItems.forEach(item => item.style.display = 'block');
                    } else {
                        // Hide all categories first
                        faqCategories.forEach(cat => {
                            if (cat.getAttribute('data-category') === category) {
                                cat.style.display = 'block';
                            } else {
                                cat.style.display = 'none';
                            }
                        });
                    }

                    // Close all open accordions
                    faqQuestions.forEach(q => {
                        q.classList.remove('active');
                        const ans = q.nextElementSibling;
                        ans.style.maxHeight = null;
                        const icon = q.querySelector('.faq-icon');
                        icon.classList.remove('rotate-180');
                    });
                });
            });

            // FAQ Search Functionality
            const searchInput = document.getElementById('faq-search');

            searchInput.addEventListener('keyup', function () {
                const searchTerm = this.value.toLowerCase();

                if (searchTerm.length > 2) {
                    // Show all categories for searching
                    faqCategories.forEach(cat => cat.style.display = 'block');

                    // Filter FAQ items
                    faqItems.forEach(item => {
                        const question = item.querySelector('.faq-question span').textContent.toLowerCase();
                        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();

                        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                            item.style.display = 'block';

                            // Highlight the search term in the question
                            const questionText = item.querySelector('.faq-question span');
                            const originalText = questionText.textContent;

                            // Only apply highlighting if not already highlighted
                            if (!questionText.innerHTML.includes('<mark>')) {
                                const regex = new RegExp(`(${searchTerm})`, 'gi');
                                questionText.innerHTML = originalText.replace(regex, '<mark>$1</mark>');
                            }
                        } else {
                            item.style.display = 'none';
                        }
                    });

                    // Set "All Questions" category as active
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    document.querySelector('[data-category="all"]').classList.add('active');
                } else if (searchTerm.length === 0) {
                    // Reset to default state
                    faqItems.forEach(item => {
                        item.style.display = 'block';

                        // Remove highlighting
                        const questionText = item.querySelector('.faq-question span');
                        questionText.innerHTML = questionText.textContent;
                    });
                }
            });

            // Newsletter form toggle functionality
            const emailCheckbox = document.getElementById('email-option');
            const emailInputContainer = document.getElementById('email-input-container');
            const smsCheckbox = document.getElementById('sms-option');
            const phoneInputContainer = document.getElementById('phone-input-container');

            if (emailCheckbox && emailInputContainer) {
                // Initial state check
                emailInputContainer.style.display = emailCheckbox.checked ? 'block' : 'none';

                // Add event listener
                emailCheckbox.addEventListener('change', function () {
                    emailInputContainer.style.display = this.checked ? 'block' : 'none';
                });
            }

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
