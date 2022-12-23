const checkboxes = document.querySelectorAll("#myList input[type='checkbox']");
const selectedList = document.getElementById("selectedList");

for (let checkbox of checkboxes) {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      const label = this.nextElementSibling;
      const selectedItem = document.createElement("div");
      selectedItem.classList.add("selected");
      selectedItem.innerHTML = label.innerHTML;
      selectedItem.addEventListener("click", function () {
        checkbox.checked = false;
        selectedList.removeChild(selectedItem);
      });
      selectedList.appendChild(selectedItem);
    } else {
      const label = this.nextElementSibling;
      const selectedItems = selectedList.querySelectorAll(".selected");
      for (let selectedItem of selectedItems) {
        if (selectedItem.innerHTML === label.innerHTML) {
          selectedList.removeChild(selectedItem);
          break;
        }
      }
    }
  });
}
