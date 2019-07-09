/* Q3.
 Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10
*/




function displayFactor(no1:number) : number
{  
    for (var i=1 ; i <= no1 ; i++) 
    {
        if (no1 % i == 0)
        {
            console.log(i);
            return i;
        }
    }    
} 


var iret: number;

iret = displayFactor(20); 

