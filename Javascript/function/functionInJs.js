function pow(x, n) {
    if (n < 0) return ("Negative 'n' not supported");
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
console.log(pow(2, -3))