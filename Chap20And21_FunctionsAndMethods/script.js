function singSong(prefix, suffix)
{
    console.log(prefix +" sjkdhfaksjdh");
    console.log(prefix + " dskfhsd");
    console.log(prefix + " ksjdh");
    return "Done";
}

//Can call func without second arg if not used
let ret = singSong("REEEEE");
console.log(ret);



//Lexical Scope -- function B which is inside function A can access variables of function A but function A can not access variable of function B
function bank()//A
{
    const heroes = ["spiderman","superman"];
    function cry()
    {
        for(let hero of heroes)//B
        {
            console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
        }
    }
    cry();
}

bank();

//function expression
let add = function(x,y) {console.log( x+y);}
console.log(add(1,2));

//function as an argument
function call2(func)
{
    func(1,2);
    func(4,3);
}
call2(add);


//function as return
function makeMyster()
{
    return function(){console.log("funception");}
}
// makeMyster()
makeMyster()()


let num =60;
let sen = function(){if(num>60){console.log("SENOIR");}}
let adul = function(){if(num>20){console.log("ADULT");}}

num =10;
sen();
adul();
num =30;
sen();
adul();
num =70;
sen();
adul();


//methods
const math =
{
    PI: 3.14,
    square: function(num){return num*num;},
    cube: function(num){return num**3;},
    sayPI: function(){console.log(this.PI);}
}


//coding challenge
let hen =
{
    name: "Helen",
    eggCount: 0,
    layAnEgg: function()
    {
        this.eggCount+=1;
        return "EGG";
    }
}


//try catch
try{
    hello.toUpperCase();
}
catch(e){
    console.log(e + "---ERROR!");
}