
function konversiMenit(menit){
    var nampung =""

   if(menit>60 && menit%60<10){
    nampung += parseInt(menit/60)+":0" + (menit%60);
   }
   else if(menit<60){
   nampung += "0:" +  menit
   }
   else{
    nampung += parseInt(menit/60) + ":" + (menit%60)
   } 
   return nampung;
   
}

console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

