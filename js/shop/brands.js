// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
        });

        // Alphabet Navigation
        const alphabetLinks = document.querySelectorAll('.alphabet-link');

        alphabetLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                // Remove active class from all links
                alphabetLinks.forEach(l => l.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');
            });
        });

        // Load More Button - Modified to show all brands A-Z without page reload
        const loadMoreButton = document.getElementById('load-more');
        const hiddenSections = document.getElementById('hidden-sections');

        loadMoreButton.addEventListener('click', () => {
            // Show the hidden sections
            hiddenSections.classList.remove('hidden');

            // Hide the load more button
            loadMoreButton.style.display = 'none';

            // Initialize AOS for newly visible elements
            AOS.refresh();
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

        // Fixed Alphabet Navigation on Scroll
        const alphabetNav = document.getElementById('alphabet-nav');
        const body = document.body;

        // Get initial positions
        let alphabetNavHeight = alphabetNav.offsetHeight;
        let alphabetNavTop = alphabetNav.offsetTop;

        // Function to handle scroll events
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // If we've scrolled past the alphabet navigation
            if (scrollTop > alphabetNavTop) {
                // Add fixed class to alphabet navigation
                if (!alphabetNav.classList.contains('fixed-nav')) {
                    alphabetNav.classList.add('fixed-nav');
                    body.style.paddingTop = `${alphabetNavHeight}px`;
                }
            } else {
                // Remove fixed class from alphabet navigation
                alphabetNav.classList.remove('fixed-nav');
                body.style.paddingTop = '0';
            }
        }

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Recalculate positions on window resize
        window.addEventListener('resize', function () {
            alphabetNavHeight = alphabetNav.offsetHeight;
            alphabetNavTop = alphabetNav.offsetTop;

            // Update body padding if alphabet navigation is fixed
            if (alphabetNav.classList.contains('fixed-nav')) {
                body.style.paddingTop = `${alphabetNavHeight}px`;
            }
        });

        // Brand Search Functionality
        const brandSearch = document.getElementById('brand-search');

        brandSearch.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                // Here you would implement the search logic
                console.log(`Searching for: ${brandSearch.value}`);

                // For demo purposes, scroll to the first matching section
                const searchTerm = brandSearch.value.trim().toUpperCase();
                if (searchTerm.length === 1 && searchTerm.match(/[A-Z]/)) {
                    const targetSection = document.getElementById(searchTerm);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });

                        // Update active alphabet link
                        alphabetLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${searchTerm}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                }
            }
        });
