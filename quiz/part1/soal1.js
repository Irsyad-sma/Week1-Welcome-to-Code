//Soal 1:
//js
// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. 
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), 
// yaitu nama dan peran. Variabel peran harus memiliki isi data, 
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". 
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. 
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel 
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)


let nama = "", peran = "Ksatria,Tabib,Penyihir"; //Berisi Variable / Var

function Proxytia(nama,peran){
    if(!nama){ // jika tidak ada nama
        //case 1 berhenti
        console.log ("Anda belum memperkenalkan diri"); 
        return; // case 1 lolos
    }
    if(!peran){ // jika tidak ada peran
         //case 2 berhenti 
        console.log ("Pilih peran anda untuk memulai perjalanan")
        //lolos case 2
        return; 
    }   

    if(peran === "Ksatria"){
        // case Ksatria 
        console.log(
            "Hai Ksatria "+ 
            nama +
            ", Temukan senjata mu di Blacksmith dan basmi mosnter di dekat gerbang" )
    }else if (peran === "Tabib"){
        // case Tabib
        console.log("Hai Tabib "+
            nama +
            ", Pelajari pemulihan di Capel")
    }else if (peran === "Penyihir"){
        // case Penyihir
        console.log("Hai Penyihir " +
            nama +
            ", Pergi ke Perpustakaan temukan Grimoire mu")
    }else{
        //case Peran tidak terdaftar
        console.log("Hai "+
            nama + 
            ", Pergi ke Kastil Perna mu belum terdaftar")
    }
}
//code disini gunakan console.log untuk outputnya//
console.log(Proxytia("Ken","Ksatria"));
// value dari var nama dan peran(di dalam kurung) setelah pemanggilan function
