let inpTasks = $("#inpTasks");
let btnAdd = $("#btnAdd");
let btnDel = $("#btnDel");
let btnSort = $("#btnSort");
let btnClear = $("#btnClear");
let ulTasks = $("#ulTasks");

function addTask() {
  let task = $("<li>", {
    class: "list-group-item",
    text: inpTasks.val(),
  });
  ulTasks.append(task);
  inpTasks.val("");
}

function sortTasks() {
  ulTasks.append($("#ulTasks .disabled"));
}

function toggleButtons() {
  btnAdd.prop("disabled", inpTasks.val() < 1);
  btnDel.prop("disabled", inpTasks.val() < 1);
  btnSort.prop("disabled", ulTasks.children().length < 1);
  btnClear.prop("disabled", ulTasks.children().length < 1);
}

btnAdd.click(() => {
  addTask();
  sortTasks();
  toggleButtons();
});

btnDel.click(() => {
  inpTasks.val("");
  toggleButtons();
});

btnSort.click(sortTasks);

btnClear.click(() => {
  $("#ulTasks .disabled").remove();
  toggleButtons();
});

ulTasks.click((e) => {
  $(e.target).toggleClass("disabled");
});

inpTasks.keypress((e) => {
  if (e.which == 13) addTask();
  toggleButtons();
});

inpTasks.on("input", (e) => {
  console.log(inpTasks.val());
  toggleButtons();
});
