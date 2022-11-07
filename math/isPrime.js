function isPrime(n) {
    if(n < 2) return false;
    // for (let index = 2; index < n; index++) { // Big-O: O(n)
    let sqrt = Math.sqrt(n);
    for (let index = 2; index <= sqrt; index++) { // Big-O: O(sqrt(n))
        if(n%index === 0) return false;
    }
    return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(4)); //false
console.log(isPrime(5)); //true