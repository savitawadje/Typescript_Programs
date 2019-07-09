/* Q5.
  Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input : 21
Output : 1 1 2 3 5 8 13 21
*/




function Fibonacci(no) {
    //  var no1: number =0;
    //  var no2: number=1;
    //  var num:number ; 
    let no1 = 0;
    let no2 = 1;

    for (let i = 0; i < no; i++) {
        console.log("Fab Series :", no1);
        // let num = no1 + no2;
        // no1 = no2;
        // no2 = num;
    }
}

Fibonacci(21);