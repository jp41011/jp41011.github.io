// this is a comment in javascript /* for multi-line comments */

/* var x = 0; // var initializes local variable
with out the var it would make a global variable
*/
 
/*
This function will make alert box, pop-up
*/
function alertFunc()
{
    alert("Hello, This is my first alert box!");
}

/*
Produce confirm box
to verify or accept something
confirm box returns:
true if user clicks 'Ok'
false if user clicks 'Cancel'
*/
function confirmFunc()
{
   var pressed_ok = confirm("I will tell you what you clicked, :O");
   if (pressed_ok)
    {
        text = "You pressed OK! :)";
    }
    else
    {
        text = "You pressed Cancel :(";
    }
    document.getElementById("confirm_result").innerHTML=text;
}

function promptFunc()
{
    var full_text;
    var name = prompt("What is your name?","Harry Potter");
    if (name!=null)
    {
        full_text = "<p>Hello " + name + "! ... If that is your real name.</p>";
    }
    else // this doesn't get called
    {
        full_text = "You don't have a name, ... 'He who must not be named'";
    }
    document.getElementById("prompt_result").innerHTML=full_text;
}

/* this function will see if an email is valid */
function validateEmail()
{
    var input = document.forms["emailForm"]["email"].value;
    var at_pos = input.indexOf("@"); // get index of where the '@' is
    var dot_pos = input.indexOf("."); // index of '.'
    if (at_pos < 1 || dot_pos < at_pos+2 || dot_pos+2 >= input.length)
    {
        alert("'" + input + "' is NOT a valid e-mail");
        return false;
    }
    else // print that it was a valid email
    {
        alert("'" + input + "' IS a valid E-mail");
    }
}
