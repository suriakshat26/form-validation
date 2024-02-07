let fn=document.getElementById("fn");
let ln=document.getElementById("ln");
let mobile=document.getElementById("mobile");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirm-password");
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let email=document.getElementById("email");
// let Dates = $get('<%=ui_txtDOB.ClientID %>');   
// let Split = Dates.value.split("/");
function validate(){
    if(fn.value===''||ln.value===''||mobile.value===''||email.value===''||password.value===''||confirmPassword.value==='')
    {
        alert('pls enter all details');
    }
    if(fn.value.length>50||ln.value.length>50)
    {
        alert('value should not exceed more than 50 characters');
    }
    if(mobile.value.length<10)
    {
        alert('pls enter 10 digit mobile number');
    }
    if(password.value!=confirmPassword.value)
    {
        alert("Passwords do not match");

    }
    if(!email.value.match(mailformat))
    {
        alert('pls enter valid mail address');
    }
    // else
    // {
    //     alert('form submitted successfully');
    // }
    

}