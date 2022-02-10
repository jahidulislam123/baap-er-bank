document.getElementById('login-submit').addEventListener('click',function(){
    // get user email 
    const emailField =document.getElementById('user-email');
    const userEmail =emailField.value;
    //console.log(userEmail);
    // get useer password
    const passwordField =document.getElementById('user-password');
    const userPassword =passwordField.value;
    //console.log(userPassword);
    // cheack email and password 
    if(userEmail=='sontan@gmail.com'&& userPassword=='secret'){
      //console.log('valid user');  
      window.location.href='banking.html';
    }else{
        alert('invalid password');
    }
    
});

