var nama = "Lalala"
var peran = "ksatria"
var peranL = peran.toLowerCase()

if(nama===""){
    console.log("Nama harus diisi!")
}
else if(nama!=="" && peranL===""){
    console.log("Halo " + nama+", Pilih peranmu untuk memulai game!")
}
else if(nama!=="" && peranL==="ksatria"){
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Halo " + peran + " " + nama +", kamu dapat menyerang dengan senjatamu!")
}
else if(nama!=="" && peranL==="tabib"){
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Halo " + peran + " " +nama +", kamu akan membantu temanmu yang terluka.")
}
else if(nama!=="" && peranL==="penyihir"){
    console.log("Selamat datang di Dunia Proxytia, " + nama)
    console.log("Halo " + peran + " " + nama +", ciptakan keajaiban yang membantuk kemenanganmu!")
}
else{
    console.log("Peran tidak ada. Tulis tabib, penyihir, atau ksatria sebagai peran")
}
