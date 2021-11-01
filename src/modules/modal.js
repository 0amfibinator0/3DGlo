const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popup = modal.querySelector('.popup-content');
    
    popup.style.opacity = '0';

    window.addEventListener("resize", modalFunc);
    
    function modalFunc () {
        if (document.documentElement.clientWidth >= 769) {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
                setTimeout(() => {
                    popup.style.transition = '0.5s';
                    popup.style.opacity = '1';
                }, 200);
            });
        });
        
        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                popup.style.transition = '1s';
                popup.style.opacity = '0';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 500);
            }
        });
        } else {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                modal.style.display = 'block';
                popup.style.transition = '';
                popup.style.opacity = '';
            });
        });
    
        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                modal.style.display = 'none';
                popup.style.transition = '';
                popup.style.opacity = '';
            }
        });
        }
    }
    modalFunc();
};

export default modal;