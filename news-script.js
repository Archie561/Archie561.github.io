const addNewsButton = document.querySelector(".add-news");
const addSceneButton = document.querySelector(".add-scene");
const generateNewsButton = document.querySelector("#generate-news");
const generateScenesButton = document.querySelector("#generate-scenes");

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
            <label for="news-condition-choice-id">ID вибору:</label>
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



addSceneButton.addEventListener("click", (event) => {
    event.preventDefault();

    let sceneContainer = document.createElement("form");
    sceneContainer.className = "scene-form";
    sceneContainer.action = "#";

    sceneContainer.innerHTML = `<button class="delete-scene-button">X</button>

    <div>
        <label for="scene-id">ID:</label>
        <input class="scene-id width-30" name="scene-id" type="number">
    </div>

    <div>
        <label for="scene-condition">Залежить від умов</label>
        <input class="scene-condition" name="scene-condition" type="checkbox">
    </div>
        
    <div class="scene-condition-wrapper">
        <div>
            <label for="scene-condition-characteristic">Характеристика:</label>
            <select class="scene-condition-characteristic" name="scene-condition-characteristic">
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
            <label for="scene-condition-characteristic-value">більша за</label>
            <input class="scene-condition-characteristic-value width-30" name="scene-condition-characteristic-value" type="number">
        </div>
        <div>
            <label for="scene-condition-choice-chapter-id">ID глави:</label>
            <input type="number" name="scene-condition-choice-chapter-id" class="scene-condition-choice-chapter-id width-30">
            <label for="scene-condition-choice-id">ID вибору:</label>
            <input type="number" name="scene-condition-choice-id" class="scene-condition-choice-id width-30">
            <label for="scene-condition-choice-value">знач.:</label>
            <input type="number" name="scene-condition-choice-value" class="scene-condition-choice-value width-30">
        </div>
        <div>
            <label for="scene-condition-decision-chapter-id">ID глави:</label>
            <input type="number" name="scene-condition-decision-chapter-id" class="scene-condition-decision-chapter-id width-30">
            <label for="scene-condition-decision-id">ID рішення:</label>
            <input type="number" name="scene-condition-decision-id" class="scene-condition-decision-id width-30">
            <label for="scene-condition-decision-value">знач.:</label>
            <input type="number" name="scene-condition-decision-value" class="scene-condition-decision-value width-30">
        </div>
    </div>

    <div>
        <label for="voice-file-name">Назва файлу озвучки:</label>
        <input type="text" name="voice-file-name" class="voice-file-name">
    </div>
        
    <div class="scene-frames-container">
        <button class="add-frame-button width-full">Додати кадр</button>
    </div>`;

    const parentElement = addSceneButton.parentNode;
    parentElement.insertBefore(sceneContainer, addSceneButton);


    const deleteSceneButton = sceneContainer.querySelector(".delete-scene-button");
    const sceneConditionCheckbox = sceneContainer.querySelector(".scene-condition");
    const addFrameButton = sceneContainer.querySelector(".add-frame-button");

    deleteSceneButton.addEventListener("click", (event) => {;
        event.preventDefault();
  
        let parentElement = deleteSceneButton.parentNode;
        parentElement.parentNode.removeChild(parentElement);
    });
  
    sceneConditionCheckbox.addEventListener('change', (event) => {
        event.preventDefault();
  
        if (event.currentTarget.checked) {
            sceneContainer.querySelector(".scene-condition-wrapper").style.display = "block";
        }
        else {
            sceneContainer.querySelector(".scene-condition-wrapper").style.display = "none";
        }
    });

    addFrameButton.addEventListener("click", (event) => {
        event.preventDefault();

        let frameContainer = document.createElement("div");
        frameContainer.className = "frame-container";

        frameContainer.innerHTML = `<button class="delete-frame-button">X</button>
        <div>
            <label for="background-image-name">Назва картинки:</label>
            <input type="text" name="background-image-name" class="background-image-name">
        </div>
        <div>
            <label for="frame-duration">Тривалість кадру (с):</label>
            <input class="frame-duration  width-50" name="frame-duration" type="number">
        </div>
        <div style="margin-bottom: 10px;">
            <label for="animation-type">Тип анімації:</label>
            <select class="animation-type" name="animation-type">
                <option value="1">Зближення</option>
                <option value="2">Віддалення</option>
            </select>
        </div>

        <div class="frame-characters-container">
            <button class="add-character-button width-full">Додати персонажа</button>
        </div>`;

        const parentElement = addFrameButton.parentNode;
        parentElement.insertBefore(frameContainer, addFrameButton);


        const deleteFrameButton = frameContainer.querySelector(".delete-frame-button");
        const addCharacterButton = frameContainer.querySelector(".add-character-button");

        deleteFrameButton.addEventListener("click", (event) => {;
          event.preventDefault();
    
          let parentElement = deleteFrameButton.parentNode;
          parentElement.parentNode.removeChild(parentElement);
        });
        
        addCharacterButton.addEventListener("click", (event) => {
          event.preventDefault();
        
          let characterContainer = document.createElement("div");
          characterContainer.className = "character-container";
        
          characterContainer.innerHTML = `<button class="delete-character-button">X</button>

          <div>
              <label for="character-image-name">Назва картинки:</label>
              <input type="text" name="character-image-name" class="character-image-name">
          </div>
          <div>
              <label for="character-duration">Тривалість персонажа (с):</label>
              <input class="character-duration  width-50" name="character-duration" type="number">
          </div>
          <div>
              <label for="character-position">Позиція персонажа:</label>
              <select class="character-position" name="character-position">
                  <option value="1">Справа</option>
                  <option value="2">Зліва</option>
              </select>
          </div>
          <div>
              <p class="paragraph-label">Субтитри:</p>
              <textarea rows="5" cols="88" name="character-subtitles" class="character-subtitles"></textarea>
          </div>`;
        
        const parentElement = addCharacterButton.parentNode;
        parentElement.insertBefore(characterContainer, addCharacterButton);



        const deleteCharacterButton = characterContainer.querySelector(".delete-character-button");

        deleteCharacterButton.addEventListener("click", (event) => {;
          event.preventDefault();
    
          let parentElement = deleteCharacterButton.parentNode;
          parentElement.parentNode.removeChild(parentElement);
        });
        });
        
    });

});

