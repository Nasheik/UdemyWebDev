// Making an array:
let colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
colors.length; //3


colors.push("blue");//Add to back
let lastColor = colors.pop();//Remove from back

colors.unshift("green");//Add to front
let firstColor = colors.shift();//Remove from front

//Concats 2 arrays
let arr1 = ['1', '2', '3'];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);

//Is an element in this array?
colors.includes("red");
colors.includes("green");


arr1.reverse();


arr3.slice(1,3);
arr3.slice(1,-2);

let arr4 = [1,2,3,3,3,4,5,6,4,3,3,4,3];
arr4.splice(0,4,9);//Deletes first 4 elements then adds a 9 there
arr4.splice(2,0,10);//Inserts 10 at index 2


let arr5 = [1,6,2,8,100,4,3,-10];
arr5.sort(); //Converts to strings and sorts by utc-16

//Array equals uses references to check --- is it the same part in memory?
[1] == [1]
let a = [1];
let b = [1];
let c = a;
a==b;
a==c;

//Const refers to the part in memory - not the contents of the array
const nums = [1,2,3];
nums[0] = 3;
nums.push(4);
nums;

