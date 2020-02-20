function drewStar02(n) {
    let str = ""
    for(let row = 1; row <=n ; row++){
        for(let col = 1; col <= n ; col++){
            str += "*"
        }
        str += "\n"
    }
    console.log(str)
}

drewStar02(5)