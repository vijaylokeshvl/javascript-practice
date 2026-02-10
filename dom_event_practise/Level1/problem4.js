  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", function () {
      const action = this.dataset.action;
      if(action==="save"){
           console.log("save this..")
      }
      else if(action==="delete"){
        console.log("delete..");
      }
      else if(action==="edit"){
        console.log("edit");
      }
    });
  });