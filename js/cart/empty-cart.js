// Initialize AOS
        AOS.init({
            once: true,
            offset: 100,
            duration: 1000,
            delay: 100
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
