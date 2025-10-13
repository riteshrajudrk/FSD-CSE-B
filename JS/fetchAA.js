const url = "https://dummyjson.com/users?limit=2";
let data;
let Fet = async () => {
  try {
    data = await fetch(url);
    data = await data.json();

    data.users.forEach((da) => {
      console.log(da.firstName)
      console.log("Email:", da.email);
      console.log("ip:", da.ip);
      console.log("Mac Address:", da.macAddress);
      console.log("*********************************************")

    });

  } catch (error) {
    console.error(error)
  }

}
Fet();
