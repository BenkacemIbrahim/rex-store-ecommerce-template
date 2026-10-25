// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
        });

        // Go Back Function
        function goBack() {
            if (document.referrer && document.referrer.indexOf(window.location.host) !== -1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        }
