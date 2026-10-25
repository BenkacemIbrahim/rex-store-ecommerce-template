// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
        });

        // Enhanced Custom Dropdowns
        document.addEventListener('DOMContentLoaded', function () {
            // Initialize all custom select elements
            const customSelects = document.querySelectorAll('.custom-select');

            customSelects.forEach(customSelect => {
                const select = customSelect.querySelector('select');
                const selectSelected = customSelect.querySelector('.select-selected');
                const customDropdown = customSelect.querySelector('.custom-dropdown');

                // If dropdown doesn't exist yet (for initial setup), create it
                if (!customDropdown) {
                    // Create custom dropdown
                    const newCustomDropdown = document.createElement('div');
                    newCustomDropdown.classList.add('custom-dropdown');

                    // Create dropdown options
                    Array.from(select.options).forEach((option, index) => {
                        const dropdownOption = document.createElement('div');
                        dropdownOption.classList.add('custom-dropdown-option');
                        dropdownOption.setAttribute('data-value', option.value);

                        if (option.selected) {
                            dropdownOption.classList.add('selected');
                        }

                        dropdownOption.textContent = option.textContent;

                        // Add click event to select option
                        dropdownOption.addEventListener('click', () => {
                            // Update the original select element
                            select.selectedIndex = index;

                            // Update the displayed value
                            selectSelected.textContent = option.textContent;

                            // Update selected class
                            newCustomDropdown.querySelectorAll('.custom-dropdown-option').forEach(opt => {
                                opt.classList.remove('selected');
                            });
                            dropdownOption.classList.add('selected');

                            // Hide dropdown
                            newCustomDropdown.style.display = 'none';

                            // Remove active class from select-selected
                            selectSelected.classList.remove('active');

                            // Trigger change event on the original select
                            const event = new Event('change', { bubbles: true });
                            select.dispatchEvent(event);
                        });

                        newCustomDropdown.appendChild(dropdownOption);
                    });

                    // Add dropdown to the custom select container
                    customSelect.appendChild(newCustomDropdown);
                }

                // Toggle dropdown on click
                selectSelected.addEventListener('click', (e) => {
                    e.stopPropagation();

                    const dropdown = customSelect.querySelector('.custom-dropdown');

                    // Close all other dropdowns and remove active class
                    document.querySelectorAll('.custom-dropdown').forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.style.display = 'none';
                            otherDropdown.parentElement.querySelector('.select-selected').classList.remove('active');
                        }
                    });

                    // Toggle this dropdown
                    const isOpen = dropdown.style.display === 'block';
                    dropdown.style.display = isOpen ? 'none' : 'block';

                    // Toggle active class for rotation
                    selectSelected.classList.toggle('active', !isOpen);
                });
            });

            // Close all dropdowns when clicking outside
            document.addEventListener('click', () => {
                document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
                    dropdown.style.display = 'none';
                    dropdown.parentElement.querySelector('.select-selected').classList.remove('active');
                });
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

        // Remove item from wishlist
        const removeButtons = document.querySelectorAll('.remove-item-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const wishlistItem = this.closest('.wishlist-item');
                wishlistItem.style.opacity = '0';
                setTimeout(() => {
                    wishlistItem.style.display = 'none';

                    // Check if wishlist is empty
                    const remainingItems = document.querySelectorAll('.wishlist-item:not([style*="display: none"])');
                    if (remainingItems.length === 0) {
                        document.querySelector('.empty-wishlist').classList.remove('hidden');
                    }
                }, 300);
            });
        });
