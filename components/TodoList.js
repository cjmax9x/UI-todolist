import htmls from "../core.js";
import { connect } from "../store.js";
import TodoItem from "./TodoItem.js";

function TodoList({ todos, filters, filter, startIndex }) {
  return htmls`<section class="main">
  <input ${
    todos.every(filters.completed) && "checked"
  } onchange="dispatch('toogleAll', this.checked)" id="toggle-all" class="toggle-all" type="checkbox" />
  <label for="toggle-all">Mark all as complete</label>
     <ul class="todo-list">
  ${todos.filter(filters[filter]).map((item) => TodoItem(item, startIndex))}
  </ul>
</section>
`;
}
export default connect()(TodoList);
