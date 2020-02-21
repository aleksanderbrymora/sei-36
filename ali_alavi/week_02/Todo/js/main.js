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

  find(id) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  remove(id) {
    const foundAt = this.find(id);
    // not using slice since it returns a shallow copy/mutates
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }
};

// Create a todos data type
const todos = new Todo();

// Testing stuff
// todos.add("Make remove method.")
// const x1=todos.dataStore[0].id
// x1
// const x2 = todos.find(x1)
// x2
// todos.remove(x1)
// todos

//
let todoItem = function(todo, id) {
  return `<li class="list-group-item d-flex justify-content-between row col-md-auto" data-id="${id}">
          ${todo} 
          <button class="btn btn-outline-secondary bg-light new-item" type="button">Done
          </button>
          </li>`;
};

// JQ
$("#todoForm").submit(function(e) {
  e.preventDefault();
  //store inputed value
  let inputVal = $("#inputTodo").val();

  //clear
  $("#inputTodo").val("");
  // add todo instance after sanatize
  if (inputVal.length > 0 && isString(inputVal)) {
    todos.add(inputVal);
    $("#todoList").prepend(
      todoItem(
        todos.dataStore[todos.listSize - 1].todo,
        todos.dataStore[todos.listSize - 1].id
      )
    );
  }
});

// Done/remove
$("#todoList").on("click", ".new-item", function() {
  //get data-id from parent li
  const id = $(this)
    .parent()
    .attr("data-id");
  // remove todo from store
  todos.remove(id);

  //remove dom element
  $(this)
    .parent()
    .remove();
});
