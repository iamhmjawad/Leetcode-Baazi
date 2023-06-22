function isPal(str) {
    let s = 0
    let e = str.length - 1
    while (s < e) {
        if (str[s] !== str[e]) {
            return false
        }
        s++
        e--
    }
}