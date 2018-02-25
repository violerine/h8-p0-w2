//SOAL 1 WHILE
//LOOPING PERTAMA 

var text=""
var x=2
while(x<21){
   text += x + " - I love coding \n"
   x++;
}
console.log("while Loop") //cuma namain 
console.log(text)

//LOOPING KEDUA

var text=""
var x=20
while(x>1){
    text += x + " - I will become fullstack developer \n"
    x--;
 }
 console.log(text)

 //SOAL 2 FOR LOOP
 //LOOPING PERTAMA 

 var text2 =""
 for(var i=1; i<21; i++){
     text2 += i + " I love coding \n"
 }
 console.log("For Loop") //cuma namain
 console.log(text2)

 var text3=""
 for(var i=20; i>0; i--){
     text3 += i + " I will become fullstack developer \n"
 }

 console.log(text3)

//  SOAL 3 ANGKA GANJIL GENAP 
var hasil=""
for(var j=1; j<101; j++){
    if(j%2==0){
        hasil+= "GENAP \n" 
    }
    else if(j%2!==0){
        hasil+="GANJIL \n"
    }
}

console.log(hasil)

//-------------------ke2

var hasil2=""
for(var j=1; j<101; j+=2){
    if(j%3==0){
        hasil2 += j + " kelipatan 3 \n" 
    }
    else if(j%3!==0){
        hasil2+="\n"
    }
}

console.log(hasil2)

//  //-------------------k3
var hasil3=""
for(var j=1; j<101; j+=5){
    if(j%6==0){
        hasil3+= j +" kelipatan 6\n" 
    }
    else if(j%6!==0){
        hasil3 += "\n"
    }
}

console.log(hasil3)

//-------------------k4
var hasil4=""
for(var j=1; j<101; j+=9){
    if(j%10==0){
        hasil4 += j+ " kelipatan 10 \n" 
    }
    else if(j%10!==0){
        hasil4 +="\n"
    }
}

console.log(hasil4)