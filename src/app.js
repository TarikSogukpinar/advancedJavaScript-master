let sayi1 = 10;
sayi1 = "Engin";
let student = { id: 1, name: "Engin" };
//console.log(student);

function save(puan = 15, ogrenci) {
    console.log(ogrenci.name + " :  " + puan);
}
save(undefined, student);


let students = ["Engin demiroğ", "Tarık", "Ledun", "Yasin"];

console.log(students);

let students2 = [student, { id: 2 }]