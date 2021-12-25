const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
              if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
              arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
            }
          }
          return arr;
    },
}

export default {
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch(),
    },
    getters: {
        storedTodoItems(state) {
            return state.todoItems;
        },
    },
    mutations: {
        addOneItem(state, todoItem) {
            const obj = {completed: false, item: todoItem}
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        toggleCompleteOneItem(state, index) {
            const todoItem = state.todoItems[index];
            todoItem.completed = !todoItem.completed;
            localStorage.removeItem(todoItem.item);
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        },
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        },
    },
}