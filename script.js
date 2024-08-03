const addDialogueButton = document.querySelector(".add-dialogue");
const addChoiceButton = document.querySelector(".add-choice");
const addDecisionButton = document.querySelector(".add-decision");
const addLawButton = document.querySelector(".add-law");

addDialogueButton.addEventListener("click", (event) => {
  event.preventDefault();

  let dialogueContainer = document.createElement("form");
  dialogueContainer.className = "dialogue-form";
  dialogueContainer.action = "#";

  dialogueContainer.innerHTML = `<button class="delete-dialogue-button">X</button>
  <div>
      <label for="dialogue-id">ID:</label>
      <input class="dialogue-id width-30" name="dialogue-id" type="number">
    </div>
    
    <div>
      <label for="dialogue-locked-by-decision">Заблоковано рішенням:</label>
      <input type="number" name="dialogue-locked-by-decision" class="dialogue-locked-by-decision width-30">
    </div>
    
    <div>
      <label for="dialogue-locked-by-law">Заблоковано законом:</label>
      <input type="number" name="dialogue-locked-by-law" class="dialogue-locked-by-law width-30">
    </div>
    
    <div>
      <label for="dialogue-condition">Залежить від умов</label>
      <input class="dialogue-condition" name="dialogue-condition" type="checkbox">
    </div>
    
    <div class="dialogue-condition-wrapper">
      <div>
          <label for="dialogue-condition-characteristic">Хар.:</label>
          <select class="dialogue-condition-characteristic" name="dialogue-condition-characteristic">
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
          <label for="dialogue-condition-characteristic-value">більша за</label>
          <input class="dialogue-condition-characteristic-value width-30" name="dialogue-condition-characteristic-value" type="number">
      </div>
      <div>
          <label for="dialogue-condition-choice-chapter-id">ID глави:</label>
          <input type="number" name="dialogue-condition-choice-chapter-id" class="dialogue-condition-choice-chapter-id width-30">
          <label for="dialogue-condition-choice-id">ID вибору:</label>
          <input type="number" name="dialogue-condition-choice-id" class="dialogue-condition-choice-id width-30">
          <label for="dialogue-condition-choice-value">знач.:</label>
          <input type="number" name="dialogue-condition-choice-value" class="dialogue-condition-choice-value width-30">
      </div>
      <div>
          <label for="dialogue-condition-decision-chapter-id">ID глави:</label>
          <input type="number" name="dialogue-condition-decision-chapter-id" class="dialogue-condition-decision-chapter-id width-30">
          <label for="dialogue-condition-decision-id">ID рішення:</label>
          <input type="number" name="dialogue-condition-decision-id" class="dialogue-condition-decision-id width-30">
          <label for="dialogue-condition-decision-value">знач.:</label>
          <input type="number" name="dialogue-condition-decision-value" class="dialogue-condition-decision-value width-30">
      </div>
    </div>
    
    <div class="dialogue-replicas-container">
      <button class="add-replica-button">Додати репліку</button>
    </div>`;

    const parentElement = addDialogueButton.parentNode;
    parentElement.insertBefore(dialogueContainer, addDialogueButton);


    const deleteDialogueButton = dialogueContainer.querySelector(".delete-dialogue-button");
    const dialogueConditionCheckbox = dialogueContainer.querySelector(".dialogue-condition");
    const addReplicaButton = dialogueContainer.querySelector(".add-replica-button");

    deleteDialogueButton.addEventListener("click", (event) => {;
      event.preventDefault();

      let parentElement = deleteDialogueButton.parentNode;
      parentElement.parentNode.removeChild(parentElement);
    });

    dialogueConditionCheckbox.addEventListener('change', (event) => {
      event.preventDefault();

    if (event.currentTarget.checked) {
      dialogueContainer.querySelector(".dialogue-condition-wrapper").style.display = "block";
    }
    else {
      dialogueContainer.querySelector(".dialogue-condition-wrapper").style.display = "none";
    }
    });

    addReplicaButton.addEventListener("click", (event) => {
        event.preventDefault();

        let replicaContainer = document.createElement("div");
        replicaContainer.className = "dialogue-replica-container";

        replicaContainer.innerHTML = `<button class="delete-replica-button">X</button>
        <div>
            <label for="dialogue-image-name">Назва картинки:</label>
            <input type="text" name="dialogue-image-name" class="dialogue-image-name">
        </div>
        <div>
            <label for="dialogue-character-name">Ім'я персонажа:</label>
            <input type="text" name="dialogue-character-name" class="dialogue-character-name">
        </div>
        <div>
            <p class="paragraph-label">Репліка:</p>
            <textarea rows="5" cols="38" name="dialogue-replica" class="dialogue-replica"></textarea>
        </div>
        <div>
            <label for="dialogue-replica-display-choice">Показати вибір</label>
            <input type="checkbox" name="dialogue-replica-display-choice" class="dialogue-replica-display-choice">
        </div>
    
        <div class="display-choice-wrapper">
            <div>
                <label for="dialogue-replica-choice-id">ID вибору:</label>
                <input type="number" name="dialogue-replica-choice-id" class="dialogue-replica-choice-id width-30">
            </div>
    
            <div class="display-choice-subdialogue-wrapper">
                <div class="subdialogue-1-container">
                    <p class="if-choice-label" align="center">Якщо вибір 1</p>
    
                    <div>
                        <label for="add-subreplica1-button"></label>
                        <button name="add-subreplica1-button" class="add-subreplica1-button">Додати підрепліку</button>
                    </div>
                </div>
    
                <div class="subdialogue-2-container">
                    <p class="if-choice-label" align="center">Якщо вибір 2</p>
    
                    <div>
                        <label for="add-subreplica2-button"></label>
                        <button name="add-subreplica2-button" class="add-subreplica2-button">Додати підрепліку</button>
                    </div>
                </div>
            </div>
        </div>`;

        const parentElement = addReplicaButton.parentNode;
        parentElement.insertBefore(replicaContainer, addReplicaButton);


        const deleteReplicaButton = replicaContainer.querySelector(".delete-replica-button");
        const dialogueDisplayChoiceCheckbox = replicaContainer.querySelector(".dialogue-replica-display-choice");
        const addSubreplica1Button = replicaContainer.querySelector(".add-subreplica1-button");
        const addSubreplica2Button = replicaContainer.querySelector(".add-subreplica2-button");

        deleteReplicaButton.addEventListener("click", (event) => {;
          event.preventDefault();
    
          let parentElement = deleteReplicaButton.parentNode;
          parentElement.parentNode.removeChild(parentElement);
        });

        dialogueDisplayChoiceCheckbox.addEventListener('change', (event) => {
          event.preventDefault();
        
        if (event.currentTarget.checked) {
          replicaContainer.querySelector(".display-choice-wrapper").style.display = "block";
        }
        else {
          replicaContainer.querySelector(".display-choice-wrapper").style.display = "none";
        }
        });
        
        addSubreplica1Button.addEventListener("click", (event) => {
          event.preventDefault();
        
          let subreplicaContainer = document.createElement("div");
          subreplicaContainer.className = "subdialogue-option-1";
        
          subreplicaContainer.innerHTML = `<button class="delete-subreplica1-button">X</button>
        <div>
          <p>Назва картинки:</p>
          <input type="text" name="subdialogue1-image-name" class="subdialogue1-image-name">
        </div>
        <div>
          <p>Ім'я персонажа:</p>
          <input type="text" name="subdialogue1-character-name" class="subdialogue1-character-name">
        </div>
        <div>
          <p>Репліка:</p>
          <textarea rows="5" cols="15" name="subdialogue1-replica" class="subdialogue1-replica"></textarea>
        </div>`;
        
        const parentElement = addSubreplica1Button.parentNode;
        parentElement.insertBefore(subreplicaContainer, addSubreplica1Button);



        const deleteSubeplica1Button = subreplicaContainer.querySelector(".delete-subreplica1-button");

        deleteSubeplica1Button.addEventListener("click", (event) => {;
          event.preventDefault();
    
          let parentElement = deleteSubeplica1Button.parentNode;
          parentElement.parentNode.removeChild(parentElement);
        });
        });
        
        addSubreplica2Button.addEventListener("click", (event) => {
          event.preventDefault();
        
          let subreplicaContainer = document.createElement("div");
          subreplicaContainer.className = "subdialogue-option-2";
        
          subreplicaContainer.innerHTML = `<button class="delete-subreplica2-button">X</button>
        <div>
          <p>Назва картинки:</p>
          <input type="text" name="subdialogue2-image-name" class="subdialogue2-image-name">
        </div>
        <div>
          <p>Ім'я персонажа:</p>
          <input type="text" name="subdialogue2-character-name" class="subdialogue2-character-name">
        </div>
        <div>
          <p>Репліка:</p>
          <textarea rows="5" cols="15" name="subdialogue2-replica" class="subdialogue2-replica"></textarea>
        </div>`;
        
        const parentElement = addSubreplica2Button.parentNode;
        parentElement.insertBefore(subreplicaContainer, addSubreplica2Button);



        const deleteSubeplica2Button = subreplicaContainer.querySelector(".delete-subreplica2-button");

        deleteSubeplica2Button.addEventListener("click", (event) => {;
          event.preventDefault();
    
          let parentElement = deleteSubeplica2Button.parentNode;
          parentElement.parentNode.removeChild(parentElement);
        });
        });
    }); 
});


