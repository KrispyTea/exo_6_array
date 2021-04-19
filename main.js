// 1
let monTab =["pomme","fraise","melon","citron"]
monTab.pop()
monTab.shift()
monTab.push("grenade")
monTab.unshift("cerise")
monTab[1]= monTab[1].toUpperCase()
monTab.reverse()
console.log(monTab);

let monTab1 = [4, 5, 2, 1, 3]
monTab1.sort()
console.log(monTab1)
monTab1 = monTab1.join("-")
console.log(monTab1);
monTab1 = monTab1.split("-")
console.log(monTab1);

let monTab2 = []
monTab2.push(1, 2, 3, 4, 5, 6, 7 , 8, 9, 10)
console.log(monTab2, monTab2.length);
console.log(monTab2.indexOf(1));
console.log(monTab2.indexOf(2));
console.log(monTab2.indexOf(3));
console.log(monTab2.indexOf(4));
console.log(monTab2.indexOf(5));
console.log(monTab2.indexOf(6));
console.log(monTab2.indexOf(7));
console.log(monTab2.indexOf(8));
console.log(monTab2.indexOf(9));
console.log(monTab2.indexOf(10));
monTab1.splice(0,1)
console.log(monTab2);
let classe = ["Farhad", "Alexis", "Andy", "Ilyas","Mihai","Kev", "Junior","Tania","Loic","William"]
console.log(classe[Math.floor(Math.random()*classe.length)])
classe.splice(classe.indexOf("Tania"),1)
console.log(classe);