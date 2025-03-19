//function myFunction(){
  //  console.log("hello world");
    //console.log("javascript");
//}
//myFunction();
//myFunction();

//function myFunction(msg, n) {
  //  console.log(msg * n);
//}
//myFunction("i love js", 100);

//function to add 2 numbers
//function sum(x , y ){
//console.log(x + y);
//}

//function sum(x , y){
  //  s= x + y;
//return s;
//}
//let  val= sum(3,4);
//console.log(val);

//arrow functions--compact way of writing a function
//sum func

//function sum( a, b){
   //return a+b;
//}
//const arrowsum = (a,b) => {
//console.log( a +b );
  //};

//mul function
//function mul( a,b){
  //  return a*b;
//}

//const arrowmul = (a , b) =>{
   // console.log(a * b);
//};

//returns vowels

function vowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }

    console.log(count);
}

vowels("Hello World"); 
