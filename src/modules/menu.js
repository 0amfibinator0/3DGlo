const menu = () => {
    const menu = document.querySelector('menu');
    const header = document.querySelector('.main-header');
    
    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    header.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu();
        }
    });
    menu.addEventListener('click', (e) => {
        if (e.target.closest('.close-btn') || e.target.closest('ul > li > a')) {
            handleMenu();
        }
    });
};

export default menu;