const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("add_button");
const taskListEl = document.getElementById("task_list");

buttonEl.addEventListener("click", () => {
  const value = inputEl.value;
  const li = document.createElement("li");
  li.innerText = value;

  if (value === "") {
    alert("write some text");
    return;
  }

  const removebutton = document.createElement("button");
  removebutton.innerText = "X";

  removebutton.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(removebutton);
  taskListEl.appendChild(li);
  inputEl.value = "";
});
