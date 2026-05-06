function bankomat(){
    let name = Alex;
    let money = 10000;
    let account = 7777;

    let userName = prompt("Как вас зовут? ");
    if (userName !== name) {
        return alert("Пользователь не найден, досвидули"); 
    }
}

let userAcc = +prompt("Номер счета? ");
if (userAcc !== account) {
    return alert("Пользователь не найден, досвидули");
}


let howmuch = +prompt("Сколько обналичить? ")
if (howmuch <= money){
    money -= howmuch;
    alert("Все отлично");
    alert(`Снял ${howmuch}, осталось ${money}`);
}
else{
   alert("Недостаточно средств") 
}

bankomat()

function club() {
    let userName = prompt("Как вас зовут? ");
    let age = +prompt("Сколько вам лет? ");
    let cash = +prompt("Сколько у вас денег в кармане? ");

    let truename = userName.toLowerCase().startsWith('a');
    let trueage = age >= 20 && age <= 40;
    let truecash = cash > 100;

    if (truename && trueage && truecash) {
        alert("Добро пожаловать в клуб!");
    }
    else{
        alert("Вас не приглашали!")
    }
}