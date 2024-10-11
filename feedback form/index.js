const form =document.getElementById("registrationForm");
form.addEventListener('submit',function(event){

    event.preventDefault();//prevent default submission
    //validate username
    const usernameInput = document.getElementById('username');
    const usernameError = document.getElementById('usernameError');
    if(usernameInput.value.length<3){
        usernameInput.textContent='Username must be at least 3 characters long';
        return;

    }else{
        usernameError.textContent='';
    }
    //validate email
    const emailInput = document.getElementById('email');
    const emailError= document.getElementById('emailError');
    if(!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)){
        emailError.textContent= "please enter a valid email address";
        return;
    }else{
        emailError.textContent= '';
    }
    //validate password
    const passwordInput = documet.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    if(passwordInput.value.length<6){
        passwordError.textContent= "password must be atleast 6 characters";
        return
    }else{
        passwordError.textContent= ''
    }
    //validate age
    const ageInput =document.getElementById('age')
    const ageError = document.getElementById('ageError')
    if (ageInput.value<18|| ageInput.value>99){
        ageError.textContent ='Age must be between 18 and 99.';
        return;
    }else{
        age.textContent=''
    }
    //if all validations pass submit the form
})
