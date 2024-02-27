///document.getElementById("hCompact").onclick = function(){
    
       /// const a = '<p id="pdfDisplay"><object data='pdf/Hunter/Hunter Compact 1-04.pdf' width="800" height="500"></object></p>'
    ///return document.getElementById("pdfDisplay").innerHTML = 'a'

    const button = document.querySelector("hCompact");
    const paragraph = document.querySelector("pdfDisplay");
    
    button.addEventListener("click", updateButton);
    
    function updateButton() {
      if (button.value === "Start machine") {
        button.value = "Stop machine";
        paragraph.textContent = "The machine has started!";
      } else {
        button.value = "Start machine";
        paragraph.textContent = "The machine is stopped.";
      }
    }
    


}