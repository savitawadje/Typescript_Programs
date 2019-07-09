/* Q1.
 Write a typescript program which contains one function named as Maximum. That function accepts
 three parameters and it should returns largest value from three input parameters.
 Input : 23 89 6
 Output : Maximum number is 89
*/
function Maximum(no1, no2, no3) {
    if (no1 > no2 && no1 > no3) {
        console.log(no1 + " is the largest no");
    }
    else if (no2 > no3 && no2 > no1) {
        console.log(no2 + " is the largest no");
    }
    else {
        console.log(no3 + " is the largest no");
    }
}
Maximum(23, 89, 6);
