const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    const popup = modal.querySelector('.popup-content');
    popup.style.opacity = '0';
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            setTimeout(() => {
                popup.style.transition = '0.5s';
                popup.style.opacity = '1';
            }, 200);
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.transition = '1s';
        popup.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
    });

    if (document.documentElement.clientWidth < 769) {
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            popup.style.transition = '';
            popup.style.opacity = '';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        popup.style.transition = '';
        popup.style.opacity = '';
    });
    }
};

export default modal;