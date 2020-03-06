// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement


  function whichButton(event){
      let currentButton = event.target.id;
        switch (currentButton) {
          case 'btn-1':
            document.getElementById("btn-1").style.display = "none";
          case 'btn-2':
            document.getElementById("btn-2").style.backgroundColor = "crimson";
          case 'btn-3':
            document.getElementById("btn-3").style.backgroundColor = "lightblue";
          case 'btn-4':
            document.getElementById("btn-4").className += "jitters";
          default:
              return undefined;
        }

        document.removeEventListener('click', whichButton);
      
}
      

document.addEventListener('click', whichButton);