import htmls from "./core.js";
import { connect } from "./store.js";
import Header from "./components/Header.js";
import TodoList from "./components/TodoList.js";
import Footer from "./components/Footer.js";

const App = (state) => {
  return htmls`<section class="todoapp">
  ${Header()}
  ${state.todos.length > 0 && TodoList()}
  ${state.todos.length > 0 && Footer()}
  </section>
  `;
};
export default connect()(App);
