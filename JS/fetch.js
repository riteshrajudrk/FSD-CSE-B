const url = "https://api.github.com/users/riteshrajudrk";
const res = fetch(url)
res.then((resp) => {
   return  resp.json();
})
.then((data) => {
    console.log("data : ", data);
})
.catch((err) => {
    console.log("error : ",err);
})
.finally(()=>{
    console.log("Last Statement");
})

const mainContainer = document.getElementById("main-cont");
mainContainer.innerText = data;

