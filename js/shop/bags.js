// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
        });

        // Filter Toggle
        const filterToggle = document.getElementById('filter-toggle');
        const filterPanel = document.getElementById('filter-panel');

        filterToggle.addEventListener('click', () => {
            filterPanel.classList.toggle('hidden');
            sortPanel.classList.add('hidden'); // Close sort panel if open
        });

        // Sort Toggle
        const sortToggle = document.getElementById('sort-toggle');
        const sortPanel = document.getElementById('sort-panel');
        const sortOptions = document.querySelectorAll('.sort-option');

        sortToggle.addEventListener('click', () => {
            sortPanel.classList.toggle('hidden');
            filterPanel.classList.add('hidden'); // Close filter panel if open
        });

        // Sort Option Selection
        sortOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Remove active class from all options
                sortOptions.forEach(opt => opt.classList.remove('active'));

                // Add active class to clicked option
                option.classList.add('active');

                // Update sort toggle text
                const sortText = option.textContent;
                const sortSpan = sortToggle.querySelector('span');
                sortSpan.textContent = sortText;

                // Close sort panel
                sortPanel.classList.add('hidden');

                // Here you would implement the actual sorting logic
                console.log(`Sorting products by: ${option.getAttribute('data-sort')}`);
            });
        });

        // Clear Filters
        const clearFilters = document.getElementById('clear-filters');

        clearFilters.addEventListener('click', () => {
            // Reset all checkboxes to default state
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                if (checkbox.id.includes('all')) {
                    checkbox.checked = true;
                } else {
                    checkbox.checked = false;
                }
            });

            // Reset size buttons (remove any active state)
            document.querySelectorAll('.grid-cols-4 button').forEach(button => {
                button.classList.remove('border-black');
                button.classList.add('border-gray-200');
            });
        });

        // Apply Filters
        const applyFilters = document.getElementById('apply-filters');

        applyFilters.addEventListener('click', () => {
            // Here you would implement the actual filtering logic
            console.log('Applying filters...');

            // Close the filter panel
            filterPanel.classList.add('hidden');
        });

        // Size Button Selection
        const sizeButtons = document.querySelectorAll('.grid-cols-4 button');

        sizeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Toggle active state
                button.classList.toggle('border-black');
                button.classList.toggle('border-gray-200');
            });
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

        // Product Search
        const productSearch = document.getElementById('product-search');

        productSearch.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                // Here you would implement the search logic
                console.log(`Searching for: ${productSearch.value}`);
            }
        });

        // Category Tabs Functionality
        const categoryTabs = document.querySelectorAll('.category-tab');
        const categoryContents = document.querySelectorAll('.category-content');

        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const category = tab.getAttribute('data-category');

                // Remove active class from all tabs and contents
                categoryTabs.forEach(t => t.classList.remove('active'));
                categoryContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(`${category}-content`).classList.add('active');
            });
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

        // Fixed Filter Section on Scroll
        const filterSection = document.getElementById('filter-section');
        const recommendationsSection = document.getElementById('recommendations-section');
        const body = document.body;

        // Get initial positions
        let filterSectionHeight = filterSection.offsetHeight;
        let filterSectionTop = filterSection.offsetTop;

        // Function to handle scroll events
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // If we've scrolled past the filter section
            if (scrollTop > filterSectionTop) {
                // Add fixed class to filter section
                if (!filterSection.classList.contains('filter-section-fixed')) {
                    filterSection.classList.add('filter-section-fixed');
                    body.classList.add('filter-fixed');
                    body.style.paddingTop = `${filterSectionHeight}px`;
                }
            } else {
                // Remove fixed class from filter section
                filterSection.classList.remove('filter-section-fixed');
                body.classList.remove('filter-fixed');
                body.style.paddingTop = '0';
            }
        }

        // Listen for scroll events
        window.addEventListener('scroll', handleScroll);

        // Recalculate positions on window resize
        window.addEventListener('resize', function () {
            filterSectionHeight = filterSection.offsetHeight;
            filterSectionTop = filterSection.offsetTop;

            // Update body padding if filter section is fixed
            if (filterSection.classList.contains('filter-section-fixed')) {
                body.style.paddingTop = `${filterSectionHeight}px`;
            }
        });
