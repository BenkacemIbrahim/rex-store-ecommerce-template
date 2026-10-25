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

                // Create custom dropdown
                const customDropdown = document.createElement('div');
                customDropdown.classList.add('custom-dropdown');

                // Create dropdown options
                Array.from(select.options).forEach((option, index) => {
                    const dropdownOption = document.createElement('div');
                    dropdownOption.classList.add('custom-dropdown-option');

                    if (option.selected) {
                        dropdownOption.classList.add('selected');
                    }

                    // Handle color options
                    if (select.classList.contains('color-select')) {
                        const color = option.getAttribute('data-color');

                        const colorOption = document.createElement('div');
                        colorOption.classList.add('color-option');

                        const colorCircle = document.createElement('span');
                        colorCircle.classList.add('color-circle', `color-${color}`);

                        colorOption.appendChild(colorCircle);
                        colorOption.appendChild(document.createTextNode(option.textContent));

                        dropdownOption.appendChild(colorOption);
                    } else {
                        dropdownOption.textContent = option.textContent;
                    }

                    // Add click event to select option
                    dropdownOption.addEventListener('click', () => {
                        // Update the original select  () => {
                        // Update the original select element
                        select.selectedIndex = index;

                        // Update the displayed value
                        if (select.classList.contains('color-select')) {
                            // Clone the color option but maintain the fixed height
                            const newColorOption = document.createElement('div');
                            newColorOption.classList.add('color-option');

                            const colorCircle = dropdownOption.querySelector('.color-circle').cloneNode(true);
                            const textContent = dropdownOption.querySelector('.color-option').textContent;

                            newColorOption.appendChild(colorCircle);
                            newColorOption.appendChild(document.createTextNode(textContent));

                            // Clear and set the new content
                            selectSelected.innerHTML = '';
                            selectSelected.appendChild(newColorOption);
                        } else {
                            selectSelected.textContent = option.textContent;
                        }

                        // Update selected class
                        customDropdown.querySelectorAll('.custom-dropdown-option').forEach(opt => {
                            opt.classList.remove('selected');
                        });
                        dropdownOption.classList.add('selected');

                        // Hide dropdown
                        customDropdown.style.display = 'none';

                        // Remove active class from select-selected
                        selectSelected.classList.remove('active');

                        // Trigger change event on the original select
                        const event = new Event('change', { bubbles: true });
                        select.dispatchEvent(event);
                    });

                    customDropdown.appendChild(dropdownOption);
                });

                // Add dropdown to the custom select container
                customSelect.appendChild(customDropdown);

                // Toggle dropdown on click
                selectSelected.addEventListener('click', (e) => {
                    e.stopPropagation();

                    // Close all other dropdowns and remove active class
                    document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
                        if (dropdown !== customDropdown) {
                            dropdown.style.display = 'none';
                            dropdown.parentElement.querySelector('.select-selected').classList.remove('active');
                        }
                    });

                    // Toggle this dropdown
                    const isOpen = customDropdown.style.display === 'block';
                    customDropdown.style.display = isOpen ? 'none' : 'block';

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

            // Initialize the recommendations slider navigation
            const slider = document.getElementById('recommendations-slider');
            const prevBtn = document.getElementById('prev-recommendations');
            const nextBtn = document.getElementById('next-recommendations');

            // Set scroll amount (width of one item plus gap)
            const scrollAmount = 300; // Approximate width of item (272px) + gap (28px)

            // Add click event for previous button
            prevBtn.addEventListener('click', () => {
                slider.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });

            // Add click event for next button
            nextBtn.addEventListener('click', () => {
                slider.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        });

        // Quantity Selector
        const quantityBtns = document.querySelectorAll('.quantity-btn');

        quantityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const input = btn.parentElement.querySelector('.quantity-input');
                let value = parseInt(input.value);

                if (btn.classList.contains('plus')) {
                    value++;
                } else if (btn.classList.contains('minus') && value > 1) {
                    value--;
                }

                input.value = value;
                updateCartTotals();
            });
        });

        // Remove Item
        const removeButtons = document.querySelectorAll('.remove-item');

        removeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const cartItem = button.closest('.py-8.border-b.border-gray-100');
                cartItem.remove();

                // Check if cart is empty
                const cartItems = document.querySelectorAll('#cart-items > div');
                if (cartItems.length === 0) {
                    document.getElementById('empty-cart-message').classList.remove('hidden');
                }

                updateCartTotals();
            });
        });

        // Move to Wishlist
        const wishlistButtons = document.querySelectorAll('.move-to-wishlist');

        wishlistButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Item moved to wishlist');
                const cartItem = button.closest('.py-8.border-b.border-gray-100');
                cartItem.remove();

                // Check if cart is empty
                const cartItems = document.querySelectorAll('#cart-items > div');
                if (cartItems.length === 0) {
                    document.getElementById('empty-cart-message').classList.remove('hidden');
                }

                updateCartTotals();
            });
        });

        // Update Cart Totals (placeholder function)
        function updateCartTotals() {
            // In a real implementation, this would recalculate totals based on quantities and prices
            console.log('Cart totals updated');
        }

        // Handle size and color changes
        const sizeSelects = document.querySelectorAll('.size-select');
        const colorSelects = document.querySelectorAll('.color-select');

        sizeSelects.forEach(select => {
            select.addEventListener('change', function () {
                console.log(`Size changed to ${this.value} for item ${this.id.split('-')[1]}`);
                // In a real implementation, this would update the product details and possibly the price
                // We don't need the alert anymore since we're handling the UI update in the custom dropdown
            });
        });

        colorSelects.forEach(select => {
            select.addEventListener('change', function () {
                console.log(`Color changed to ${this.value} for item ${this.id.split('-')[1]}`);
                // In a real implementation, this would update the product image and details
                // We don't need the alert anymore since we're handling the UI update in the custom dropdown
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
