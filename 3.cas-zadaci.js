
		//kreirati array sa brojevima od 1 do 100

var nekiNiz = [];
var i = 0;
for (i = 1; i <= 100; i++) {
	nekiNiz.push(i);
}
console.log(nekiNiz);
console.log("-----------------");

//jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
var nekiNiz = [23, 43, -8, 77, 0, 23, 15];
var najveciBroj = nekiNiz[0];
for (i = 1; i < nekiNiz.length; i++) {
	if (najveciBroj > nekiNiz[i]) {
		najveciBroj += 0;
	}
	else {
		najveciBroj = nekiNiz[i];
	}
}
console.log(nekiNiz);
console.log(najveciBroj);
console.log("-----------------");

//[[][[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

		//naci najveci broj u nizu

// var nekiNiz = [23, 43, -8, 77, 0, 23, 15];
// var najveci = nekiNiz[0];
// for (i = 1; i < nekiNiz.length; i++) {
// 	if (nekiNiz[i] > najveci) {
// 		najveci = nekiNiz[i];
// 	}
// 	console.log(najveci);
// }

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

		//napravi novi niz dupliranjem vrednosti prvog niza

var prviNiz = [7, 15, 45, 78, 20, 9];
var drugiNiz = [];
for (i = 0; i < prviNiz.length; i++) {
	drugiNiz.push(prviNiz[i] * 2);
}
console.log(prviNiz);
console.log(drugiNiz);
console.log("-----------------");

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

		//razvrstati niz po parnosti u dva nova niza

var nekiNiz = [16, 23, 3, 78, 9, 14, 17];
var parni = [];
var neparni = [];
for (i = 0; i < nekiNiz.length; i++) {
	if (nekiNiz[i] % 2 == 0) {
		parni.push(nekiNiz[i]);
	}
	else {
		neparni.push(nekiNiz[i]);
	}
}
console.log(nekiNiz);
console.log(parni);
console.log(neparni);