const select = document.getElementById("mySelect");
const selectedList = document.getElementById("selectedList");

select.addEventListener("change", function () {
  const options = this.options;
  for (let option of options) {
    if (option.selected) {
      const selectedItem = document.createElement("div");
      selectedItem.classList.add("selected");
      selectedItem.innerHTML = option.text;
      selectedItem.addEventListener("click", function () {
        option.selected = false;
        selectedList.removeChild(selectedItem);
      });
      selectedList.appendChild(selectedItem);
    } else {
      const selectedItems = selectedList.querySelectorAll(".selected");
      for (let selectedItem of selectedItems) {
        if (selectedItem.innerHTML === option.text) {
          selectedList.removeChild(selectedItem);
          break;
        }
      }
    }
  }
});
