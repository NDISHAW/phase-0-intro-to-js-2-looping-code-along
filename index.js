// Code your solutions in this file
// const gifts =["teddybear","drone", "doll"];
// function wrapGifts(gifts){
// for (let i=0; i<gifts.length;i++){
//     console.log(`wrapped ${gifts [i]} and added  abow!`);
//     debugger;
// }
// return gifts;
// }
// wrapGifts(gifts);

const names=["Guadalupe","Ollie", "Aki"];

function writeCards(names, event="birthday") {
let thanks=[]
for(let i = 0; i < names.length; i++){
    thanks.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return thanks;
};
function countDown(startno){
    while (startno>0) {
        console.log(startno);
        startno-=1;
    }
    console.log(startno);
}
