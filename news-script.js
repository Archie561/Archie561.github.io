const addNewsButton = document.querySelector(".add-news");
const addSceneButton = document.querySelector(".add-scene");
const generateNewsButton = document.querySelector("#generate-news");

addNewsButton.addEventListener("click", (event) => {
    event.preventDefault();

    let newsContainer = document.createElement("form");
    newsContainer.className = "news-form";
    newsContainer.action = "#";

    newsContainer.innerHTML = `<button class="delete-news-button">X</button>

    <div>
        <label for="news-condition">Залежить від умов</label>
        <input class="news-condition" name="news-condition" type="checkbox">
    </div>
        
    <div class="news-condition-wrapper">
        <div>
            <label for="news-condition-characteristic">Характеристика:</label>
            <select class="news-condition-characteristic" name="news-condition-characteristic">
                <option value=""></option>
                <option value="navy">Флот</option>
                <option value="airForces">Повітряні сили</option>
                <option value="infantry">Піхота</option>
                <option value="machinery">Техніка</option>
                <option value="europeanUnion">Європейський Союз</option>
                <option value="china">Китай</option>
                <option value="africa">Африка</option>
                <option value="unitedKingdom">Велика Британія</option>
                <option value="CIS">СНД</option>
                <option value="OPEC">ОПЕК</option>
                <option value="science">Наука</option>
                <option value="welfare">Добробут</option>
                <option value="education">Освіта</option>
                <option value="medicine">Медицина</option>
                <option value="ecology">Екологія</option>
                <option value="infrastructure">Інфраструктура</option>
            </select>
            <label for="news-condition-characteristic-value">більша за</label>
            <input class="news-condition-characteristic-value width-30" name="news-condition-characteristic-value" type="number">
        </div>
        <div>
            <label for="news-condition-choice-chapter-id">ID глави:</label>
            <input type="number" name="news-condition-choice-chapter-id" class="news-condition-choice-chapter-id width-30">
            <label for="dialogue-condition-choice-id">ID вибору:</label>
            <input type="number" name="news-condition-choice-id" class="news-condition-choice-id width-30">
            <label for="news-condition-choice-value">знач.:</label>
            <input type="number" name="news-condition-choice-value" class="news-condition-choice-value width-30">
        </div>
        <div>
            <label for="news-condition-decision-chapter-id">ID глави:</label>
            <input type="number" name="news-condition-decision-chapter-id" class="news-condition-decision-chapter-id width-30">
            <label for="news-condition-decision-id">ID рішення:</label>
            <input type="number" name="news-condition-decision-id" class="news-condition-decision-id width-30">
            <label for="news-condition-decision-value">знач.:</label>
            <input type="number" name="news-condition-decision-value" class="news-condition-decision-value width-30">
        </div>
    </div>
        
    <div class="news-characteristics-container">
        <div>
            <label for="news-type">Тип новини:</label>
            <select class="news-type" name="news-type">
                <option value="1">Liberty Chronicles</option>
                <option value="2">Patriot's Press</option>
                <option value="3">The American Pulse</option>
                <option value="4">Фотокартка</option>
            </select>
        </div>
        <div>
            <label for="news-header">Заголовок (підпис, якщо фотокартка):</label>
            <input type="text" name="news-header" class="news-header">
        </div>
        <div>
            <p class="paragraph-label">Детальний опис:</p>
            <textarea rows="5" cols="43" name="news-detailed-text" class="news-detailed-text"></textarea>
        </div>
        <div>
            <label for="news-image-name">Назва картинки:</label>
            <input type="text" name="news-image-name" class="news-image-name">
        </div>
    </div>`;

    const parentElement = addNewsButton.parentNode;
    parentElement.insertBefore(newsContainer, addNewsButton);


    const deleteNewsButton = newsContainer.querySelector(".delete-news-button");
    const newsConditionCheckbox = newsContainer.querySelector(".news-condition");

    deleteNewsButton.addEventListener("click", (event) => {;
        event.preventDefault();
  
        let parentElement = deleteNewsButton.parentNode;
        parentElement.parentNode.removeChild(parentElement);
    });
  
    newsConditionCheckbox.addEventListener('change', (event) => {
        event.preventDefault();
  
        if (event.currentTarget.checked) {
            newsContainer.querySelector(".news-condition-wrapper").style.display = "block";
        }
        else {
            newsContainer.querySelector(".news-condition-wrapper").style.display = "none";
        }
    });

});

generateNewsButton.addEventListener("click", (event) => {
    event.preventDefault();

    let newsData = document.getElementsByClassName("news-form");
    let news = [];

    for (let i = 0; i < newsData.length; i++) {

        let isUsed = Boolean(newsData[i].querySelector(".news-condition").checked);
        let characteristicName = newsData[i].querySelector(".news-condition-characteristic").value;
        let characteristicValue = Number(newsData[i].querySelector(".news-condition-characteristic-value").value);
        let choiceChapterID = newsData[i].querySelector(".news-condition-choice-chapter-id").value == "" ? -1 : Number(newsData[i].querySelector(".news-condition-choice-chapter-id").value);
        let conditionChoiceID = Number(newsData[i].querySelector(".news-condition-choice-id").value);
        let choiceValue = Number(newsData[i].querySelector(".news-condition-choice-value").value);
        let decisionChapterID = newsData[i].querySelector(".news-condition-decision-chapter-id").value == "" ? -1 : Number(newsData[i].querySelector(".news-condition-decision-chapter-id").value);
        let decisionID = Number(newsData[i].querySelector(".news-condition-decision-id").value);
        let decisionValue = Number(newsData[i].querySelector(".news-condition-decision-value").value);

        let condition = {"isUsed":isUsed, "characteristicName":characteristicName, "characteristicValue":characteristicValue,
        "choiceChapterID":choiceChapterID, "choiceID":conditionChoiceID, "choiceValue":choiceValue, "decisionChapterID":decisionChapterID,
        "decisionID":decisionID, "decisionValue":decisionValue};

        let newsPaperType = Number(newsData[i].querySelector(".news-type").value);
        let headerText = newsData[i].querySelector(".news-header").value;
        let detailedText = newsData[i].querySelector(".news-detailed-text").value;
        let imageName = newsData[i].querySelector(".news-image-name").value;

        news[i] = {"condition":condition, "newsPaperType":newsPaperType, "headerText":headerText, "detailedText":detailedText, "imageName":imageName};
    }

    document.getElementById("generated-json-container").style.display = "block";
    document.getElementById("generated-json").innerHTML = JSON.stringify(news);
});