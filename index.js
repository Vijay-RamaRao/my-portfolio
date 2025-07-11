document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
    });

    const projects = [
        {
            title: 'Habitron - Habit Tracker',
            description: 'A no-nonsense, one-file wonder that turns your habit tracking into an aesthetic obsession - Habitron gets it done, beautifully.',
            imageUrl: 'https://i.postimg.cc/hv2YyzWj/Screenshot-2025-06-28-151705.png',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            liveUrl: 'https://vijay-ramarao.github.io/habitron-habit-tracker/',
            sourceUrl: 'https://github.com/Vijay-RamaRao/habitron-habit-tracker'
        },
        {
            title: 'Virtual SecureATM',
            description: 'A futuristic ATM simulation that empowers users to securely manage balance, PIN updates, and real-time transactions - all through a sleek, interactive web interface powered by Firebase.',
            imageUrl: 'https://i.postimg.cc/hPwyXqKH/image-2025-06-28-152051658.png',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            liveUrl: 'https://vijay-ramarao.github.io/secure-atm-portal/',
            sourceUrl: 'https://github.com/Vijay-RamaRao/secure-atm-portal'
        },
        {
            title: 'Simon Says Memory Game',
            description: 'A classic memory game that challenges players to repeat a sequence of colors. This project sharpened my skills in JavaScript logic, state management, and creating interactive user feedback.',
            imageUrl: 'https://i.postimg.cc/wTvx6DBw/image-2025-06-28-152930793.png',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            liveUrl: 'https://vijay-ramarao.github.io/Simon-Says/',
            sourceUrl: 'https://github.com/Vijay-RamaRao/Simon-Says'
        }
    ];

    const projectListContainer = document.getElementById('project-list');
    projects.forEach((project) => {
        const techList = project.techStack.map(tech => `<li>${tech}</li>`).join('');
        const projectHtml = `
            <div class="project-entry" data-aos="fade-up">
                <a href="${project.liveUrl}" target="_blank" class="project-image">
                    <img src="${project.imageUrl}" alt="${project.title}">
                </a>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="project-description">
                        <p>${project.description}</p>
                    </div>
                    <ul class="project-tech-list">
                        ${techList}
                    </ul>
                    <div class="project-links">
                        <a href="${project.sourceUrl}" target="_blank" title="Source Code"><i class="fab fa-github"></i></a>
                        <a href="${project.liveUrl}" target="_blank" title="Live Preview"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        `;
        projectListContainer.innerHTML += projectHtml;
    });

    const themeSwitch = document.getElementById('checkbox');
    const docElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    docElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
    }

    themeSwitch.addEventListener('change', (e) => {
        const targetTheme = e.target.checked ? 'dark' : 'light';
        docElement.setAttribute('data-theme', targetTheme);
        localStorage.setItem('theme', targetTheme);
    });

    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const closeBtn = document.querySelector('.image-modal-close');
    const achievementImages = document.querySelectorAll('.achievement-img');

    achievementImages.forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'block';
            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modalTitle.textContent = this.getAttribute('data-title') || this.alt;
            
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        modalImage.src = '';
        modalTitle.textContent = '';
        
        document.body.style.overflow = 'auto';
    }

    document.getElementById('year').textContent = new Date().getFullYear();
});
