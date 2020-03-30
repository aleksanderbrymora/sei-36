const sieve = {
  list:[],
  prime:[],
  calcPrime:function(max){
    this.list = Array(max).fill(true);
    for (let i = 2; i < Math.sqrt(max); i++) {
      for (let j = i * i; j < max; j++) {
        if (this.list[j] && j % i === 0) {
          this.list[j] = false;
        }
      }
    }
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i]) {
        this.primes.push(i);
      }
    }
    return this.primes
  }
}

console.log(sieve.calcPrime(20));
