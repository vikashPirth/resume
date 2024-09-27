window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Fetch personal details from the backend and update the "About" section
    async function fetchPersonalDetails() {
        try {
            const response = await fetch('http://localhost:8000/personal-details');
            const personalDetails = await response.json();

            // Update the placeholders with data from the backend
            document.getElementById('personal-name').innerHTML = `${personalDetails.name} <span class="text-primary">${personalDetails.lastName}</span>`;
            document.getElementById('personal-address').innerHTML = `${personalDetails.address} ·`;
            document.getElementById('personal-email').href = `mailto:${personalDetails.email}`;
            document.getElementById('personal-email').innerHTML = ` ${personalDetails.email}`;
            document.getElementById('personal-bio').innerHTML = personalDetails.bio;

        } catch (error) {
            console.error('Error fetching personal details:', error);
        }
    }

    fetchPersonalDetails(); // Call the function to fetch and display data

});
