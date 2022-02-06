const headerScroll = () => {
    const btn = document.getElementById('scroll-btn');
    const list = document.getElementById('modal-links');

    list.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('modal-link')) {
            const blockID = e.target.getAttribute('href');
            
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
            });
        }
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