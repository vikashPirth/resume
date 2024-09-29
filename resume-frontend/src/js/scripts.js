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

    async function fetchExperience() {
        try {
            const response = await fetch('http://localhost:8000/experience');
            const experiences = await response.json();  // Assuming the API returns an array of experience objects

            // Get the container where experiences will be appended
            const experienceContainer = document.getElementById('experience-container');
            experienceContainer.innerHTML = '';  // Clear previous content, if any

            // Loop through the experience list and create HTML elements for each experience
            experiences.forEach(experience => {
                // Create a div for each experience
                const experienceDiv = document.createElement('div');
                experienceDiv.classList.add('d-flex', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5');

                // Build the inner content
                experienceDiv.innerHTML = `
                    <div class="flex-grow-1">
                        <h3 class="mb-0">${experience.position}</h3>
                        <div class="subheading mb-3">${experience.company}</div>
                        <p>${experience.summary.split('\n').join('<br>')}</p>
                    </div>
                    <div class="flex-shrink-0">
                        <span class="text-primary">${experience.duration}</span>
                    </div>
                `;

                // Append the experienceDiv to the container
                experienceContainer.appendChild(experienceDiv);
            });

        } catch (error) {
            console.error('Error fetching experience details:', error);
        }
    }

    async function fetchEducation() {
        try {
            const response = await fetch('http://localhost:8000/education');
            const educationList = await response.json();  // Assuming the API returns an array of education objects

            // Get the container where the education details will be appended
            const educationContainer = document.getElementById('education-container');
            educationContainer.innerHTML = '';  // Clear previous content, if any

            // Loop through the education list and create HTML elements for each entry
            educationList.forEach(education => {
                // Create a div for each education entry
                const educationDiv = document.createElement('div');
                educationDiv.classList.add('d-flex', 'flex-column', 'flex-md-row', 'justify-content-between', 'mb-5');

                // Build the inner content
                educationDiv.innerHTML = `
                    <div class="flex-grow-1">
                        <h3 class="mb-0">${education.university}</h3>
                        <div class="subheading mb-3">${education.degree}</div>
                        <div>${education.disciplane}</div>
                        <p>GPA: ${education.gpa}</p>
                    </div>
                    <div class="flex-shrink-0">
                        <span class="text-primary">${education.duration}</span>
                    </div>
                `;

                // Append the educationDiv to the container
                educationContainer.appendChild(educationDiv);
            });

        } catch (error) {
            console.error('Error fetching education details:', error);
        }
    }

    fetchPersonalDetails(); // Call the function to fetch and display data
    fetchExperience();
    fetchEducation();

});
