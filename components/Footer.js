import htmls from "../core.js";
import { connect } from "../store.js";
function Footer({ todos, filters, filter }) {
  const lengthTodos = todos.filter(filters.active).length;
  return htmls`
  <footer class="footer">
    <span class="todo-count"><strong>${lengthTodos}</strong> item left</span>
    <ul class="filters">
      ${Object.keys(filters).map(
        (type) =>
          htmls`
          <li>
            <a class = "${
              filter === type && "selected"
            }" onclick = "dispatch('switchFilter','${type}')">
              ${type[0].toUpperCase() + type.slice(1)}
            </a>
          </li>`
      )}
      
    </ul>
    <button onclick = "dispatch('clearCompleted')" class="clear-completed">Clear completed</button>
</footer>
`;
}
export default connect()(Footer);
