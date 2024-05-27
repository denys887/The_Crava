let menuItem = [
    {
        dishTitle: "Колекція українських закусок",
        dishPrice: "200грн",
        Ingredients: "сало класичне / сало генеральське / крем-сало / соління / хрін / гірчиця",
    },
    {
        dishTitle: "Карпаччо з восьминога",
        dishPrice: "220грн",
        Ingredients: "каперс / пармезан / соус / гіфрчично-трюфельний",

    },
    {
        dishTitle: "Тартар із тунця",
        dishPrice: "250грн",
        Ingredients: "авокадо / трюфель /соус понзу",
    },
    {
        dishTitle: "Крудо із сібасу",
        dishPrice: "160грн",
        Ingredients: "авокадо / томат-гель / соус бергамот",

    },
    {
        dishTitle: "Ікра осетра",
        dishPrice: "325грн",
        Ingredients: "картопля / оладки / соус сметанний",

    },
    {
        dishTitle: "Щупалець восьминога",
        dishPrice: "260грн",
        Ingredients: "картопля / томат чері / цукіні / анчан-гель / соус винно-лимонний",

    },
    {
        dishTitle: "Стейк Рібай",
        dishPrice: "377грн",
        Ingredients: "картопля / солодкий перець / цукіні / соус винно-ягідний",

    },
    {
        dishTitle: "Стейк Нью Йорк",
        dishPrice: "285грн",
        Ingredients: "пбре з селери / соус винний із витриманого портвейну",

    },
    {
        dishTitle: "Каре Ягня",
        dishPrice: "450грн",
        Ingredients: "баклажан у кисло-солодкому соусі / солодкий перець / соус ожиновий",

    },
    {
        dishTitle: "Ризото з морепродуктами",
        dishPrice: "250грн",
        Ingredients: "гребінець / щупалець восьминога / креветка / кальмар / соус біск",

    },
    {
        dishTitle: "Чилійський сібас",
        dishPrice: "455грн",
        Ingredients: "цукіні / креветковий крем",

    },
    {
        dishTitle: "Норвезький лосось",
        dishPrice: "300грн",
        Ingredients: "блакитний пармезан рис / пак-чой / манговий гель / бергамот гель",

    },
    {
        dishTitle:"Тирамісу",
        dishPrice:"60грн",
        Ingredients:"сир Маскарпоне / коньяк / експрессо",
    },
    {
        dishTitle:"Київський торт",
        dishPrice:"80грн",
        Ingredients:"фундук / коньяк / ванілін",
    },
    {
        dishTitle:"Молочний бріош з фісташковим кремом",
        dishPrice:"70грн",
        Ingredients:"шоколад білий / фісташки / міндаль",
    },
    {
        dishTitle:"Панакота, ягоди, полуничний соус",
        dishPrice:"70грн",
        Ingredients:"полуничний соус / свіжі ягоди",
    },
    {
        dishTitle:"Ягоди з маскарпоновим кремом",
        dishPrice:"80грн",
        Ingredients:"печиво / Маскарпоне / ванільний екстракт",
    },
    {
        dishTitle:"Шоколадна Маракуйя",
        dishPrice:"82грн",
        Ingredients:"маракуя / білий шоколод",
    },

];

function outputDish() {
    let menuListCounter = 0;
    document.querySelectorAll(".dish").forEach(d => d.remove());

    let dish = document.querySelectorAll(".dish_list");
    for (let j = 0; j < dish.length; j++) {
        let dishItem = dish[j];


        for (let i = 0; i < 6; i++) {
            let menu = menuItem[menuListCounter];
            if (!menu) {
                continue;
            }
            let item = `       
            <div class="dish">
                <div class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
                    <div class="dish_title">${menu.dishTitle}</div>
                    <div class="dish_price">${menu.dishPrice}</div>
                </div>
                <div class="dish_contents">
                    <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                        <p>${menu.Ingredients}</p>
                    </ul>
                </div>
                <div class="dish_order"><a href="#">Замовити зараз</a></div>
            </div>`

            dishItem.insertAdjacentHTML('beforeend', item);
            menuListCounter++;
        }
    }
    /* Сортування вставками */
    const sortButton = document.querySelector(".sort-button");
    sortButton.addEventListener("click", handleSort);

    function handleSort() {

        document.querySelectorAll(".dish_title").forEach(title => {
            title.classList.remove("highlight");
        });

        for (let i = 0; i < menuItem.length; i += 6) {
            const blockToSort = menuItem.slice(i, i + 6);

            blockToSort.sort((a, b) => {
                const priceA = parseFloat(a.dishPrice);
                const priceB = parseFloat(b.dishPrice);


                return priceA - priceB;
            });

            menuItem.splice(i, 6, ...blockToSort);
        }

        renderMenu();
    }

    function renderMenu() {
        document.querySelectorAll(".dish").forEach(d => d.remove());

        let dish = document.querySelectorAll(".dish_list");
        for (let j = 0; j < dish.length; j++) {
            let dishItem = dish[j];

            for (let i = 0; i < 6; i++) {
                let menu = menuItem[j * 6 + i];
                if (!menu) {
                    continue;
                }
                let item = `
                <div class="dish">
                <div class="dish_title_container d-flex flex-xl-row flex-column align-items-start justify-content-start">
                    <div class="dish_title">${menu.dishTitle}</div>
                    <div class="dish_price">${menu.dishPrice}</div>
                </div>
                <div class="dish_contents">
                    <ul class="d-flex flex-row align-items-start justify-content-start flex-wrap">
                        <p>${menu.Ingredients}</p>
                    </ul>
                </div>
                <div class="dish_order"><a href="#">Замовити зараз</a></div>
            </div>
                `;

                dishItem.insertAdjacentHTML('beforeend', item);
            }
        }
    }
    /* Ленійний пошук */
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", handleSearch);

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        
        document.querySelectorAll(".dish_title").forEach(title => {
            title.classList.remove("highlight");
        });

       
        menuItem.forEach((menu, index) => {
            if (menu.dishTitle.toLowerCase().includes(searchTerm)) {
                const dishTitleElement = document.querySelectorAll(".dish_title")[index];
                dishTitleElement.classList.add("highlight");
            }
        });
    }
};

outputDish();