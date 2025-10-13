const nums = [1,2,3,4,5,6]
const obj = {
    id:1,
    name : "Ritesh",
    age : 19
}

let [a,b,c,d,e,f] = nums;
// console.log(e);

const {age} = obj;
// console.log(age)

const arr = [1,2,3]
const arr2 = [3,4,6]
const arr3 = [...arr,...arr2];
// console.log([...arr,...arr2])
console.log(arr3)