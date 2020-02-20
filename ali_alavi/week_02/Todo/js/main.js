/**
 * Sanitize input
 * Only space, letters and numbers shall pass
 * @param {String}
 */
function isString(s) {
  if (s.match(/^[0-9a-zA-Z ]+$/) === null) {
    return false;
  }
  return true;
}

/**
 * TODO class
 */
const Todo = class {
  constructor() {
    //initialize store for todos
    this.dataStore = [];
    this.listSize = 0;
  }

  getListSize() {
    return this.listSize;
  }

  add(todo) {
    // append todo
    this.dataStore.push({
      todo,
      id: Date.now(),
      done: false,
      timeStamp: new Date()
    });
    //increment list size
    this.listSize++;
  }
};

// Create a todos data type
const todos = new Todo();

//
let todoItem = function(todo, id) {
  return `<li class="list-group-item d-flex justify-content-between row col-md-auto" data-id="${id}">
          ${todo} 
          <button class="btn btn-outline-secondary bg-light" type="button" id="done">Done
          </button>
          </li>`;
};

// JQ
$("#todoForm").submit(function(e) {
  event.preventDefault();
  //store inputed value
  const inputVal = $("#inputTodo").val();

  //clear
  $("#inputTodo").val("");
  // add todo instance after sanatize
  if (isString(inputVal)) {
    todos.add(inputVal);
  }
  //console.log(todos);
  $("#todoList").prepend(
    todoItem(
      todos.dataStore[todos.listSize - 1].todo,
      todos.dataStore[todos.listSize - 1].id
    )
  );
});
