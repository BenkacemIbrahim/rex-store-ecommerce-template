// Tab switching functionality
        document.addEventListener('DOMContentLoaded', function () {
            const orderTab = document.getElementById('orders-tab');
            const returnsTab = document.getElementById('returns-tab');
            const ordersContent = document.getElementById('orders-content');
            const returnsContent = document.getElementById('returns-content');

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
        });
