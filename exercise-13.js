function xo(str){
    var x = ""
    var o = ""
    for(i=0; i<str.length; i++){
        if(str.charAt(i)=="x"){
            x+=1;
            
        }
        else if(str.charAt(i)=="o"){
            o+=1;
            
        } 
    }
    if(x===o){
        return true
    }
    else if(x!==o){
        return false 
    }
    
}

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true