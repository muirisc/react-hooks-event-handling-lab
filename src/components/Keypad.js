// Code Keypad Component Here
function KeyPad () {
  function handleChange(event) {
    event.preventDefault();
    console.log('Entering password...')
  }


return (
  <form>
  <input type="password"name="password" placeholder="Enter password..." onChange={handleChange} />
  </form>
)} 
export default KeyPad;








// Mr. Burns has requested us to build a new keypad component for the nuclear plant, since the last one was way too complicated
//  for his employees to use. We'll keep things super simple instead, and use an <input type="password" /> field to capture input.
//   Here's how to complete the exercise:

// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the change event.
// When that event fires, use console.log to print out the text 'Entering password...'.
