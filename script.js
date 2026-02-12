// Основной скрипт проекта
console.log("Добро пожаловать в мой Git-проект!");

function showMessage(message) {
    console.log(`Сообщение: ${message}`);
    alert(message);
}

// Экспорт функций для использования в других модулях
export { showMessage };
