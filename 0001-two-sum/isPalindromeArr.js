function isPal(array) {
    let s = 0
    let e = array.length - 1
    while (s < e) {
        if (array[s] !== array[e]) {
            return false
        }
        s++
        e--
    }
    return true
}