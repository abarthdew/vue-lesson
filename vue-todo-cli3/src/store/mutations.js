const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem}
    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item);
    state.todoItems.splice(payload.index, 1);
};
const toggleCompleteOneItem = (state, index) => {
    const todoItem = state.todoItems[index];
    todoItem.completed = !todoItem.completed;
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleCompleteOneItem, clearAllItems }