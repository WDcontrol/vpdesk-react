document.addEventListener("DOMContentLoaded", () => {
    handleSideBarWrapper();
  });
  
  function handleSideBarWrapper() {
    let leftSideBar = document.getElementById("leftSideBar");
    let wrapperContainer = leftSideBar.querySelector("#wrapperContainer");
  
    // Add event listener on click => set leftSideBar class to impact all elements with css
    wrapperContainer.addEventListener("click", () => {
      if (leftSideBar.classList.contains("isOpen")) {
        leftSideBar.classList.replace("isOpen", "isClose");
      } else {
        leftSideBar.classList.replace("isClose", "isOpen");
      }
    });
  }
 