addChoiceButton.addEventListener("click", (event) => {
  event.preventDefault();

  let choiceContainer = document.createElement("form");
  choiceContainer.className = "choice-form";
  choiceContainer.action = "#";

  choiceContainer.innerHTML = `<button class="delete-choice-button">X</button>
            
  <div>
      <label for="choice-id">ID:</label>
      <input class="choice-id width-30" name="choice-id" type="number">
  </div>
  <div>
      <p class="paragraph-label">Вибір 1:</p>
      <textarea rows="5" cols="43" name="choice-option-1" class="choice-option-1"></textarea>
  </div>
  <div>
      <p class="paragraph-label">Вибір 2:</p>
      <textarea rows="5" cols="43" name="choice-option-2" class="choice-option-2"></textarea>
  </div>

  <div class="characteristic-update-wrapper">
      <div class="characteristic-update-1-container">
          <p class="if-choice-label" align="center">Якщо вибір 1</p>

          <div>
              <label for="budget1">Бюджет</label>
              <input type="number" name="budget1" class="budget1 width-50" value="0">
          </div>
          <div>
              <label for="navy1">Флот</label>
              <input type="number" name="navy1" class="navy1 width-50" value="0">
          </div>
          <div>
              <label for="airForces1">Повітряні сили</label>
              <input type="number" name="airForces1" class="airForces1 width-50" value="0">
          </div>
          <div>
              <label for="infantry1">Піхота</label>
              <input type="number" name="infantry1" class="infantry1 width-50" value="0">
          </div>
          <div>
              <label for="machinery1">Техніка</label>
              <input type="number" name="machinery1" class="machinery1 width-50" value="0">
          </div>
          <div>
              <label for="europeanUnion1">ЄС</label>
              <input type="number" name="europeanUnion1" class="europeanUnion1 width-50" value="0">
          </div>
          <div>
              <label for="china1">Китай</label>
              <input type="number" name="china1" class="china1 width-50" value="0">
          </div>
          <div>
              <label for="africa1">Африка</label>
              <input type="number" name="africa1" class="africa1 width-50" value="0">
          </div>
          <div>
              <label for="unitedKingdom1">Велика Британія</label>
              <input type="number" name="unitedKingdom1" class="unitedKingdom1 width-50" value="0">
          </div>
          <div>
              <label for="CIS1">СНД</label>
              <input type="number" name="CIS1" class="CIS1 width-50" value="0">
          </div>
          <div>
              <label for="OPEC1">ОПЕК</label>
              <input type="number" name="OPEC1" class="OPEC1 width-50" value="0">
          </div>
          <div>
              <label for="science1">Наука</label>
              <input type="number" name="science1" class="science1 width-50" value="0">
          </div>
          <div>
              <label for="welfare1">Добробут</label>
              <input type="number" name="welfare1" class="welfare1 width-50" value="0">
          </div>
          <div>
              <label for="education1">Освіта</label>
              <input type="number" name="education1" class="education1 width-50" value="0">
          </div>
          <div>
              <label for="medicine1">Медицина</label>
              <input type="number" name="medicine1" class="medicine1 width-50" value="0">
          </div>
          <div>
              <label for="ecology1">Екологія</label>
              <input type="number" name="ecology1" class="ecology1 width-50" value="0">
          </div>
          <div>
              <label for="infrastructure1">Інфраструктура</label>
              <input type="number" name="infrastructure1" class="infrastructure1 width-50" value="0">
          </div>

      </div>

      <div class="characteristic-update-2-container">
          <p class="if-choice-label" align="center">Якщо вибір 2</p>

          <div>
              <label for="budget2">Бюджет</label>
              <input type="number" name="budget2" class="budget2 width-50" value="0">
          </div>
          <div>
              <label for="navy2">Флот</label>
              <input type="number" name="navy2" class="navy2 width-50" value="0">
          </div>
          <div>
              <label for="airForces2">Повітряні сили</label>
              <input type="number" name="airForces2" class="airForces2 width-50" value="0">
          </div>
          <div>
              <label for="infantry2">Піхота</label>
              <input type="number" name="infantry2" class="infantry2 width-50" value="0">
          </div>
          <div>
              <label for="machinery2">Техніка</label>
              <input type="number" name="machinery2" class="machinery2 width-50" value="0">
          </div>
          <div>
              <label for="europeanUnion2">ЄС</label>
              <input type="number" name="europeanUnion2" class="europeanUnion2 width-50" value="0">
          </div>
          <div>
              <label for="china2">Китай</label>
              <input type="number" name="china2" class="china2 width-50" value="0">
          </div>
          <div>
              <label for="africa2">Африка</label>
              <input type="number" name="africa2" class="africa2 width-50" value="0">
          </div>
          <div>
              <label for="unitedKingdom2">Велика Британія</label>
              <input type="number" name="unitedKingdom2" class="unitedKingdom2 width-50" value="0">
          </div>
          <div>
              <label for="CIS2">СНД</label>
              <input type="number" name="CIS2" class="CIS2 width-50" value="0">
          </div>
          <div>
              <label for="OPEC2">ОПЕК</label>
              <input type="number" name="OPEC2" class="OPEC2 width-50" value="0">
          </div>
          <div>
              <label for="science2">Наука</label>
              <input type="number" name="science2" class="science2 width-50" value="0">
          </div>
          <div>
              <label for="welfare2">Добробут</label>
              <input type="number" name="welfare2" class="welfare2 width-50" value="0">
          </div>
          <div>
              <label for="education2">Освіта</label>
              <input type="number" name="education2" class="education2 width-50" value="0">
          </div>
          <div>
              <label for="medicine2">Медицина</label>
              <input type="number" name="medicine2" class="medicine2 width-50" value="0">
          </div>
          <div>
              <label for="ecology2">Екологія</label>
              <input type="number" name="ecology2" class="ecology2 width-50" value="0">
          </div>
          <div>
              <label for="infrastructure2">Інфраструктура</label>
              <input type="number" name="infrastructure2" class="infrastructure2 width-50" value="0">
          </div>

      </div>
  </div>`;

    const parentElement = addChoiceButton.parentNode;
    parentElement.insertBefore(choiceContainer, addChoiceButton);

    const deleteChoiceButton = choiceContainer.querySelector(".delete-choice-button");

    deleteChoiceButton.addEventListener("click", (event) => {;
      event.preventDefault();

      let parentElement = deleteChoiceButton.parentNode;
      parentElement.parentNode.removeChild(parentElement);
    });
})


