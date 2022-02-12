let number = document.querySelector('#num').value
let from = document.querySelector('#from')
let to = document.querySelector('#to')
let result = document.querySelector('#result')
let btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    number = document.querySelector('#num').value
    if(from.value == 'decimal'){
        if(to.value == 'decimal'){
            result.innerHTML = number
        }else if(to.value == 'binario'){
            result.innerHTML = decimalBinario(number)
        }else if(to.value == 'hexadecimal'){
            result.innerHTML = decimalHexadecimal(number)
        }else if(to.value == 'octal'){
            result.innerHTML = decimalOctal(number)
        }else{
            result.innerHTML = 0
        }
    }else if(from.value == 'binario'){
        if(to.value == 'binario'){
            result.innerHTML = number 
        }else if(to.value == 'decimal'){
            result.innerHTML = binarioDecimal(number)
        }else if(to.value == 'hexadecimal'){
            result.innerHTML = decimalHexadecimal(binarioDecimal(number))
        }else if(to.value == 'octal'){
            result.innerHTML = decimalOctal(binarioDecimal(number))
        }else{
            result.innerHTML = 0
        }
    }else if(from.value == 'hexadecimal'){
        if(to.value == 'decimal'){
            result.innerHTML = hexadecimalDecimal(number)
        }else if(to.value == 'binario'){
            result.innerHTML = decimalBinario(hexadecimalDecimal(number))
        }else if(to.value == 'hexadecimal'){
            result.innerHTML = number 
        }else if(to.value == 'octal'){
            result.innerHTML = decimalOctal(hexadecimalDecimal(number))
        }else{
            result.innerHTML = 0
        }
    }else if(from.value == 'octal'){
        if(to.value == 'decimal'){
            result.innerHTML = octalDecimal(number) 
        }else if(to.value == 'binario'){
            result.innerHTML = decimalBinario(octalDecimal(number))
        }else if(to.value == 'hexadecimal'){
            result.innerHTML = decimalHexadecimal(decimalOctal(number))
        }else if(to.value == 'octal'){
            result.innerHTML = number
        }else{
            result.innerHTML = 0
        }
    }
})
function decimalBinario(num){
    let result = []
    while(num>=2){
        if(num%2==0){
            result.unshift(0)
            num = num/2
        }
        else{
            result.unshift(1)
            num = Math.trunc(num/2)
        }
    }result.unshift(1)
    return result.join("")
}
function binarioDecimal(num){
    result = num.split("");
    for(let i=0;i<result.length;i++){
        result[i] = parseInt(result[i])
    }
    let j = result.length-1
    for(let i=0;i<result.length;i++){
        result[i] = result[i]*(2**j)
        j--
    }
    let decimal = 0;
    for(let i=0;i<result.length;i++){
        decimal += result[i]
    }
    return decimal
}
function decimalHexadecimal(num){
    let hexa = num
    let arr = []
    while(hexa > 0){
        if(hexa < 16){
            arr.push(hexa)
            break
        }
        arr.push(hexa%16)
        hexa = Math.trunc(hexa/16)
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>9){
            switch(arr[i]){
                case 10:
                    arr[i]="A"
                    break
                case 11:
                    arr[i]="B"
                    break
                case 12:
                    arr[i]="C"
                    break 
                case 13:
                    arr[i]="D"
                    break 
                case 14:
                    arr[i]="E"
                    break 
                case 15:
                    arr[i]="F"
                    break 
            }
        }
    }
    return arr.join("")
}
function hexadecimalDecimal(num){
    num = String(num).split("")
    for(let i=0;i<num.length;i++){
        switch(num[i]){
            case "A":
                num[i] = '10'
                break
            case "B":
                num[i] = '11'
                break
            case "C":
                num[i] = '12'
                break
            case "D":
                num[i] = '13'
                break
            case "E":
                num[i] = '14'
                break
            case "F":
                num[i] = '15'
                break
        }
    }
    for(let i=0;i<num.length;i++){
        parseInt(num[i])
    }
    let j = num.length-1
    for(let i=0;i<num.length;i++){
        num[j] = num[j]*Math.pow(16,i)
        j--
    }
    let result = 0;
    for(let i=0;i<num.length;i++){
        result += num[i]
    }
    return result
}
function decimalOctal(num){
    let octal = num
    let result = []
    while(octal>0){
        if(octal>8){
            result.unshift(octal%8)
            octal = octal/8
        }else{
            result.unshift(octal)
            break
        }
    }
    return result.join("")
}
function octalDecimal(num){
    let n = String(num).split("")
    for(num of n){
        num = +num
    }
    let j = n.length-1
    for(let i=0;i<n.length;i++){
        n[i] = n[i]*Math.pow(8,j)
        j--
    }
    return n.join("")
}