// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for(let i=0;i<=100;i++){
    if(i%2==0)
    console.log(i)
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
var x = 0;
while (x<=100) {
    if (x%2!=0) {
        console.log(x)
    }
    x++
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
var y = 0;
do {
    if (y%3==0) {
        console.log(y)
    }
    y++
} while (y<=100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

for (let i = 2; i <= 100; i++) {
    var check = true
    for (let j = 2; j < i; j++) {
        if (i%j==0) {
            check = false
        }
        
    }
    if(check == true){
        console.log(i)
    }
    
}

