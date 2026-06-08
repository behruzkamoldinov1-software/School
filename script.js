// Ждем полной загрузки DOM-дерева
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Данные для слайдера (массив картинок и текстов)
    const slidesData = [
        {
            bgImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920",
            title: "Veb-saytimizga xush kelibsiz!",
            desc: "Toshkent shahri M.Ulug'bek tumani 64-sonli ixtisoslashtirilgan umumta'lim maktabi rasmiy veb-sayti"
        },
        {
            bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920",
            title: "Sifatli ta'lim — yorqin kelajak!",
            desc: "Bizning maktabimizda zamonaviy texnologiyalar va tajribali ustozlar jamlangan."
        },
        {
            bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920",
            title: "Bizning yutuqlarimiz",
            desc: "O'quvchilarimiz respublika va xalqaro olimpiadalarda faxrli o'rinlarni qo'lga kiritmoqdalar."
        }
    ];

    // 2. Находим нужные элементы на странице
    const bannerBg = document.querySelector(".hero-image-placeholder");
    const bannerTitle = document.querySelector(".hero-content h1");
    const bannerDesc = document.querySelector(".hero-content p");
    const btnLeft = document.querySelector(".arrow-left");
    const btnRight = document.querySelector(".arrow-right");

    // Индекс текущего слайда
    let currentIndex = 0;

    // 3. Функция для обновления контента на баннере
    function updateSlider(index) {
        // Меняем фоновую картинку
        bannerBg.style.backgroundImage = `url('${slidesData[index].bgImage}')`;
        // Меняем тексты
        bannerTitle.textContent = slidesData[index].title;
        bannerDesc.textContent = slidesData[index].desc;
    }

    // 4. Обработчик клика на стрелку ВПРАВО
    btnRight.addEventListener("click", () => {
        currentIndex++;
        // Если дошли до конца — возвращаемся к первому слайду
        if (currentIndex >= slidesData.length) {
            currentIndex = 0;
        }
        updateSlider(currentIndex);
    });

    // 5. Обработчик клика на стрелку ВЛЕВО
    btnLeft.addEventListener("click", () => {
        currentIndex--;
        // Если ушли в минус — переключаемся на самый последний слайд
        if (currentIndex < 0) {
            currentIndex = slidesData.length - 1;
        }
        updateSlider(currentIndex);
    });

    // 6. Автоматическое переключение слайдов каждые 5 секунд
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= slidesData.length) {
            currentIndex = 0;
        }
        updateSlider(currentIndex);
    }, 5000);

});