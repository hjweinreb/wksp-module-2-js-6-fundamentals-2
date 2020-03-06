// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)
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

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)
