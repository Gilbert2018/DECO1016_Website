  function signUp() {
            let form = document.getElementById('myform');
            if (form.checkValidity()) {
                localStorage.account = document.getElementById("email").value;
                localStorage.password = document.getElementById("password").value;
                window.alert('Sign Up successful!');
            }
        };