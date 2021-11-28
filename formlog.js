var uname=document.getElementById("uname");
    var psw=document.getElementById("pass");
function validate()
{ 
    if(uname ==' ')
    {
        alert("please enter username.");
    }
    else if(psw=='')
    {
        alert("enter the password");
    }
       else if(uname !=="admin")
    {
        alert("enter valid user name.");
    }
    else if(pwd !=="12345")
    {
        alert("enter valid password");
    }
    else{
        alert(' thank you for login');
    }
}