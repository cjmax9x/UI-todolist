import htmls from "../core.js";

export default function TodoItem(todo, startIndex) {
  return htmls` 
  <li class="${todo.completed && "completed"} ${
    startIndex === todo.id && "editing"
  }">
    <div class="view">
      <input onchange = "dispatch('toogle',${todo.id})"  class="toggle" 
        type="checkbox" ${todo.completed && "checked"} />
      <label ondblclick = "dispatch('startEditing',${todo.id})">${
    todo.title
  }   </label>
      <button onclick = "dispatch('destroy',${
        todo.id
      })" class="destroy"></button>
    </div>
    <input onkeyup = "event.keyCode === 13 && dispatch('editing',this.value.trim()) 
    || event.keyCode === 27 && dispatch('editing',this.value.trim())"
    onblur = "dispatch('editing',this.value.trim())"
    class="edit" id="${todo.id}" value="${todo.title}"/>
  </li>
`;
}
