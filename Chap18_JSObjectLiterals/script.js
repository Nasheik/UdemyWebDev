
let fitBitData = {
    username: "Mark",
    age: 32,
    heightCM: 210,
    weightLBS: 173
};
let fitBitData2 = {
    username: "Tom",
    age: 26,
    heightCM: 120,
    weightLBS: 113
};

fitBitData.age;
fitBitData["age"];
fitBitData["a" + "ge"];

let vari = "age"
fitBitData[vari];


fitBitData.age = 15;
fitBitData.age;

let fit = [fitBitData, fitBitData];
fit[1].age = 10;