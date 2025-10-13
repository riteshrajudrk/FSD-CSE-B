// const url = "https://api.github.com/users/rsaxena4147"

const url = "https://dummyjson.com/users?limit=2"
const res = fetch(url)

res.then((resp) => {
  return resp.json()
})
  .then((data) => {
    data.users.forEach((da) => {
      console.log("Name:", da.firstName);
      console.log("Email:", da.email);
      console.log("ip:", da.ip);
      console.log("Mac Address:", da.macAddress);
      console.log("**************************8")
    });
  })
  .catch((err) => {
    console.log("ERRPR", err);
  })