addDecisionButton.addEventListener("click", (event) => {
  event.preventDefault();

  let decisionContainer = document.createElement("form");
  decisionContainer.className = "decision-form";
  decisionContainer.action = "#";

  decisionContainer.innerHTML = `<button class="delete-decision-button">X</button>
  <div>
      <label for="decision-id">ID:</label>
      <input class="decision-id width-30" name="decision-id" type="number">
  </div>
      
  <div>
      <label for="decision-locked-by-dialogue">Заблоковано діалогом:</label>
      <input type="number" name="decision-locked-by-dialogue" class="decision-locked-by-dialogue width-30">
  </div>
      
  <div>
      <label for="decision-locked-by-law">Заблоковано законом:</label>
      <input type="number" name="decision-locked-by-law" class="decision-locked-by-law width-30">
  </div>
      
  <div>
      <label for="decision-condition">Залежить від умов</label>
      <input class="decision-condition" name="decision-condition" type="checkbox">
  </div>


  <div class="decision-condition-wrapper">
      <div>
          <label for="decision-condition-characteristic">Хар.:</label>
          <select class="decision-condition-characteristic" name="decision-condition-characteristic">
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
          <label for="decision-condition-characteristic-value">більша за</label>
          <input class="decision-condition-characteristic-value width-30" name="decision-condition-characteristic-value" type="number">
      </div>
      <div>
          <label for="decision-condition-choice-chapter-id">ID глави:</label>
          <input type="number" name="decision-condition-choice-chapter-id" class="decision-condition-choice-chapter-id width-30">
          <label for="decision-condition-choice-id">ID вибору:</label>
          <input type="number" name="decision-condition-choice-id" class="decision-condition-choice-id width-30">
          <label for="decision-condition-choice-value">знач.:</label>
          <input type="number" name="decision-condition-choice-value" class="decision-condition-choice-value width-30">
      </div>
      <div>
          <label for="decision-condition-decision-chapter-id">ID глави:</label>
          <input type="number" name="decision-condition-decision-chapter-id" class="decision-condition-decision-chapter-id width-30">
          <label for="decision-condition-decision-id">ID рішення:</label>
          <input type="number" name="decision-condition-decision-id" class="decision-condition-decision-id width-30">
          <label for="decision-condition-decision-value">знач.:</label>
          <input type="number" name="decision-condition-decision-value" class="decision-condition-decision-value width-30">
      </div>
  </div>

  <div>
      <label for="decision-image-name">Назва картинки:</label>
      <input type="text" name="decision-image-name" class="decision-image-name">
  </div>
  <div>
      <label for="decision-character-name">Ім'я персонажа:</label>
      <input type="text" name="decision-character-name" class="decision-character-name">
  </div>
  <div>
      <p class="paragraph-label">Текст:</p>
      <textarea rows="5" cols="43" name="decision-text" class="decision-text"></textarea>
  </div>
  <div class="decision-options-container">
      <button class="add-option-button">Додати варіант рішення</button>
  </div>`;

  const parentElement = addDecisionButton.parentNode;
  parentElement.insertBefore(decisionContainer, addDecisionButton);



  const deleteDecisionButton = decisionContainer.querySelector(".delete-decision-button");
  const decisionConditionCheckbox = decisionContainer.querySelector(".decision-condition");
  const addOptionButton = decisionContainer.querySelector(".add-option-button");

  deleteDecisionButton.addEventListener("click", (event) => {;
    event.preventDefault();

    let parentElement = deleteDecisionButton.parentNode;
    parentElement.parentNode.removeChild(parentElement);
  });

  decisionConditionCheckbox.addEventListener('change', (event) => {
    event.preventDefault();

  if (event.currentTarget.checked) {
    decisionContainer.querySelector(".decision-condition-wrapper").style.display = "block";
  }
  else {
    decisionContainer.querySelector(".decision-condition-wrapper").style.display = "none";
  }
  });

  addOptionButton.addEventListener("click", (event) => {
    event.preventDefault();

    let decisionOptionContainer = document.createElement("div");
    decisionOptionContainer.className = "decision-option-container";

    decisionOptionContainer.innerHTML = `<button class="delete-option-button">X</button>

    <div>
        <label for="decision-option-text">Рішення:</label>
        <input type="text" name="decision-option-text" class="decision-option-text">
    </div>
    <p align="center" class="if-choice-label">Характеристики</p>
    <div class="characteristics-container">
        <div class="characteristics-1">

            <div>
                <label for="budget">Бюджет</label>
                <input type="number" name="budget" class="budget width-50" value="0">
            </div>
            <div>
                <label for="navy">Флот</label>
                <input type="number" name="navy" class="navy width-50" value="0">
            </div>
            <div>
                <label for="airForces">Повітряні сили</label>
                <input type="number" name="airForces" class="airForces width-50" value="0">
            </div>
            <div>
                <label for="infantry">Піхота</label>
                <input type="number" name="infantry" class="infantry width-50" value="0">
            </div>
            <div>
                <label for="machinery">Техніка</label>
                <input type="number" name="machinery" class="machinery width-50" value="0">
            </div>
            <div>
                <label for="europeanUnion">ЄС</label>
                <input type="number" name="europeanUnion" class="europeanUnion width-50" value="0">
            </div>
            <div>
                <label for="china">Китай</label>
                <input type="number" name="china" class="china width-50" value="0">
            </div>
            <div>
                <label for="africa">Африка</label>
                <input type="number" name="africa" class="africa width-50" value="0">
            </div>

        </div>
        <div class="characteristics-2">

            <div>
                <label for="unitedKingdom">Велика Британія</label>
                <input type="number" name="unitedKingdom" class="unitedKingdom width-50" value="0">
            </div>
            <div>
                <label for="CIS">СНД</label>
                <input type="number" name="CIS" class="CIS width-50" value="0">
            </div>
            <div>
                <label for="OPEC">ОПЕК</label>
                <input type="number" name="OPEC" class="OPEC width-50" value="0">
            </div>
            <div>
                <label for="science">Наука</label>
                <input type="number" name="science" class="science width-50" value="0">
            </div>
            <div>
                <label for="welfare">Добробут</label>
                <input type="number" name="welfare" class="welfare width-50" value="0">
            </div>
            <div>
                <label for="education">Освіта</label>
                <input type="number" name="education" class="education width-50" value="0">
            </div>
            <div>
                <label for="medicine">Медицина</label>
                <input type="number" name="medicine" class="medicine width-50" value="0">
            </div>
            <div>
                <label for="ecology">Екологія</label>
                <input type="number" name="ecology" class="ecology width-50" value="0">
            </div>
            <div>
                <label for="infrastructure">Інфраструктура</label>
                <input type="number" name="infrastructure" class="infrastructure width-50" value="0">
            </div>

        </div>

    </div>`;

    const parentElement = addOptionButton.parentNode;
    parentElement.insertBefore(decisionOptionContainer, addOptionButton);



    const deleteOptionButton = decisionOptionContainer.querySelector(".delete-option-button");

    deleteOptionButton.addEventListener("click", (event) => {;
      event.preventDefault();

      let parentElement = deleteOptionButton.parentNode;
      parentElement.parentNode.removeChild(parentElement);
    });

  });

});



