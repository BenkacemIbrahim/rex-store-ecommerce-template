// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
        });

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
        });

        // Search Overlay
        const searchToggle = document.getElementById('search-toggle');
        const searchOverlay = document.getElementById('search-overlay');
        const closeSearch = document.getElementById('close-search');
        const searchInput = document.getElementById('search-input');

        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.remove('hidden');
            searchOverlay.setAttribute('aria-hidden', 'false');
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        });

        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.add('hidden');
            searchOverlay.setAttribute('aria-hidden', 'true');
        });

        // Close search when clicking outside
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.add('hidden');
                searchOverlay.setAttribute('aria-hidden', 'true');
            }
        });
        // Auth Modal
        const accountToggle = document.getElementById('account-toggle');
        const authModal = document.getElementById('auth-modal');
        const closeAuth = document.getElementById('close-auth');
        const signinTab = document.getElementById('signin-tab');
        const signupTab = document.getElementById('signup-tab');
        const signinForm = document.getElementById('signin-form');
        const signupForm = document.getElementById('signup-form');

        // Open auth modal when clicking account icon
        accountToggle.addEventListener('click', () => {
            authModal.classList.remove('hidden');
            authModal.setAttribute('aria-hidden', 'false');
        });

        // Close auth modal
        closeAuth.addEventListener('click', () => {
            authModal.classList.add('hidden');
            authModal.setAttribute('aria-hidden', 'true');
        });

        // Close auth modal when clicking outside
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.add('hidden');
                authModal.setAttribute('aria-hidden', 'true');
            }
        });

        // Tab switching
        signinTab.addEventListener('click', () => {
            signinTab.classList.add('active');
            signupTab.classList.remove('active');
            signinForm.classList.remove('hidden');
            signupForm.classList.add('hidden');
            signupTab.classList.add('text-gray-400');
            signinTab.classList.remove('text-gray-400');
        });

        signupTab.addEventListener('click', () => {
            signupTab.classList.add('active');
            signinTab.classList.remove('active');
            signupForm.classList.remove('hidden');
            signinForm.classList.add('hidden');
            signinTab.classList.add('text-gray-400');
            signupTab.classList.remove('text-gray-400');
        });

        // Form submission (prevent default for demo)
        signinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sign in functionality would be implemented here.');
        });

        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Sign up functionality would be implemented here.');
        });

        // Language Selector
        const languageToggle = document.getElementById('language-toggle');
        const languageDropdown = document.getElementById('language-dropdown');
        const languageOptions = document.querySelectorAll('.language-option');
        const mobileLanguageOptions = document.querySelectorAll('.mobile-language-option');
        const languageCode = document.querySelector('.language-code');
        const languageName = document.querySelector('.language-name');

        // Language dropdown toggle
        languageToggle.addEventListener('click', () => {
            const expanded = languageToggle.getAttribute('aria-expanded') === 'true';
            languageToggle.setAttribute('aria-expanded', !expanded);
            languageDropdown.classList.toggle('hidden');
        });

        // Close language dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.add('hidden');
                languageToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Language selection functionality
        function changeLanguage(lang, flagUrl, name) {
            // Update the language code display
            languageCode.textContent = lang.toUpperCase();

            // Update the language name
            languageName.textContent = name;

            // Update the flag icon if it exists
            const flagIcon = document.querySelector('#language-toggle .flag-icon');
            if (flagIcon) {
                flagIcon.src = flagUrl;
                flagIcon.alt = name;
            }

            // Close the dropdown
            languageDropdown.classList.add('hidden');
            languageToggle.setAttribute('aria-expanded', 'false');

            // Here would typically implement the actual language change
            console.log(`Language changed to: ${lang}`);

            // You could store the language preference in localStorage
            localStorage.setItem('preferredLanguage', lang);

            // Optional: Set the document language attribute
            document.documentElement.lang = lang;

            // Optional: Set RTL for Arabic or other RTL languages
            if (lang === 'ar') {
                document.documentElement.dir = 'rtl';
            } else {
                document.documentElement.dir = 'ltr';
            }
        }

        // Add click event listeners to language options
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                const flagUrl = option.getAttribute('data-flag');
                const name = option.querySelector('.language-name').textContent;
                changeLanguage(lang, flagUrl, name);
            });
        });

        // Add click event listeners to mobile language options
        mobileLanguageOptions.forEach(option => {
            option.addEventListener('click', () => {
                const lang = option.getAttribute('data-lang');
                const flagUrl = option.getAttribute('data-flag');
                const name = option.querySelector('.language-name').textContent;
                changeLanguage(lang, flagUrl, name);
                // Close mobile menu after selection
                document.getElementById('mobile-menu').classList.add('hidden');
                document.getElementById('mobile-menu-button').setAttribute('aria-expanded', 'false');
            });
        });

        // New Arrivals Slider
        const slider = document.getElementById('new-arrivals-slider');
        const prevButton = document.getElementById('prev-arrivals');
        const nextButton = document.getElementById('next-arrivals');

        const scrollStep = 300;

        nextButton.addEventListener('click', () => {
            slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });

        prevButton.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
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

        // Announcement Bar Animation
        const announcementSlider = document.querySelector('.announcement-slider');

        if (announcementSlider) {
            // Set the animation
            announcementSlider.style.animation = 'slide 30s linear infinite';

            // Add the keyframes animation
            const style = document.createElement('style');
            style.textContent = `
                                                                @keyframes slide {
                                                                    0% { transform: translateX(0); }
                                                                    100% { transform: translateX(-50%); }
                                                                }
                                                            `;
            document.head.appendChild(style);
        }

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
        // Mega Dropdown Functionality
        document.addEventListener('DOMContentLoaded', function () {
            const dropdownTriggers = document.querySelectorAll('.has-dropdown');
            const megaDropdowns = document.querySelectorAll('.mega-dropdown');
            let activeDropdown = null;
            let isMouseOverDropdown = false;
            let isMouseOverTrigger = false;
            let closeTimeout = null;

            // Function to close all dropdowns
            function closeAllDropdowns() {
                dropdownTriggers.forEach(trigger => {
                    trigger.classList.remove('active');
                });

                megaDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });

                activeDropdown = null;
            }

            // Function to open a specific dropdown
            function openDropdown(dropdownId) {
                // Close any open dropdown first
                closeAllDropdowns();

                // Find the dropdown element
                const dropdown = document.getElementById(`${dropdownId}-dropdown`);
                if (!dropdown) return;

                // Find the trigger element
                const trigger = document.querySelector(`[data-dropdown="${dropdownId}"]`);
                if (!trigger) return;

                // Activate the dropdown and trigger
                dropdown.classList.add('active');
                trigger.classList.add('active');

                activeDropdown = dropdown;
            }

            // Add event listeners to dropdown triggers
            dropdownTriggers.forEach(trigger => {
                const dropdownId = trigger.getAttribute('data-dropdown');
                if (!dropdownId) return;

                // Mouse enter event
                trigger.addEventListener('mouseenter', function () {
                    isMouseOverTrigger = true;
                    clearTimeout(closeTimeout);
                    openDropdown(dropdownId);
                });

                // Mouse leave event
                trigger.addEventListener('mouseleave', function () {
                    isMouseOverTrigger = false;

                    closeTimeout = setTimeout(() => {
                        if (!isMouseOverDropdown) {
                            closeAllDropdowns();
                        }
                    }, 200);
                });

                // Click event (for touch devices)
                trigger.addEventListener('click', function (e) {
                    e.preventDefault();

                    const isActive = trigger.classList.contains('active');

                    if (isActive) {
                        closeAllDropdowns();
                    } else {
                        openDropdown(dropdownId);
                    }
                });
            });

            // Add event listeners to mega dropdowns
            megaDropdowns.forEach(dropdown => {
                // Mouse enter event
                dropdown.addEventListener('mouseenter', function () {
                    isMouseOverDropdown = true;
                    clearTimeout(closeTimeout);
                });

                // Mouse leave event
                dropdown.addEventListener('mouseleave', function () {
                    isMouseOverDropdown = false;

                    closeTimeout = setTimeout(() => {
                        if (!isMouseOverTrigger) {
                            closeAllDropdowns();
                        }
                    }, 200);
                });
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', function (e) {
                const isDropdownClick = e.target.closest('.mega-dropdown') || e.target.closest('.has-dropdown');

                if (!isDropdownClick) {
                    closeAllDropdowns();
                }
            });
        });
        // Add this JavaScript to your existing script at the bottom of your HTML file

        // Fixed Header Functionality
        document.addEventListener('DOMContentLoaded', function () {
            const header = document.querySelector('header');
            const announcementBar = document.querySelector('.bg-black.text-white.py-2'); // Your announcement bar
            const body = document.body;

            // Add a class to the announcement bar for easier targeting
            announcementBar.classList.add('announcement-bar');

            let lastScrollTop = 0;
            let headerHeight = header.offsetHeight;
            let announcementHeight = announcementBar.offsetHeight;

            // Function to handle scroll events
            function handleScroll() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // If we've scrolled more than the announcement bar height
                if (scrollTop > announcementHeight) {
                    // Add fixed class to header
                    if (!header.classList.contains('fixed')) {
                        header.classList.add('fixed');
                        body.classList.add('fixed-header');
                        body.style.paddingTop = `${headerHeight}px`;
                    }

                    // Hide announcement bar
                    announcementBar.classList.add('hidden');
                } else {
                    // Remove fixed class from header
                    header.classList.remove('fixed');
                    body.classList.remove('fixed-header');
                    body.style.paddingTop = '0';

                    // Show announcement bar
                    announcementBar.classList.remove('hidden');
                }

                lastScrollTop = scrollTop;
            }

            // Listen for scroll events
            window.addEventListener('scroll', handleScroll);

            // Recalculate heights on window resize
            window.addEventListener('resize', function () {
                headerHeight = header.offsetHeight;
                announcementHeight = announcementBar.offsetHeight;

                // Update body padding if header is fixed
                if (header.classList.contains('fixed')) {
                    body.style.paddingTop = `${headerHeight}px`;
                }
            });
        });
        // Forgot Password Modal Functionality
        document.addEventListener('DOMContentLoaded', function () {
            // Get DOM elements
            const forgotPasswordLink = document.querySelector('a[href="#"].text-sm.font-light.text-gray-600.hover\\:text-black');
            const forgotPasswordModal = document.getElementById('forgot-password-modal');
            const closeForgotPassword = document.getElementById('close-forgot-password');
            const backToSignin = document.getElementById('back-to-signin');
            const forgotPasswordForm = document.getElementById('forgot-password-form');
            const authModal = document.getElementById('auth-modal');

            // Open forgot password modal when clicking "Forgot your password?"
            if (forgotPasswordLink) {
                forgotPasswordLink.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Hide the auth modal
                    authModal.classList.add('hidden');
                    authModal.setAttribute('aria-hidden', 'true');

                    // Show the forgot password modal
                    forgotPasswordModal.classList.remove('hidden');
                    forgotPasswordModal.setAttribute('aria-hidden', 'false');

                    // Focus on the email input
                    setTimeout(() => {
                        document.getElementById('reset-email').focus();
                    }, 100);
                });
            }

            // Close forgot password modal
            if (closeForgotPassword) {
                closeForgotPassword.addEventListener('click', function () {
                    forgotPasswordModal.classList.add('hidden');
                    forgotPasswordModal.setAttribute('aria-hidden', 'true');
                });
            }

            // Close forgot password modal when clicking outside
            forgotPasswordModal.addEventListener('click', function (e) {
                if (e.target === forgotPasswordModal) {
                    forgotPasswordModal.classList.add('hidden');
                    forgotPasswordModal.setAttribute('aria-hidden', 'true');
                }
            });

            // Back to sign in
            if (backToSignin) {
                backToSignin.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Hide forgot password modal
                    forgotPasswordModal.classList.add('hidden');
                    forgotPasswordModal.setAttribute('aria-hidden', 'true');

                    // Show auth modal
                    authModal.classList.remove('hidden');
                    authModal.setAttribute('aria-hidden', 'false');

                    // Make sure the sign in tab is active
                    document.getElementById('signin-tab').click();
                });
            }

            // Handle form submission
            if (forgotPasswordForm) {
                forgotPasswordForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    const emailInput = document.getElementById('reset-email');
                    const email = emailInput.value.trim();

                    if (!email) {
                        alert('Please enter your email address');
                        emailInput.focus();
                        return;
                    }

                    // Hide the form
                    forgotPasswordForm.style.display = 'none';

                    // Create and show confirmation message
                    const confirmationMessage = document.createElement('div');
                    confirmationMessage.className = 'confirmation-message';
                    confirmationMessage.innerHTML = `
                <svg class="h-16 w-16 text-green-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-xl font-light mb-2">Check Your Email</h3>
                <p class="text-gray-600 font-light mb-6">We've sent a password reset link to:<br><strong>${email}</strong></p>
                <button id="close-confirmation" class="bg-black text-white px-8 py-3 text-sm font-light uppercase tracking-widest hover:bg-gray-900 transition-all duration-300">
                    Close
                </button>
            `;

                    // Add the confirmation message to the modal
                    forgotPasswordForm.parentNode.appendChild(confirmationMessage);

                    // Add the active class after a small delay for animation
                    setTimeout(() => {
                        confirmationMessage.classList.add('active');
                    }, 10);

                    // Add event listener to the close button
                    document.getElementById('close-confirmation').addEventListener('click', function () {
                        forgotPasswordModal.classList.add('hidden');
                        forgotPasswordModal.setAttribute('aria-hidden', 'true');

                        // Reset the form for future use
                        setTimeout(() => {
                            forgotPasswordForm.style.display = 'block';
                            confirmationMessage.remove();
                            forgotPasswordForm.reset();
                        }, 300);
                    });
                });
            }
        });
