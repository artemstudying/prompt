var date = new Date();
var todayYear = date.getFullYear();
var myName = prompt("Как тебя зовут?", '');
var myYearOfBirth = prompt("Какого ты года рождения?", '');
var myAge = todayYear - myYearOfBirth;
var confirmation = confirm("Вывести сообщение с Вашим именем и возрастом?");


if(confirmation == true){
	alert("Меня зовут " + myName + " и мне " + myAge + " лет.");
}else {
	alert("Вы пожелали остаться инкогнито!");
}

//var date = new Date();
//var todayYear = date.getFullYear();
//console.log(todayYear - 1986);