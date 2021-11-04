import {animate} from './helpers';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const popup = modal.querySelector('.popup-content');

    window.addEventListener("resize", modalFunc);
    
    function modalFunc () {
        if (document.documentElement.clientWidth >= 769) {
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    animate({
                        duration: 1000,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            modal.style.display = 'block';
                            popup.style.transition = '0.2s';
                            popup.style.opacity = progress;
                        }
                    });
                });
            });
        
        modal.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        popup.style.transition = '0.2s';
                        popup.style.opacity = progress;
                        setTimeout(() => {
                            modal.style.display = 'none';
                        }, 500);
                    }
                });
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