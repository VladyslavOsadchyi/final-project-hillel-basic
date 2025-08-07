(function () {
  // Отримуємо всі елементи вкладок
  const tabs = document.querySelectorAll(".tabs__link");

  // Отримуємо всі елементи контенту, які відповідають вкладкам
  const contents = document.querySelectorAll(".tabs__content-text");

  // Для кожної вкладки в масиві "tabs" створюємо обробник події
  tabs.forEach((tab, index) => {
    // Додаємо подію на клік по вкладці
    tab.addEventListener("click", () => {
      // Видаляємо клас "active" у всіх вкладок та всіх елементів контенту
      tabs.forEach((n) => n.classList.remove("active"));
      contents.forEach((m) => m.classList.remove("active"));

      // Додаємо клас "active" до вибраної вкладки (та яка була натиснута)
      tab.classList.add("active");

      // Додаємо клас "active" до відповідного контенту, що відповідає вкладці
      contents[index].classList.add("active");
    });
  });
})();