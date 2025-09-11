

function register(){
    setTimeout(()=> console.log("register"),2000);
}
function login(){
    setTimeout(()=> console.log("login"),2000);
}
function sendEmail(){
    setTimeout(()=> console.log("sendEmail"),2000);
}
function getData(){
    setTimeout(()=> console.log("getdata"),2000);
}
function display(){
    setTimeout(()=> console.log("display"),2000);
}
register();
sendEmail();
login();
getData();
display();

console.log("I am after all the functions");