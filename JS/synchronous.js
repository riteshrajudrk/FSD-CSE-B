function wait(){
    const ms = new Date().getTime()+2000;
    while(new Date().getTime() < ms);
}

function register(){
    wait();
    console.log("register")
}
function sendEmail(){
    wait();
    console.log("send email")
}
function login(){
    wait();
    console.log("login")
}
function getData(){
    wait();
    console.log("getData")
}
function displayData(){
    wait();
    console.log("display")
}
register();
sendEmail();
login();
getData();
displayData();

console.log("I am after all the functions");