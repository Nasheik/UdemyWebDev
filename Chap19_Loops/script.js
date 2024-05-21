for(let i= 0; i<10; i++)
{
    console.log(i);
}

for(let i= 1; i<10; i+=2)
{
    console.log(i);
}


let animals = ["Tigers", "Lions", "Bears"];
let food = ["Fish", "Chicken"];
for(let i =0; i<animals.length; i++)
{

    for(let j=0; j<food.length; j++)
    {

        console.log(animals[i] + " Food: " + food[j]);
    }

    if (i==1)break;

}

//Guessing Game

// let max = parseInt(prompt("Enter max number"));
// while (!max)
// {
//     max = parseInt(prompt("Enter a valid number"));
// }

// let num = Math.floor(Math.random()*max)+1;
// console.log(num);


// let guess = parseInt(prompt("Enter a number"));
// while(guess != num)
// {
//     if(guess<num)
//     {
//         guess = parseInt(prompt("Too Low! Enter a number"));
//     }
//     else
//     {
//         guess = parseInt(prompt("Too High! Enter a number"));
//     }
// }

// alert("Correct!");


for(let animal of animals)
{
    console.log(animal);
}

const testScores =
{
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91
}

for(let person in testScores)
{
    console.log(`${person} scored ${testScores[person]}`);
}
for(let score of Object.values(testScores))
{
    console.log(score);
}