addLawButton.addEventListener("click", (event) => {
  event.preventDefault();

  let lawContainer = document.createElement("form");
  lawContainer.className = "law-form";
  lawContainer.action = "#";

  lawContainer.innerHTML = `<button class="delete-law-button">X</button>
            
  <div>
      <label for="law-id">ID:</label>
      <input class="law-id width-30" name="law-id" type="number">
  </div>
  <div>
      <label for="law-locked-by-decision">Заблоковано рішенням:</label>
      <input type="number" name="law-locked-by-decision" class="law-locked-by-decision width-30">
  </div>
  <div>
      <label for="law-locked-by-dialogue">Заблоковано діалогом:</label>
      <input type="number" name="law-locked-by-dialogue" class="law-locked-by-dialogue width-30">
  </div>
  <div>
      <label for="law-blank-type">Тип бланку:</label>
      <input type="number" name="law-blank-type" class="law-blank-type width-30">
  </div>
  <div>
      <label for="law-header">Заголовок:</label>
      <input type="text" name="law-header" class="law-header">
  </div>
  <div>
      <p class="paragraph-label">Основний текс:</p>
      <textarea rows="5" cols="43" name="law-main-text" class="law-main-text"></textarea>
  </div>
  <div>
      <p class="paragraph-label">Детальний опис:</p>
      <textarea rows="5" cols="43" name="law-detailed-text" class="law-detailed-text"></textarea>
  </div>
  <div>
      <p class="paragraph-label">Підпис (опціонально):</p>
      <textarea rows="5" cols="43" name="law-sign-text" class="law-sign-text"></textarea>
  </div>

  <div class="characteristic-update-wrapper">
      <div class="characteristic-update-1-container">
          <p class="if-choice-label" align="center">Якщо прийнято</p>

          <div>
              <label for="budget1">Бюджет</label>
              <input type="number" name="budget1" class="budget1 width-50" value="0">
          </div>
          <div>
              <label for="navy1">Флот</label>
              <input type="number" name="navy1" class="navy1 width-50" value="0">
          </div>
          <div>
              <label for="airForces1">Повітряні сили</label>
              <input type="number" name="airForces1" class="airForces1 width-50" value="0">
          </div>
          <div>
              <label for="infantry1">Піхота</label>
              <input type="number" name="infantry1" class="infantry1 width-50" value="0">
          </div>
          <div>
              <label for="machinery1">Техніка</label>
              <input type="number" name="machinery1" class="machinery1 width-50" value="0">
          </div>
          <div>
              <label for="europeanUnion1">ЄС</label>
              <input type="number" name="europeanUnion1" class="europeanUnion1 width-50" value="0">
          </div>
          <div>
              <label for="china1">Китай</label>
              <input type="number" name="china1" class="china1 width-50" value="0">
          </div>
          <div>
              <label for="africa1">Африка</label>
              <input type="number" name="africa1" class="africa1 width-50" value="0">
          </div>
          <div>
              <label for="unitedKingdom1">Велика Британія</label>
              <input type="number" name="unitedKingdom1" class="unitedKingdom1 width-50" value="0">
          </div>
          <div>
              <label for="CIS1">СНД</label>
              <input type="number" name="CIS1" class="CIS1 width-50" value="0">
          </div>
          <div>
              <label for="OPEC1">ОПЕК</label>
              <input type="number" name="OPEC1" class="OPEC1 width-50" value="0">
          </div>
          <div>
              <label for="science1">Наука</label>
              <input type="number" name="science1" class="science1 width-50" value="0">
          </div>
          <div>
              <label for="welfare1">Добробут</label>
              <input type="number" name="welfare1" class="welfare1 width-50" value="0">
          </div>
          <div>
              <label for="education1">Освіта</label>
              <input type="number" name="education1" class="education1 width-50" value="0">
          </div>
          <div>
              <label for="medicine1">Медицина</label>
              <input type="number" name="medicine1" class="medicine1 width-50" value="0">
          </div>
          <div>
              <label for="ecology1">Екологія</label>
              <input type="number" name="ecology1" class="ecology1 width-50" value="0">
          </div>
          <div>
              <label for="infrastructure1">Інфраструктура</label>
              <input type="number" name="infrastructure1" class="infrastructure1 width-50" value="0">
          </div>

      </div>

      <div class="characteristic-update-2-container">
          <p class="if-choice-label" align="center">Якщо відхилено</p>

          <div>
              <label for="budget2">Бюджет</label>
              <input type="number" name="budget2" class="budget2 width-50" value="0">
          </div>
          <div>
              <label for="navy2">Флот</label>
              <input type="number" name="navy2" class="navy2 width-50" value="0">
          </div>
          <div>
              <label for="airForces2">Повітряні сили</label>
              <input type="number" name="airForces2" class="airForces2 width-50" value="0">
          </div>
          <div>
              <label for="infantry2">Піхота</label>
              <input type="number" name="infantry2" class="infantry2 width-50" value="0">
          </div>
          <div>
              <label for="machinery2">Техніка</label>
              <input type="number" name="machinery2" class="machinery2 width-50" value="0">
          </div>
          <div>
              <label for="europeanUnion2">ЄС</label>
              <input type="number" name="europeanUnion2" class="europeanUnion2 width-50" value="0">
          </div>
          <div>
              <label for="china2">Китай</label>
              <input type="number" name="china2" class="china2 width-50" value="0">
          </div>
          <div>
              <label for="africa2">Африка</label>
              <input type="number" name="africa2" class="africa2 width-50" value="0">
          </div>
          <div>
              <label for="unitedKingdom2">Велика Британія</label>
              <input type="number" name="unitedKingdom2" class="unitedKingdom2 width-50" value="0">
          </div>
          <div>
              <label for="CIS2">СНД</label>
              <input type="number" name="CIS2" class="CIS2 width-50" value="0">
          </div>
          <div>
              <label for="OPEC2">ОПЕК</label>
              <input type="number" name="OPEC2" class="OPEC2 width-50" value="0">
          </div>
          <div>
              <label for="science2">Наука</label>
              <input type="number" name="science2" class="science2 width-50" value="0">
          </div>
          <div>
              <label for="welfare2">Добробут</label>
              <input type="number" name="welfare2" class="welfare2 width-50" value="0">
          </div>
          <div>
              <label for="education2">Освіта</label>
              <input type="number" name="education2" class="education2 width-50" value="0">
          </div>
          <div>
              <label for="medicine2">Медицина</label>
              <input type="number" name="medicine2" class="medicine2 width-50" value="0">
          </div>
          <div>
              <label for="ecology2">Екологія</label>
              <input type="number" name="ecology2" class="ecology2 width-50" value="0">
          </div>
          <div>
              <label for="infrastructure2">Інфраструктура</label>
              <input type="number" name="infrastructure2" class="infrastructure2 width-50" value="0">
          </div>

      </div>
  </div>`;

  const parentElement = addLawButton.parentNode;
  parentElement.insertBefore(lawContainer, addLawButton);

  const deleteLawButton = lawContainer.querySelector(".delete-law-button");

  deleteLawButton.addEventListener("click", (event) => {;
    event.preventDefault();

    let parentElement = deleteLawButton.parentNode;
    parentElement.parentNode.removeChild(parentElement);
  });
});


