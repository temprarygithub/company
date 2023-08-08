function toggleDropdown() {
    const dropdownOptions = document.getElementById("dropdownOptions");
    dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
  }
  
  function selectOption(option) {
    const dropdownButton = document.querySelector(".dropdown button");
    dropdownButton.textContent = option;
    const dropdownOptions = document.getElementById("dropdownOptions");
    dropdownOptions.style.display = "none";
  }
  
  function expandBox(boxName) {
    const content = document.getElementById(boxName.replace(/\s+/g, '') + 'Content');
    content.style.display = content.style.display === "block" ? "none" : "block";
  }
  