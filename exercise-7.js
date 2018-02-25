
//1. Menyusun Barisan Bintang
var hasil =""
for(var rows1=0; rows1<5; rows1++){
    hasil += "*\n"
}
console.log(hasil)


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var hasil2=""
for(var rows2=0; rows2<5; rows2++){
    for(var i=0; i<5; i++){
        hasil2+= "*"
    }
    hasil2+="\n"
}

console.log(hasil2)

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var hasil3=""
for(var rows3=0; rows3<6; rows3++){
    for(var i=0; i<rows3; i++){
        hasil3+= "*"
    }
    hasil3+="\n"
}

console.log(hasil3)