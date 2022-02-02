const headerScroll = () => {
    const btn = document.getElementById('scroll-btn');

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        
        const blockID = btn.getAttribute('href');
        
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
        });
    });
};

export default headerScroll;