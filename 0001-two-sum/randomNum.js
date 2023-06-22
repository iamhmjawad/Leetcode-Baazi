function generateRandom(min, max) {
    let diff = max - min
    let random = Math.random()
    random = Math.floor(random * diff)
    random = random * diff
    random = random + min

    return random
}

console.log(generateRandom(1, 10))