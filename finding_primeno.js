/* Q4.
 Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is prime number
*/
function chkPrime(no) {
    var no1 = 0;
    for (var i = 2; i <= no; i++) {
        if (no % i == 0) {
            no1 = 1;
        }
    }
    if (no1 == 1) {
        console.log("no is prime no");
    }
    else {
        console.log("no is not prime");
    }
}
chkPrime(11);
