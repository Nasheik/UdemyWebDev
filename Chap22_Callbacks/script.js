const nums = [1,2,34,4,5,7,3];

nums.forEach(function(num)
{
    console.log(num);
});


const evens = nums.map(function (num)
{
    if(num%2==0) return true;
    return false;
})

// let firstNames = fullNames.map(function(obj)
// {
//     return obj.first;
// })


const add = (x,y) => {return x+y;}

let greet = (str) => {return "Hey " + str + "!";}

const square = (x) => (x*x)

const cube = x => x*x*x

setTimeout(_=>console.log("3ms Done"),3000);
let id = setInterval(_=>console.log(Math.random()),2000);
setTimeout(_=>clearInterval(id),6000);
// clearInterval(id)


let evennums = nums.filter(n=>{return n%2==0})
evennums = nums.filter(n => n%2==0)


function validUserNames(usernames) {

    return usernames.filter(us=>us.length()<10);
    
}

nums.every(num=>num>10);
nums.some(num=>num>30);


function allEvens(arr)
{
    return arr.every(num=>(num%2==0));
}


//Reduce - boil an array of infomation down to a single value
nums.reduce((total, price)=>{return total+price})
nums.reduce((min, price)=>{
    if (min>price) return price
    return min
})

nums.reduce((min, price)=>{
    if (min>price) return price
    return min
}, -1)//-1 here is inital value



//Regular function is a scope
//Arrow function is not a scope
