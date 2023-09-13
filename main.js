
const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const userDetails = {
        name: nameInput.value,
        email: emailInput.value
    };

    // Get a reference to the users list
const usersList = document.getElementById('users');

// Add a click event listener to the users list
usersList.addEventListener('click', function (event) {
  // Check if the clicked element has the delete-icon class
  if (event.target.classList.contains('delete-icon')) {
    // Find the closest <li> element to the clicked delete icon
    const userEntry = event.target.closest('li');

    // Extract the user's ID or any other identifier that uniquely identifies the user
    const userId = userEntry.dataset.userId; // You can set this in your data attributes

    // Make an Axios DELETE request to remove the user from the server
    axios
      .delete(`https://crudcrud.com/api/5927d8d969bf475cb958ebcb182621f5/appointment/${userId}`)
      .then((response) => {
        console.log(response);

        // If the deletion was successful, remove the user entry from the UI
        userEntry.remove();
      })
      .catch((err) => {
        console.error(err);
      });
  }
});


    // Convert to JSON and store in local storage
    //localStorage.setItem('userDetails', JSON.stringify(userDetails));
    axios.post("https://crudcrud.com/api/5927d8d969bf475cb958ebcb182621f5/appointment",userDetails)
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    })

    alert('User details stored in local storage.');
});

