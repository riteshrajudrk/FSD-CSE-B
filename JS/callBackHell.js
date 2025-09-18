function register(callback) {
    setTimeout(() => {
        console.log("register");
        callback();
    }, 2000);
}

function login(callback) {
    setTimeout(() => {
        console.log("login");
        callback();
    }, 2000);
}

function sendEmail(callback) {
    setTimeout(() => {
        console.log("sendEmail");
        callback();
    }, 2000);
}

function getData(callback) {
    setTimeout(() => {
        console.log("getData");
        callback();
    }, 2000);
}

function display() {
    setTimeout(() => {
        console.log("display");
    }, 2000);
}


register(() => {
    login(() => {
        sendEmail(() => {
            getData(() => {
                display();
            });
        });
    });
});

console.log("I am after all the functions");
