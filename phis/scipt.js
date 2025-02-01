document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.scroll-block');
  
    const checkVisibility = () => {
      blocks.forEach((block, index) => {
        const blockTop = block.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // Если блок находится в пределах 80% высоты окна
        if (blockTop < windowHeight * 0.8) {
          // Добавляем задержку для каждого блока
          setTimeout(() => {
            block.classList.add('visible');
          }, index * 200); // Задержка 200 мс для каждого следующего блока
        }
      });
    };
  
    // Проверяем видимость при загрузке страницы
    checkVisibility();
  
    // Проверяем видимость при прокрутке
    window.addEventListener('scroll', checkVisibility);
  });