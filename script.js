//your JS code here. If required.
function incrementCounter() {
    // Get the current counter value
    var currentCounter = parseInt(document.getElementById('counter').innerText);

    // Display an alert with the un-incremented value
    alert("Un-incremented Value: " + currentCounter);

    // Increment the counter value
    currentCounter++;

    // Update the counter value on the webpage
    document.getElementById('counter').innerText = currentCounter;
  }

