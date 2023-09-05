console.log("Hello there");

let random = Math.random();
console.log(random);

let total = 102;
if (random<.5)
{
    console.log(total);
}
else if (random<.75)
{
    console.log("less than .75 greater than .5");
}
else
{
    console.log("else case");
    const pass = prompt("Please enter new password starting with a and greater than 3 characters");
    if (pass.length > 3)
    {
        if (pass[0] == "a")
        {
            console.log("good");
        }
        else
        {
            console.log("bad");
        }
    }
    else
    {
        console.log("bad");
    }
}


let falsy = ""
let truthy = "a"

if(!falsy)
{
    console.log("Is Falsy");
}
if(truthy)
{
    console.log("Is Truthy");
}