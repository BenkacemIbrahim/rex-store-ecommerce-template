// Tab switching functionality
        document.addEventListener('DOMContentLoaded', function () {
            const orderTab = document.getElementById('orders-tab');
            const returnsTab = document.getElementById('returns-tab');
            const ordersContent = document.getElementById('orders-content');
            const returnsContent = document.getElementById('returns-content');

            // Order detail view elements
            const ordersList = document.getElementById('orders-list');
            const orderDetails = document.getElementById('order-details');
            const backToOrders = document.getElementById('back-to-orders');
            const noOrders = document.getElementById('no-orders');

            // Return detail view elements
            const returnsList = document.getElementById('returns-list');
            const returnDetails = document.getElementById('return-details');
            const backToReturns = document.getElementById('back-to-returns');
            const noReturns = document.getElementById('no-returns');

            // Return form modal elements
            const initiateReturn = document.getElementById('initiate-return');
            const returnFormModal = document.getElementById('return-form-modal');
            const closeReturnForm = document.getElementById('close-return-form');
            const returnForm = document.getElementById('return-form');
            const returnReason = document.getElementById('return-reason');
            const otherReasonContainer = document.getElementById('other-reason-container');

            // Tab switching
            orderTab.addEventListener('click', function () {
                // Update tab styles
                orderTab.classList.add('active');
                returnsTab.classList.remove('active');
                returnsTab.classList.add('text-gray-500');
                orderTab.classList.remove('text-gray-500');

                // Show/hide content
                ordersContent.classList.remove('hidden');
                returnsContent.classList.add('hidden');
            });

            returnsTab.addEventListener('click', function () {
                // Update tab styles
                returnsTab.classList.add('active');
                orderTab.classList.remove('active');
                orderTab.classList.add('text-gray-500');
                returnsTab.classList.remove('text-gray-500');

                // Show/hide content
                returnsContent.classList.remove('hidden');
                ordersContent.classList.add('hidden');
            });

            // View order details functionality
            const viewOrderLinks = document.querySelectorAll('#orders-list a[href="#"]:first-child');
            viewOrderLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    ordersList.classList.add('hidden');
                    orderDetails.classList.remove('hidden');
                });
            });

            // Back to orders list
            if (backToOrders) {
                backToOrders.addEventListener('click', function (e) {
                    e.preventDefault();
                    orderDetails.classList.add('hidden');
                    ordersList.classList.remove('hidden');
                });
            }

            // View return details functionality
            const viewReturnLinks = document.querySelectorAll('#returns-list a[href="#"]');
            viewReturnLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    returnsList.classList.add('hidden');
                    returnDetails.classList.remove('hidden');
                });
            });

            // Back to returns list
            if (backToReturns) {
                backToReturns.addEventListener('click', function (e) {
                    e.preventDefault();
                    returnDetails.classList.add('hidden');
                    returnsList.classList.remove('hidden');
                });
            }

            // Initiate return button
            if (initiateReturn) {
                initiateReturn.addEventListener('click', function (e) {
                    e.preventDefault();
                    returnFormModal.classList.remove('hidden');
                });
            }

            // Close return form modal
            if (closeReturnForm) {
                closeReturnForm.addEventListener('click', function () {
                    returnFormModal.classList.add('hidden');
                });
            }

            // Close return form when clicking outside
            returnFormModal.addEventListener('click', function (e) {
                if (e.target === returnFormModal) {
                    returnFormModal.classList.add('hidden');
                }
            });

            // Show/hide other reason field based on selection
            if (returnReason) {
                returnReason.addEventListener('change', function () {
                    if (this.value === 'other') {
                        otherReasonContainer.classList.remove('hidden');
                    } else {
                        otherReasonContainer.classList.add('hidden');
                    }
                });
            }

            // Return form submission
            if (returnForm) {
                returnForm.addEventListener('submit', function (e) {
                    e.preventDefault();

                    // Here you would implement the actual return submission logic
                    alert('Return request submitted successfully!');

                    // Close the modal
                    returnFormModal.classList.add('hidden');

                    // Redirect to returns tab
                    returnsTab.click();
                });
            }

            // Return links in orders list
            const returnLinks = document.querySelectorAll('#orders-list a[href="#"]:nth-child(2)');
            returnLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    returnFormModal.classList.remove('hidden');
                });
            });
        });
