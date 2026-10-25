document.addEventListener('DOMContentLoaded', function () {
            // Initialize AOS
            AOS.init();

            // Get all footer section titles
            const footerTitles = document.querySelectorAll('.footer-title');

            // Add click event listener to each title
            footerTitles.forEach(title => {
                title.addEventListener('click', function () {
                    // Get the parent footer section
                    const section = this.parentElement;

                    // Toggle active class on the section
                    section.classList.toggle('active');

                    // Toggle active class on the chevron icon
                    const chevron = this.querySelector('.chevron');
                    chevron.classList.toggle('active');

                    // Close other sections
                    footerTitles.forEach(otherTitle => {
                        if (otherTitle !== title) {
                            const otherSection = otherTitle.parentElement;
                            otherSection.classList.remove('active');
                            otherTitle.querySelector('.chevron').classList.remove('active');
                        }
                    });
                });
            });
        });
