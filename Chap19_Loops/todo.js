


let todo = [];

let cmd = prompt("What would you like to do?");
while(cmd!=="quit")
{

    if(cmd==="new")
    {
        let item = prompt("Name Task");
        todo.push(item);
    }
    else if(cmd==="list")
    {
        console.log("***********");
        let count = 0;
        for(let item of todo)
        {
            console.log(`${count}: ${item}`);
            count++;
        }
        console.log("***********");
    }
    else if(cmd==="delete")
    {
        let index = parseInt(prompt("Enter index to be deleted:"));
        if (index)
        {
            todo.splice(index,1);
        }
    }
    


    cmd = prompt("What would you like to do?");
}