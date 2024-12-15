// Получаем кнопки и элементы
const navMain = document.getElementById("navMain");
const navCreate = document.getElementById("navCreate");
const navTopic = document.getElementById("navTopic"); // Кнопка для смены темы
const exit1 = document.getElementById("exitMain");
const exit2 = document.getElementById("exitCreate");
const mainTextNav = document.getElementById("mainTextNav");
const createTextNav = document.getElementById("createTextNav");
const index = document.getElementById("index");
const whatIs = document.getElementById("whatIs");
const history = document.getElementById("history");
const application = document.getElementById("application");
const protection = document.getElementById("protection");
const me = document.getElementById("me")
const LA = document.getElementById("LA")
const school = document.getElementById("shool")


// Считываем сохраненную тему из localStorage
const savedTheme = localStorage.getItem('theme');

// Применяем сохраненную тему при загрузке страницы
if (savedTheme === 'dark') {
    document.getElementById('theme-style').setAttribute('href', 'dark.css');
} else {
    document.getElementById('theme-style').setAttribute('href', 'light.css');
}

// Функция для переключения темы
function switchTheme() {
    var themeLink = document.getElementById('theme-style');
    if (themeLink) {
        // Проверяем текущий файл стилей
        if (themeLink.getAttribute('href') === 'light.css') {
            themeLink.setAttribute('href', 'dark.css'); // Меняем на dark.css
            localStorage.setItem('theme', 'dark'); // Сохраняем выбор темы
        } else {
            themeLink.setAttribute('href', 'light.css'); // Возвращаем обратно на light.css
            localStorage.setItem('theme', 'light'); // Сохраняем выбор темы
        }
    }
}

// Добавляем обработчик события для кнопки
navTopic.addEventListener('click', switchTheme);

// Обработчики для навигации между страницами
navMain.addEventListener('click', () => {
    mainTextNav.style.display = 'flex';
});
exit1.addEventListener('click', () => {
    mainTextNav.style.display = 'none';
});

navCreate.addEventListener('click', () => {
    createTextNav.style.display = 'flex';
});
exit2.addEventListener('click', () => {
    createTextNav.style.display = 'none';
});

index.addEventListener('click', () => {
    window.location.href = "index.html";
});
whatIs.addEventListener('click', () => {
    window.location.href = "whatIs.html";
});
history.addEventListener('click', () => {
    window.location.href = "history.html";
});
application.addEventListener('click', () => {
    window.location.href = "application.html";
});
protection.addEventListener('click', () => {
    window.location.href = "protection.html";
});

me.addEventListener('click', () => {
    window.location.href = "me.html";
});
LA.addEventListener('click', () => {
    window.location.href = "LA.html";
});
school.addEventListener('click', () => {
    window.location.href = "shool.html";
});
