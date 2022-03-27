const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');

    let calcInput = document.querySelectorAll('.calc-block > input');

    calcInput.forEach((el) => {
        el.onblur = () => {
            if (el.value !== /[\d]/g) {
                el.value = el.value.replace(/[^\d]/g, '');
            }
        };
    });

    const outNum = (num) => {
        let n = 0;
        let t = Math.round(20/(num/10));
        if (num === 0) {
            return;
        }
        let interval = setInterval(() => {
            n = n + 10;
            if (n == num) {
                clearInterval(interval);
            }
            total.textContent = n;
        }, t);
    };

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        outNum(totalValue);
    };

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
                countCalc();
            }
    });
};

export default calculator;