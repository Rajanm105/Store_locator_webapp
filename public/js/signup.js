const signupForm = document.getElementById('signup-form');
const username = document.getElementById('user-name');
const useremail = document.getElementById('user-email');
const userphone = document.getElementById('user-phone');
const userpassword = document.getElementById('user-password');
const userrole = document.getElementById('user-role');

//Send POST to API to sign up
async function addUser(e){
    e.preventDefault();

    if(username === '' || useremail === '' || userphone === '' || userpassword === '' || userrole === ''){
        alert('Please fill in the fields');
    }

    const sendBody = {
        name : username.value,
        email : useremail.value,
        phone : userphone.value,
        password : userpassword.value,
        role: userrole.value
    };

    try{
        const res = await fetch('/api/v1/stores/user/register', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(sendBody)
        });

        console.log(res)
        alert('Registration Successfull');
        window.location.href = './login.html'
    }catch(err){
        alert(err);
        return err;
    }
}

signupForm.addEventListener('submit',addUser);