const menu = () => {
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu');
        } else if (!e.target.closest('menu') || e.target.closest('ul > li > a') || e.target.closest('.close-btn')) {
            menu.classList.remove('active-menu');
        }
    });
};

export default menu;