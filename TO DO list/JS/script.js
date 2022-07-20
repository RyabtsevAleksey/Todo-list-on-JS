// находим инпут
let input = document.querySelector("#input");
// находим кнопку добавить
let btnAdd = document.querySelector(".btn-add");
// находим список для вставки новых дел
let result = document.querySelector("#result");
// находим span для вставки счетчика дел
let total = document.querySelector("#total");

// счетчик дел
let i = 0;

// добавляем событие на кнопку
// если инпут не заполнен то return
// добавляем внутрь функцию принимающую значение инпута
// обнуляем текст инпута
btnAdd.addEventListener("click", (e) => {
  console.log(input.value);
  if (input.value === "") return;
  createDeleteElement(input.value); //<-----функция принимает текст инпута
  input.value = "";
});

//create delete создаем отдельную ф-цию <-------
function createDeleteElement(value) {
  i++; //увеличивает счетчик
  const newli = document.createElement("li"); //создаем новую лишку
  newli.classList.add("li-css"); //добавляем css стиль
  newli.textContent = value; //принимает значение (будет инпут)
  result.appendChild(newli); // вставляем внутрь списка

  //создаем кнопку удалить
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-delete-css"); //добавляем css стиль
  deleteBtn.textContent = "Удалить"; // значение кнопки
  newli.appendChild(deleteBtn); // вставляем кнопку в лишку

  // обработчик события на кнопку удалить
  deleteBtn.addEventListener("click", (e) => {
    // console.log(newli);
    i--; // вычитаем из счетчика при нажатии удалить
    total.textContent = i; // обнавляем значение счетчика при удалении лишки
    result.removeChild(newli); // удаляем нажатую лишку
  });

  //меняем оформление лишки по нажатию (выполнено)
  newli.addEventListener("click", (e) => {
    newli.classList.toggle("li-active");
  });

  total.textContent = i; //обнавляем значение счетчика
}