generateScenesButton.addEventListener("click", (event) => {
    event.preventDefault();
  
    let scenesData = document.getElementsByClassName("scene-form");
    let cutscenes = [];
  
    for (let i = 0; i < scenesData.length; i++) {
      let sceneID = Number(scenesData[i].querySelector(".scene-id").value);
  
      let isUsed = Boolean(scenesData[i].querySelector(".scene-condition").checked);
      let characteristicName = scenesData[i].querySelector(".scene-condition-characteristic").value;
      let characteristicValue = Number(scenesData[i].querySelector(".scene-condition-characteristic-value").value);
      let choiceChapterID = scenesData[i].querySelector(".scene-condition-choice-chapter-id").value == "" ? -1 : Number(scenesData[i].querySelector(".scene-condition-choice-chapter-id").value);
      let conditionChoiceID = Number(scenesData[i].querySelector(".scene-condition-choice-id").value);
      let choiceValue = Number(scenesData[i].querySelector(".scene-condition-choice-value").value);
      let decisionChapterID = scenesData[i].querySelector(".scene-condition-decision-chapter-id").value == "" ? -1 : Number(scenesData[i].querySelector(".scene-condition-decision-chapter-id").value);
      let decisionID = Number(scenesData[i].querySelector(".scene-condition-decision-id").value);
      let decisionValue = Number(scenesData[i].querySelector(".scene-condition-decision-value").value);
  
      let condition = {"isUsed":isUsed, "characteristicName":characteristicName, "characteristicValue":characteristicValue,
      "choiceChapterID":choiceChapterID, "choiceID":conditionChoiceID, "choiceValue":choiceValue, "decisionChapterID":decisionChapterID,
      "decisionID":decisionID, "decisionValue":decisionValue};

      let voiceFileName = scenesData[i].querySelector(".voice-file-name").value;
  
      let framesData = scenesData[i].getElementsByClassName("frame-container");
      let frameImageName = [];
      let frameDuration = [];
      let frameAnimationType = [];
  
      let frames = [];
  
      for (let j = 0; j < framesData.length; j++) {
        frameImageName[j] = framesData[j].querySelector(".background-image-name").value;
        frameDuration[j] = Number(framesData[j].querySelector(".frame-duration").value);
        frameAnimationType[j] = framesData[j].querySelector(".animation-type").value;
  

        let frameCharactersData = framesData[j].getElementsByClassName("character-container");

        let characterName = [];
        let characterDuration = [];
        let characterPosition = [];
        let characterSubtitles = [];

        for (let k = 0; k < frameCharactersData.length; k++) {
        characterName[k] = frameCharactersData[k].querySelector(".character-image-name").value;
        characterDuration[k] = Number(frameCharactersData[k].querySelector(".character-duration").value);
        characterPosition[k] = frameCharactersData[k].querySelector(".character-position").value;
        characterSubtitles[k] = frameCharactersData[k].querySelector(".character-subtitles").value;
        }

        frames.push({"backgroundImage":frameImageName[j], "frameDuration":frameDuration[j], "animationType":frameAnimationType[j],
        "characterNames":characterName, "characterDurations":characterDuration, "characterPositions":characterPosition, "characterSubtitles":characterSubtitles});
      }
  
      cutscenes[i] = {"sceneID":sceneID, "condition":condition, "voiceFileName":voiceFileName, "frames":frames};
    }

    document.getElementById("generated-scenes-json-container").style.display = "block";
    document.getElementById("generated-scenes-json").innerHTML = JSON.stringify(cutscenes);
});