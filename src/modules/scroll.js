const headerScroll = () => {
    const btn = document.getElementById('scroll-btn');
    const link = document.querySelectorAll('#modal-link');

    link.forEach((el) => {
        el.addEventListener('click', function (e) {
            e.preventDefault();
            
            const blockID = el.getAttribute('href');
            
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
            });
        });
    });

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = btn.getAttribute('href');
        
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
        });
    });
};

export default headerScroll;