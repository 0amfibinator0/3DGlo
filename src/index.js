import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calculator from './modules/calculator';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sending from './modules/sending';
import userValidation from './modules/user-validation';
import headerScroll from './modules/scroll';

setInterval(timer, 1000, '16 december 2021');
timer('30 october 2021');
menu();
modal();
calculator(100);
validation();
tabs();
slider();
sending({
    firstFormId: 'form1',
    secondFormId: 'form2',
    thiedFormId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
userValidation();
headerScroll();