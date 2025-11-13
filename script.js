const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Снять активность со всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        // Сделать активной выбранную кнопку
        button.classList.add('active');

        // Скрыть все вкладки
        contents.forEach(content => content.classList.remove('active'));
        // Показать выбранную вкладку
        const tab = button.getAttribute('data-tab');
        document.getElementById(tab).classList.add('active');
    });
});
