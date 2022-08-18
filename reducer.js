import storage from "./util/storage.js";

const states = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  startIndex: null,
};

const actions = {
  add({ todos }, title) {
    todos[todos.length - 1]
      ? todos.push({
          title,
          completed: false,
          id: todos[todos.length - 1].id + 1,
        })
      : todos.push({
          title,
          completed: false,
          id: 0,
        });

    storage.set(todos);
    setTimeout(() => {
      document.querySelector(".new-todo").focus();
    }, 0);
  },

  destroy(state, id) {
    state.todos = state.todos.filter((item) => item.id !== id);
    storage.set(state.todos);
  },

  toogle({ todos }, id) {
    todos.forEach((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });
    storage.set(todos);
  },

  toogleAll({ todos }, boolean) {
    todos.forEach((item) => (item.completed = boolean));
    storage.set(todos);
  },

  startEditing(state, id) {
    state.startIndex = id;
    setTimeout(() => {
      const input = document.getElementById(id);
      const end = input.value.length;
      input.setSelectionRange(end, end);
      input.focus();
    }, 0);
  },

  editing(state, value) {
    state.todos.forEach((item) => {
      if (item.id === state.startIndex) {
        if (value && item.title !== value) {
          item.title = value;
          item.completed = false;
        }
      }
    });
    state.startIndex = null;
    storage.set(state.todos);
  },

  clearCompleted(state) {
    state.todos = state.todos.filter(state.filters.active);
    storage.set(state.todos);
  },

  switchFilter(state, type) {
    state.filter = type;
  },
};

const reducer = (state = states, action, args) => {
  actions[action] && actions[action](state, ...args);
  return state;
};
export default reducer;
