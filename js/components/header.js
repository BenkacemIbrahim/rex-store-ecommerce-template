// Helper functions to disable/enable scrolling
        function disableBodyScroll() {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = getScrollbarWidth() + 'px';
            document.getElementById('main-header').style.paddingRight = getScrollbarWidth() + 'px';
        }

        function enableBodyScroll() {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
            document.getElementById('main-header').style.paddingRight = '';
        }

        // Calculate scrollbar width to prevent layout shift when scrollbar disappears
        function getScrollbarWidth() {
            // Create a temporary div to measure scrollbar width
            const outer = document.createElement('div');
            outer.style.visibility = 'hidden';
            outer.style.overflow = 'scroll';
            document.body.appendChild(outer);

            const inner = document.createElement('div');
            outer.appendChild(inner);

            const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

            // Clean up
            outer.parentNode.removeChild(outer);

            return scrollbarWidth;
        }

        // Initialize AOS
        document.addEventListener('DOMContentLoaded', function () {
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    once: true,
                    offset: 100,
                    duration: 1000,
                    delay: 100
                });
            }

            // Tablet Category Selector with Dropdown - NEW
            const tabletCategorySelector = document.getElementById('tablet-men-selector');
            const tabletCategoryDropdown = document.getElementById('tablet-category-dropdown');

            if (tabletCategorySelector && tabletCategoryDropdown) {
                tabletCategorySelector.addEventListener('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();

                    // Toggle the dropdown visibility
                    if (tabletCategoryDropdown.classList.contains('active')) {
                        tabletCategoryDropdown.classList.remove('active');
                        tabletCategorySelector.classList.remove('active');
                    } else {
                        tabletCategoryDropdown.classList.add('active');
                        tabletCategorySelector.classList.add('active');
                    }
                });

                // Close dropdown when clicking outside
                document.addEventListener('click', function (e) {
                    if (!tabletCategorySelector.contains(e.target) && !tabletCategoryDropdown.contains(e.target)) {
                        tabletCategoryDropdown.classList.remove('active');
                        tabletCategorySelector.classList.remove('active');
                    }
                });

                // Handle clicks on dropdown items
                const dropdownLinks = tabletCategoryDropdown.querySelectorAll('a');
                dropdownLinks.forEach(link => {
                    link.addEventListener('click', function (e) {
                        // Here you can add navigation logic if needed
                        tabletCategoryDropdown.classList.remove('active');
                        tabletCategorySelector.classList.remove('active');
                    });
                });
            }

            // Rest of the JavaScript remains unchanged
        });

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mainHeader = document.getElementById('main-header');
        const body = document.body;
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        mobileMenuButton.addEventListener('click', () => {
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('active');
            mobileMenuOverlay.classList.toggle('active');
            body.classList.toggle('menu-open');
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');

            // Close any open submenus
            document.querySelectorAll('.mobile-submenu.active').forEach(submenu => {
                submenu.classList.remove('active');
            });
        });

        mobileMenuOverlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');

            // Close any open submenus
            document.querySelectorAll('.mobile-submenu.active').forEach(submenu => {
                submenu.classList.remove('active');
            });
        });

        // Mobile Menu Tabs
        const menuTabs = document.querySelectorAll('.mobile-menu-tab');
        const tabContents = document.querySelectorAll('.tab-content');

        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                menuTabs.forEach(t => t.classList.remove('active'));

                // Add active class to clicked tab
                tab.classList.add('active');

                // Hide all tab contents
                tabContents.forEach(content => content.classList.add('hidden'));

                // Show the corresponding tab content
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(`${tabId}-content`).classList.remove('hidden');
            });
        });

        // Mobile Submenu Functionality
        const submenuTriggers = document.querySelectorAll('.mobile-submenu-trigger');
        const submenuBackButtons = document.querySelectorAll('.mobile-submenu-back');

        submenuTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const submenuId = trigger.getAttribute('data-submenu');
                const submenu = document.getElementById(`${submenuId}-submenu`);

                if (submenu) {
                    submenu.classList.add('active');
                }
            });
        });

        submenuBackButtons.forEach(button => {
            button.addEventListener('click', () => {
                const submenu = button.closest('.mobile-submenu');
                submenu.classList.remove('active');
            });
        });

        // Mobile Sign In and Register Buttons
        const mobileSignInButton = document.getElementById('mobile-signin-button');
        const mobileRegisterButton = document.getElementById('mobile-register-button');
        const mobileSignInButtonKids = document.getElementById('mobile-signin-button-kids');
        const mobileRegisterButtonKids = document.getElementById('mobile-register-button-kids');
        const authModal = document.getElementById('auth-modal');
        const signinTab = document.getElementById('signin-tab');
        const signupTab = document.getElementById('signup-tab');

        if (mobileSignInButton) {
            mobileSignInButton.addEventListener('click', () => {
                // Close mobile menu
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');

                // Open auth modal with sign in tab active
                authModal.classList.remove('hidden');
                signinTab.click();
            });
        }

        if (mobileRegisterButton) {
            mobileRegisterButton.addEventListener('click', () => {
                // Close mobile menu
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');

                // Open auth modal with register tab active
                authModal.classList.remove('hidden');
                signupTab.click();
            });
        }

        // Add event listeners for Kidswear sign in and register buttons
        if (mobileSignInButtonKids) {
            mobileSignInButtonKids.addEventListener('click', () => {
                // Close mobile menu
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');

                // Open auth modal with sign in tab active
                authModal.classList.remove('hidden');
                signinTab.click();
            });
        }

        if (mobileRegisterButtonKids) {
            mobileRegisterButtonKids.addEventListener('click', () => {
                // Close mobile menu
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');

                // Open auth modal with register tab active
                authModal.classList.remove('hidden');
                signupTab.click();
            });
        }

        // Search Overlay
        const searchToggle = document.getElementById('search-toggle');
        const searchOverlay = document.getElementById('search-overlay');
        const closeSearch = document.getElementById('close-search');
        const searchInput = document.getElementById('search-input');

        // Function to open search overlay
        const openSearchOverlay = () => {
            searchOverlay.classList.remove('hidden');
            searchOverlay.setAttribute('aria-hidden', 'false');
            disableBodyScroll();
            setTimeout(() => {
                searchInput.focus();
            }, 100);
        };

        // Mobile search toggle
        if (searchToggle) {
            searchToggle.addEventListener('click', openSearchOverlay);
        }

        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.add('hidden');
            searchOverlay.setAttribute('aria-hidden', 'true');
            enableBodyScroll();
        });

        // Close search when clicking outside
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.add('hidden');
                searchOverlay.setAttribute('aria-hidden', 'true');
                enableBodyScroll();
            }
        });

        // Auth Modal
        const accountToggle = document.getElementById('account-toggle');
        const closeAuth = document.getElementById('close-auth');
        const signinForm = document.getElementById('signin-form');
        const signupForm = document.getElementById('signup-form');

        // Open auth modal when clicking account icon
        if (accountToggle) {
            accountToggle.addEventListener('click', () => {
                authModal.classList.remove('hidden');
                authModal.setAttribute('aria-hidden', 'false');
                disableBodyScroll();
            });
        }

        // Close auth modal
        closeAuth.addEventListener('click', () => {
            authModal.classList.add('hidden');
            authModal.setAttribute('aria-hidden', 'true');
            enableBodyScroll();
        });

        // Close auth modal when clicking outside
        authModal.addEventListener('click', (e) => {
            if (e.target === authModal) {
                authModal.classList.add('hidden');
                authModal.setAttribute('aria-hidden', 'true');
                enableBodyScroll();
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
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                const expanded = languageToggle.getAttribute('aria-expanded') === 'true';
                languageToggle.setAttribute('aria-expanded', !expanded);
                languageDropdown.classList.toggle('hidden');
            });
        }

        // Close language dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (languageToggle && languageDropdown && !languageToggle.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.add('hidden');
                languageToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Language selection functionality
        function changeLanguage(lang, flagUrl, name) {
            // Update the language code display
            if (languageCode) {
                languageCode.textContent = lang.toUpperCase();
            }

            // Update the language name
            if (languageName) {
                languageName.textContent = name;
            }

            // Update the flag icon if it exists
            const flagIcon = document.querySelector('#language-toggle .flag-icon');
            if (flagIcon) {
                flagIcon.src = flagUrl;
                flagIcon.alt = name;
            }

            // Close the dropdown
            if (languageDropdown) {
                languageDropdown.classList.add('hidden');
            }
            if (languageToggle) {
                languageToggle.setAttribute('aria-expanded', 'false');
            }

            // Update mobile menu language display
            const mobileLangDisplay = document.querySelector('.mobile-submenu-trigger[data-submenu="language"] span');
            if (mobileLangDisplay) {
                mobileLangDisplay.textContent = name;
            }

            const mobileLangFlag = document.querySelector('.mobile-submenu-trigger[data-submenu="language"] .flag-icon');
            if (mobileLangFlag) {
                mobileLangFlag.src = flagUrl;
                mobileLangFlag.alt = name;
            }

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

            // Close mobile submenu if open
            const languageSubmenu = document.getElementById('language-submenu');
            if (languageSubmenu && languageSubmenu.classList.contains('active')) {
                languageSubmenu.classList.remove('active');
            }

            // Close mobile menu if open
            if (mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                body.classList.remove('menu-open');
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
            option.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = option.getAttribute('data-lang');
                const flagUrl = option.getAttribute('data-flag');
                const name = option.querySelector('.language-name').textContent;
                changeLanguage(lang, flagUrl, name);
            });
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

        // Fixed Header Functionality
        document.addEventListener('DOMContentLoaded', function () {
            const header = document.querySelector('header');
            const announcementBar = document.querySelector('.announcement-bar');
            const body = document.body;

            let lastScrollTop = 0;
            let headerHeight = header.offsetHeight;
            let announcementHeight = announcementBar ? announcementBar.offsetHeight : 0;

            // Function to handle scroll events
            function handleScroll() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

                // If we've scrolled more than the announcement bar height
                if (announcementBar && scrollTop > announcementHeight) {
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
                    if (announcementBar) {
                        announcementBar.classList.remove('hidden');
                    }
                }

                lastScrollTop = scrollTop;
            }

            // Listen for scroll events
            window.addEventListener('scroll', handleScroll);

            // Recalculate heights on window resize
            window.addEventListener('resize', function () {
                headerHeight = header.offsetHeight;
                announcementHeight = announcementBar ? announcementBar.offsetHeight : 0;

                // Update body padding if header is fixed
                if (header.classList.contains('fixed')) {
                    body.style.paddingTop = `${headerHeight}px`;
                }
            });
        });

        // Announcement Bar Animation
        const announcementSlider = document.querySelector('.announcement-slider');

        if (announcementSlider) {
            // Set the animation
            announcementSlider.style.animation = 'slide 30s linear infinite';
        }

        // Forgot Password Modal Functionality
        document.addEventListener('DOMContentLoaded', function () {
            // Get DOM elements
            const forgotPasswordLink = document.querySelector('a[href="#"].text-sm.font-light.text-gray-600.hover\\:text-black');
            const forgotPasswordModal = document.getElementById('forgot-password-modal');
            const closeForgotPassword = document.getElementById('close-forgot-password');
            const backToSignin = document.getElementById('back-to-signin');
            const forgotPasswordForm = document.getElementById('forgot-password-form');

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
                    disableBodyScroll();

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
                    enableBodyScroll();
                });
            }

            // Close forgot password modal when clicking outside
            forgotPasswordModal.addEventListener('click', function (e) {
                if (e.target === forgotPasswordModal) {
                    forgotPasswordModal.classList.add('hidden');
                    forgotPasswordModal.setAttribute('aria-hidden', 'true');
                    enableBodyScroll();
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
                    disableBodyScroll();

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
                        enableBodyScroll();

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
