export const mutations = {
    addOneItem(state, todoItem) {
        const obj = {completed: false, item: todoItem}
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    toggleCompleteOneItem (state, index) {
        const todoItem = state.todoItems[index];
        todoItem.completed = !todoItem.completed;
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
        localStorage.clear();
        state.todoItems = [];
    }
}