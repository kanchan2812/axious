
const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    const userDetails = {
        name: nameInput.value,
        email: emailInput.value
    };

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