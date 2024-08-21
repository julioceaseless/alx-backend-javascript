// 1-stdin.js

// Function to handle the chat interaction
function chatInteraction () {
  // Display the welcome message
  console.log('Welcome to Holberton School, what is your name?');

  // Listen for user input
  process.stdin.on('data', (data) => {
    // Get the user's input, remove any trailing newline characters
    const name = data.toString().trim();

    // Display the user's name
    console.log(`Your name is: ${name}`);

    // Exit the process after displaying the name
    process.exit();
  });

  // Handle the program's exit event to display the closing message
  process.on('exit', () => {
    console.log('This important software is now closing');
  });
}

// Export the chatInteraction function for testing or reuse
module.exports = chatInteraction;

// run the function if this file is executed directly
if (require.main === module) {
  chatInteraction();
}
