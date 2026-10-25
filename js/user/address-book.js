document.addEventListener('DOMContentLoaded', function () {
            // Form elements
            const addressForm = document.getElementById('new-address-form');
            const noAddresses = document.getElementById('no-addresses');
            const savedAddresses = document.getElementById('saved-addresses');
            const addNewAddressBtn = document.getElementById('add-new-address');

            // Delete modal elements
            const deleteAddressModal = document.getElementById('delete-address-modal');
            const closeDeleteModal = document.getElementById('close-delete-modal');
            const cancelDelete = document.getElementById('cancel-delete');
            const confirmDelete = document.getElementById('confirm-delete');

            // Form submission
            if (addressForm) {
                addressForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // In a real implementation, you would save the address data
                    // For demo purposes, we'll just show the saved addresses view
                    noAddresses.classList.add('hidden');
                    savedAddresses.classList.remove('hidden');

                    // Reset the form
                    addressForm.reset();
                });
            }

            // Add new address button
            if (addNewAddressBtn) {
                addNewAddressBtn.addEventListener('click', function () {
                    // Show the form again
                    addressForm.style.display = 'block';

                    // Scroll to the form
                    addressForm.scrollIntoView({ behavior: 'smooth' });
                });
            }

            // Edit address functionality
            const editButtons = document.querySelectorAll('.edit-address');
            editButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // In a real implementation, you would populate the form with the address data
                    // For demo purposes, we'll just scroll to the form
                    addressForm.scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Delete address functionality
            const deleteButtons = document.querySelectorAll('.delete-address');
            deleteButtons.forEach(button => {
                button.addEventListener('click', function () {
                    // Show the delete confirmation modal
                    deleteAddressModal.classList.remove('hidden');
                });
            });

            // Close delete modal
            if (closeDeleteModal) {
                closeDeleteModal.addEventListener('click', function () {
                    deleteAddressModal.classList.add('hidden');
                });
            }

            // Cancel delete
            if (cancelDelete) {
                cancelDelete.addEventListener('click', function () {
                    deleteAddressModal.classList.add('hidden');
                });
            }

            // Confirm delete
            if (confirmDelete) {
                confirmDelete.addEventListener('click', function () {
                    // In a real implementation, you would delete the address
                    // For demo purposes, we'll just close the modal
                    deleteAddressModal.classList.add('hidden');

                    // If this was the last address, show the no addresses view
                    // For demo purposes, we'll keep the saved addresses view
                });
            }

            // Close delete modal when clicking outside
            deleteAddressModal.addEventListener('click', function (e) {
                if (e.target === deleteAddressModal) {
                    deleteAddressModal.classList.add('hidden');
                }
            });

            // Check if there are saved addresses and show appropriate view
            // For demo purposes, we'll show the no addresses view by default
            // In a real implementation, you would check if there are saved addresses
            noAddresses.classList.remove('hidden');
            savedAddresses.classList.add('hidden');
        });