const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", (event) => {
  event.preventDefault();

  let dialoguesData = document.getElementsByClassName("dialogue-form");
  let dialogues = [];

  for (let i = 0; i < dialoguesData.length; i++) {
    let dialogueID = Number(dialoguesData[i].querySelector(".dialogue-id").value);

    let lockedByDecision = dialoguesData[i].querySelector(".dialogue-locked-by-decision").value == "" ? -1 : Number(dialoguesData[i].querySelector(".dialogue-locked-by-decision").value);
    let lockedByLaw = dialoguesData[i].querySelector(".dialogue-locked-by-law").value == "" ? -1 : Number(dialoguesData[i].querySelector(".dialogue-locked-by-law").value);

    let isUsed = Boolean(dialoguesData[i].querySelector(".dialogue-condition").checked);
    let characteristicName = dialoguesData[i].querySelector(".dialogue-condition-characteristic").value;
    let characteristicValue = Number(dialoguesData[i].querySelector(".dialogue-condition-characteristic-value").value);
    let choiceChapterID = dialoguesData[i].querySelector(".dialogue-condition-choice-chapter-id").value == "" ? -1 : Number(dialoguesData[i].querySelector(".dialogue-condition-choice-chapter-id").value);
    let conditionChoiceID = Number(dialoguesData[i].querySelector(".dialogue-condition-choice-id").value);
    let choiceValue = Number(dialoguesData[i].querySelector(".dialogue-condition-choice-value").value);
    let decisionChapterID = dialoguesData[i].querySelector(".dialogue-condition-decision-chapter-id").value == "" ? -1 : Number(dialoguesData[i].querySelector(".dialogue-condition-decision-chapter-id").value);
    let decisionID = Number(dialoguesData[i].querySelector(".dialogue-condition-decision-id").value);
    let decisionValue = Number(dialoguesData[i].querySelector(".dialogue-condition-decision-value").value);

    let condition = {"isUsed":isUsed, "characteristicName":characteristicName, "characteristicValue":characteristicValue,
    "choiceChapterID":choiceChapterID, "choiceID":conditionChoiceID, "choiceValue":choiceValue, "decisionChapterID":decisionChapterID,
    "decisionID":decisionID, "decisionValue":decisionValue};
    
    let replicasData = dialoguesData[i].getElementsByClassName("dialogue-replica-container");
    let replicas = [];

    for (let j = 0; j < replicasData.length; j++) {
        let imageName = replicasData[j].querySelector(".dialogue-image-name").value;
        let characterName = replicasData[j].querySelector(".dialogue-character-name").value;
        let replicaText = replicasData[j].querySelector(".dialogue-replica").value;
        let choiceID = Boolean(replicasData[j].querySelector(".dialogue-replica-display-choice").checked) ? Number(replicasData[j].querySelector(".dialogue-replica-choice-id").value) : -1;

        let subreplicas1Data = replicasData[j].getElementsByClassName("subdialogue-option-1");
        let subreplicas2Data = replicasData[j].getElementsByClassName("subdialogue-option-2");

        let subreplicas1 = [];
        let subreplicas2 = [];

        for (let k = 0; k < subreplicas1Data.length; k++) {
            let subImageName1 = subreplicas1Data[k].querySelector(".subdialogue1-image-name").value;
            let subCharacterName1 = subreplicas1Data[k].querySelector(".subdialogue1-character-name").value;
            let subreplica1Text = subreplicas1Data[k].querySelector(".subdialogue1-replica").value;

            subreplicas1.push({"imageName":subImageName1, "characterName":subCharacterName1, "subReplicaText":subreplica1Text});
        }

        for (let k = 0; k < subreplicas2Data.length; k++) {
            let subImageName2 = subreplicas2Data[k].querySelector(".subdialogue2-image-name").value;
            let subCharacterName2 = subreplicas2Data[k].querySelector(".subdialogue2-character-name").value;
            let subreplica2Text = subreplicas2Data[k].querySelector(".subdialogue2-replica").value;

            subreplicas2.push({"imageName":subImageName2, "characterName":subCharacterName2, "subReplicaText":subreplica2Text});
        }

        replicas.push({"imageName":imageName, "characterName":characterName, "replicaText":replicaText, "choiceID":choiceID, "subreplicasOption1":subreplicas1, "subreplicasOption2":subreplicas2});
    }

    dialogues[i] = {"dialogueID":dialogueID, "lockedByDecision":lockedByDecision, "lockedByLaw":lockedByLaw,
    "condition":condition, "backgroundImageName":"background01", "replicas":replicas};
  }



  let choicesData = document.getElementsByClassName("choice-form");
  let choices = [];

  for (let i = 0; i < choicesData.length; i++) {
    let choiceID = Number(choicesData[i].querySelector(".choice-id").value);

    let option1 = choicesData[i].querySelector(".choice-option-1").value;
    let option2 = choicesData[i].querySelector(".choice-option-2").value;

    let budget1 = Number(choicesData[i].querySelector(".budget1").value);
    let navy1 = Number(choicesData[i].querySelector(".navy1").value);
    let airForces1 = Number(choicesData[i].querySelector(".airForces1").value);
    let infantry1 = Number(choicesData[i].querySelector(".infantry1").value);
    let machinery1 = Number(choicesData[i].querySelector(".machinery1").value);
    let europeanUnion1 = Number(choicesData[i].querySelector(".europeanUnion1").value);
    let china1 = Number(choicesData[i].querySelector(".china1").value);
    let africa1 = Number(choicesData[i].querySelector(".africa1").value);
    let unitedKingdom1 = Number(choicesData[i].querySelector(".unitedKingdom1").value);
    let CIS1 = Number(choicesData[i].querySelector(".CIS1").value);
    let OPEC1 = Number(choicesData[i].querySelector(".OPEC1").value);
    let science1 = Number(choicesData[i].querySelector(".science1").value);
    let welfare1 = Number(choicesData[i].querySelector(".welfare1").value);
    let education1 = Number(choicesData[i].querySelector(".education1").value);
    let medicine1 = Number(choicesData[i].querySelector(".medicine1").value);
    let ecology1 = Number(choicesData[i].querySelector(".ecology1").value);
    let infrastructure1 = Number(choicesData[i].querySelector(".infrastructure1").value);

    let characteristicsUpdateOption1 = {"budget":budget1, "navy":navy1, "airForces":airForces1, "infantry":infantry1, "machinery":machinery1,
    "europeanUnion":europeanUnion1, "china":china1, "africa":africa1, "unitedKingdom":unitedKingdom1, "CIS":CIS1, "OPEC":OPEC1,
    "science":science1, "welfare":welfare1, "education":education1, "medicine":medicine1, "ecology":ecology1, "infrastructure":infrastructure1};

    let budget2 = Number(choicesData[i].querySelector(".budget2").value);
    let navy2 = Number(choicesData[i].querySelector(".navy2").value);
    let airForces2 = Number(choicesData[i].querySelector(".airForces2").value);
    let infantry2 = Number(choicesData[i].querySelector(".infantry2").value);
    let machinery2 = Number(choicesData[i].querySelector(".machinery2").value);
    let europeanUnion2 = Number(choicesData[i].querySelector(".europeanUnion2").value);
    let china2 = Number(choicesData[i].querySelector(".china2").value);
    let africa2 = Number(choicesData[i].querySelector(".africa2").value);
    let unitedKingdom2 = Number(choicesData[i].querySelector(".unitedKingdom2").value);
    let CIS2 = Number(choicesData[i].querySelector(".CIS2").value);
    let OPEC2 = Number(choicesData[i].querySelector(".OPEC2").value);
    let science2 = Number(choicesData[i].querySelector(".science2").value);
    let welfare2 = Number(choicesData[i].querySelector(".welfare2").value);
    let education2 = Number(choicesData[i].querySelector(".education2").value);
    let medicine2 = Number(choicesData[i].querySelector(".medicine2").value);
    let ecology2 = Number(choicesData[i].querySelector(".ecology2").value);
    let infrastructure2 = Number(choicesData[i].querySelector(".infrastructure2").value);

    let characteristicsUpdateOption2 = {"budget":budget2, "navy":navy2, "airForces":airForces2, "infantry":infantry2, "machinery":machinery2,
    "europeanUnion":europeanUnion2, "china":china2, "africa":africa2, "unitedKingdom":unitedKingdom2, "CIS":CIS2, "OPEC":OPEC2,
    "science":science2, "welfare":welfare2, "education":education2, "medicine":medicine2, "ecology":ecology2, "infrastructure":infrastructure2};

    choices[i] = {"choiceID":choiceID, "option1":option1, "option2":option2, "characteristicsUpdateOption1":characteristicsUpdateOption1,
    "characteristicsUpdateOption2":characteristicsUpdateOption2};
  }



  let decisionsData = document.getElementsByClassName("decision-form");
  let decisions = [];

  for (let i = 0; i < decisionsData.length; i++) {
    let decisionID = Number(decisionsData[i].querySelector(".decision-id").value);

    let lockedByDialogue = decisionsData[i].querySelector(".decision-locked-by-dialogue").value == "" ? -1 : Number(decisionsData[i].querySelector(".decision-locked-by-dialogue").value);
    let lockedByLaw = decisionsData[i].querySelector(".decision-locked-by-law").value == "" ? -1 : Number(decisionsData[i].querySelector(".decision-locked-by-law").value);

    let isUsed = Boolean(decisionsData[i].querySelector(".decision-condition").checked);
    let characteristicName = decisionsData[i].querySelector(".decision-condition-characteristic").value;
    let characteristicValue = Number(decisionsData[i].querySelector(".decision-condition-characteristic-value").value);
    let choiceChapterID = decisionsData[i].querySelector(".decision-condition-choice-chapter-id").value == "" ? -1 : Number(decisionsData[i].querySelector(".decision-condition-choice-chapter-id").value);
    let ChoiceID = Number(decisionsData[i].querySelector(".decision-condition-choice-id").value);
    let choiceValue = Number(decisionsData[i].querySelector(".decision-condition-choice-value").value);
    let decisionChapterID = decisionsData[i].querySelector(".decision-condition-decision-chapter-id").value == "" ? -1 : Number(decisionsData[i].querySelector(".decision-condition-decision-chapter-id").value);
    let conditionDecisionID = Number(decisionsData[i].querySelector(".decision-condition-decision-id").value);
    let decisionValue = Number(decisionsData[i].querySelector(".decision-condition-decision-value").value);

    let condition = {"isUsed":isUsed, "characteristicName":characteristicName, "characteristicValue":characteristicValue,
    "choiceChapterID":choiceChapterID, "choiceID":ChoiceID, "choiceValue":choiceValue, "decisionChapterID":decisionChapterID,
    "decisionID":conditionDecisionID, "decisionValue":decisionValue};

    let imageName = decisionsData[i].querySelector(".decision-image-name").value;
    let characterName = decisionsData[i].querySelector(".decision-character-name").value;
    let text = decisionsData[i].querySelector(".decision-text").value;


    let optionsData = decisionsData[i].getElementsByClassName("decision-option-container");
    let options = [];
    let characteristicUpdates = [];

    for (let j = 0; j < optionsData.length; j++) {
      options[j] = optionsData[j].querySelector(".decision-option-text").value;

      let budget = Number(optionsData[j].querySelector(".budget").value);
      let navy = Number(optionsData[j].querySelector(".navy").value);
      let airForces = Number(optionsData[j].querySelector(".airForces").value);
      let infantry = Number(optionsData[j].querySelector(".infantry").value);
      let machinery = Number(optionsData[j].querySelector(".machinery").value);
      let europeanUnion = Number(optionsData[j].querySelector(".europeanUnion").value);
      let china = Number(optionsData[j].querySelector(".china").value);
      let africa = Number(optionsData[j].querySelector(".africa").value);
      let unitedKingdom = Number(optionsData[j].querySelector(".unitedKingdom").value);
      let CIS = Number(optionsData[j].querySelector(".CIS").value);
      let OPEC = Number(optionsData[j].querySelector(".OPEC").value);
      let science = Number(optionsData[j].querySelector(".science").value);
      let welfare = Number(optionsData[j].querySelector(".welfare").value);
      let education = Number(optionsData[j].querySelector(".education").value);
      let medicine = Number(optionsData[j].querySelector(".medicine").value);
      let ecology = Number(optionsData[j].querySelector(".ecology").value);
      let infrastructure = Number(optionsData[j].querySelector(".infrastructure").value);

      let characteristicUpdate = {"budget":budget, "navy":navy, "airForces":airForces, "infantry":infantry, "machinery":machinery,
      "europeanUnion":europeanUnion, "china":china, "africa":africa, "unitedKingdom":unitedKingdom, "CIS":CIS, "OPEC":OPEC,
      "science":science, "welfare":welfare, "education":education, "medicine":medicine, "ecology":ecology, "infrastructure":infrastructure};

      characteristicUpdates[j] = characteristicUpdate;
    }

    decisions[i] = {"decisionID":decisionID, "lockedByDialogue":lockedByDialogue, "lockedByLaw":lockedByLaw, "condition":condition,
    "imageName":imageName, "characterName":characterName, "text":text, "options":options, "characteristicUpdates":characteristicUpdates};
  }



  let lawsData = document.getElementsByClassName("law-form");
  let laws = [];

  for (let i = 0; i < lawsData.length; i++) {
    let lawID = Number(lawsData[i].querySelector(".law-id").value);
    let lockedByDecision = lawsData[i].querySelector(".law-locked-by-decision").value == "" ? -1 : Number(lawsData[i].querySelector(".law-locked-by-decision").value);
    let lockedByDialogue = lawsData[i].querySelector(".law-locked-by-dialogue").value == "" ? -1 : Number(lawsData[i].querySelector(".law-locked-by-dialogue").value);

    let lawType = Number(lawsData[i].querySelector(".law-blank-type").value);
    let header = lawsData[i].querySelector(".law-header").value;
    let mainText = lawsData[i].querySelector(".law-main-text").value;
    let detailedText = lawsData[i].querySelector(".law-detailed-text").value;
    let preparedBy = lawsData[i].querySelector(".law-sign-text").value;

    let budget1 = Number(lawsData[i].querySelector(".budget1").value);
    let navy1 = Number(lawsData[i].querySelector(".navy1").value);
    let airForces1 = Number(lawsData[i].querySelector(".airForces1").value);
    let infantry1 = Number(lawsData[i].querySelector(".infantry1").value);
    let machinery1 = Number(lawsData[i].querySelector(".machinery1").value);
    let europeanUnion1 = Number(lawsData[i].querySelector(".europeanUnion1").value);
    let china1 = Number(lawsData[i].querySelector(".china1").value);
    let africa1 = Number(lawsData[i].querySelector(".africa1").value);
    let unitedKingdom1 = Number(lawsData[i].querySelector(".unitedKingdom1").value);
    let CIS1 = Number(lawsData[i].querySelector(".CIS1").value);
    let OPEC1 = Number(lawsData[i].querySelector(".OPEC1").value);
    let science1 = Number(lawsData[i].querySelector(".science1").value);
    let welfare1 = Number(lawsData[i].querySelector(".welfare1").value);
    let education1 = Number(lawsData[i].querySelector(".education1").value);
    let medicine1 = Number(lawsData[i].querySelector(".medicine1").value);
    let ecology1 = Number(lawsData[i].querySelector(".ecology1").value);
    let infrastructure1 = Number(lawsData[i].querySelector(".infrastructure1").value);

    let characteristicsUpdateWhenApplied = {"budget":budget1, "navy":navy1, "airForces":airForces1, "infantry":infantry1, "machinery":machinery1,
    "europeanUnion":europeanUnion1, "china":china1, "africa":africa1, "unitedKingdom":unitedKingdom1, "CIS":CIS1, "OPEC":OPEC1,
    "science":science1, "welfare":welfare1, "education":education1, "medicine":medicine1, "ecology":ecology1, "infrastructure":infrastructure1};

    let budget2 = Number(lawsData[i].querySelector(".budget2").value);
    let navy2 = Number(lawsData[i].querySelector(".navy2").value);
    let airForces2 = Number(lawsData[i].querySelector(".airForces2").value);
    let infantry2 = Number(lawsData[i].querySelector(".infantry2").value);
    let machinery2 = Number(lawsData[i].querySelector(".machinery2").value);
    let europeanUnion2 = Number(lawsData[i].querySelector(".europeanUnion2").value);
    let china2 = Number(lawsData[i].querySelector(".china2").value);
    let africa2 = Number(lawsData[i].querySelector(".africa2").value);
    let unitedKingdom2 = Number(lawsData[i].querySelector(".unitedKingdom2").value);
    let CIS2 = Number(lawsData[i].querySelector(".CIS2").value);
    let OPEC2 = Number(lawsData[i].querySelector(".OPEC2").value);
    let science2 = Number(lawsData[i].querySelector(".science2").value);
    let welfare2 = Number(lawsData[i].querySelector(".welfare2").value);
    let education2 = Number(lawsData[i].querySelector(".education2").value);
    let medicine2 = Number(lawsData[i].querySelector(".medicine2").value);
    let ecology2 = Number(lawsData[i].querySelector(".ecology2").value);
    let infrastructure2 = Number(lawsData[i].querySelector(".infrastructure2").value);

    let characteristicsUpdateWhenDeclined = {"budget":budget2, "navy":navy2, "airForces":airForces2, "infantry":infantry2, "machinery":machinery2,
    "europeanUnion":europeanUnion2, "china":china2, "africa":africa2, "unitedKingdom":unitedKingdom2, "CIS":CIS2, "OPEC":OPEC2,
    "science":science2, "welfare":welfare2, "education":education2, "medicine":medicine2, "ecology":ecology2, "infrastructure":infrastructure2};

    laws[i] = {"lawID":lawID, "lockedByDecision":lockedByDecision, "lockedByDialogue":lockedByDialogue, "lawType":lawType,
    "header":header, "mainText":mainText, "detailedText":detailedText, "preparedBy":preparedBy, "characteristicsUpdateWhenApplied":characteristicsUpdateWhenApplied,
    "characteristicsUpdateWhenDeclined":characteristicsUpdateWhenDeclined};
  }

  let chapter = {"dialogues":dialogues, "choices":choices, "decisions":decisions, "laws":laws};

  document.getElementById("generated-json-container").style.display = "block";
  document.getElementById("generated-json").innerHTML = JSON.stringify(chapter);
})