// Tab switching functionality
        document.addEventListener('DOMContentLoaded', function () {
            const creditsTab = document.getElementById('credits-tab');
            const refundsTab = document.getElementById('refunds-tab');
            const creditsContent = document.getElementById('credits-content');
            const refundsContent = document.getElementById('refunds-content');

            // Credit detail view elements
            const creditsList = document.getElementById('credits-list');
            const creditDetails = document.getElementById('credit-details');
            const backToCredits = document.getElementById('back-to-credits');
            const noCredits = document.getElementById('no-credits');

            // Refund detail view elements
            const refundsList = document.getElementById('refunds-list');
            const refundDetails = document.getElementById('refund-details');
            const backToRefunds = document.getElementById('back-to-refunds');
            const noRefunds = document.getElementById('no-refunds');

            // Tab switching
            creditsTab.addEventListener('click', function () {
                // Update tab styles
                creditsTab.classList.add('active');
                refundsTab.classList.remove('active');
                refundsTab.classList.add('text-gray-500');
                creditsTab.classList.remove('text-gray-500');

                // Show/hide content
                creditsContent.classList.remove('hidden');
                refundsContent.classList.add('hidden');
            });

            refundsTab.addEventListener('click', function () {
                // Update tab styles
                refundsTab.classList.add('active');
                creditsTab.classList.remove('active');
                creditsTab.classList.add('text-gray-500');
                refundsTab.classList.remove('text-gray-500');

                // Show/hide content
                refundsContent.classList.remove('hidden');
                creditsContent.classList.add('hidden');
            });

            // Back to credits list
            if (backToCredits) {
                backToCredits.addEventListener('click', function (e) {
                    e.preventDefault();
                    creditDetails.classList.add('hidden');
                    creditsList.parentElement.classList.remove('hidden');
                });
            }

            // Back to refunds list
            if (backToRefunds) {
                backToRefunds.addEventListener('click', function (e) {
                    e.preventDefault();
                    refundDetails.classList.add('hidden');
                    refundsList.parentElement.classList.remove('hidden');
                });
            }

            // For demo purposes, show the "no credits/refunds" state
            // In a real implementation, you would check if there are credits/refunds
            // and show the appropriate view
            if (creditsList && creditsList.querySelector('tbody').children.length === 0) {
                creditsList.parentElement.classList.add('hidden');
                noCredits.classList.remove('hidden');
            }

            if (refundsList && refundsList.querySelector('tbody').children.length === 0) {
                refundsList.parentElement.classList.add('hidden');
                noRefunds.classList.remove('hidden');
            }

            // Add click event listeners for view credit/refund details
            // This would be populated dynamically in a real implementation
            document.querySelectorAll('#credits-list a[href="#"]').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    creditsList.parentElement.classList.add('hidden');
                    creditDetails.classList.remove('hidden');
                });
            });

            document.querySelectorAll('#refunds-list a[href="#"]').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    refundsList.parentElement.classList.add('hidden');
                    refundDetails.classList.remove('hidden');
                });
            });
        });
