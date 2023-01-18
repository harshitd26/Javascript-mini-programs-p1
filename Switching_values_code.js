//variable a holds the value and b and vice versa

function test(){
    var a = "7";
    var b = "5";

    var c = a;
    a = b;
    b = c;

    console.log("a is " + a);
    console.log("b is " + b);
}