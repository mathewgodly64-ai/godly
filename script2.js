function addTodo() {
      const input = document.getElementById("todoInput");      /*const keyword annu variableine call cheyth input cheykan vendi set akunnu*/
      const taskText = input.value.trim();   /* input functionil textinu ulla value receive cheyth athine trimfn use chheyth space matte output */

      if (taskText === "") {
        alert("Please enter a task!");  /* text boxil onnum ezhuthiyilllel enthelum idan msg vidum*/
        return;
      }

      const li = document.createElement("li");   /* li enna oru elementine undakunnu enit tasktext enna ithil ulla item liyil add akunnu athannel     thazhe kanikkunu*/                                            
      li.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";                             
      deleteBtn.onclick = function () {
        li.remove();
      };

      li.appendChild(deleteBtn);
      document.getElementById("todoList").appendChild(li);
      input.value = "";
    }