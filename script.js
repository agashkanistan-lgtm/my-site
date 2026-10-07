const button = document.getElementById("colorBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  const colors = ["teal", "orange", "purple", "crimson", "navy"];
  const random = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background = random;
  message.textContent = "Color changed to " + random + "!";
});
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);
  input.value = "";
});