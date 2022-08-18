import htmls from "../core.js";

export default function Header() {
  return htmls`<header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      onkeyup = "event.keyCode === 13 && this.value &&  dispatch('add',this.value.trim())"
    />
  </header>
`;
}
