function evenOdd(num) {
    const arr = ['even', 'odd']
    return arr[num % 2]
}

console.log(evenOdd(24))