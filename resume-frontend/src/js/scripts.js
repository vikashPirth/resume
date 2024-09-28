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
        // Fetch personal details from the backend and update the "About" section
    async function fetchSkills() {
        try {
            const response = await fetch('http://localhost:8000/skills');
            const skills = await response.json();  // This is an array of skill objects

            // Assuming you want to display the skills in a list
            const skillsContainer = document.getElementById('skills-list');
            skillsContainer.innerHTML = ''; // Clear previous list if any

            // Loop through the skills array and append each skill to the container
            skills.forEach(skill => {
                const skillItem = document.createElement('li');
                skillItem.textContent = `${skill.name}: ${skill.level}`;  // Assuming skill has 'name' and 'level'
                skillsContainer.appendChild(skillItem);
            });

        } catch (error) {
            console.error('Error fetching skills:', error);
        }
    }

    fetchPersonalDetails(); // Call the function to fetch and display data
    fetchSkills();

});
