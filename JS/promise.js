function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login");
      resolve();
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sendEmail");
      resolve();
    }, 2000);
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getData");
      resolve();
    }, 2000);
  });
}

function display() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display");
      resolve();
    }, 2000);
  });
}

// Promise chaining
// register()
//     .then(login)
//     .then(sendEmail)
//     .then(getData)
//     .then(display)
//     .catch((err) => console.error(err));

async function f1() {
  try {
    await register();
    await sendEmail();
    await login();
    await getData();
    await display();
  } catch (error) {
    console.error("Error : ", error);
  }
}

console.log("I am after all the functions");
