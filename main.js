let money = prompt("Ваш бюджет на месяц"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {

    coin: money,
    timeData: time,
    expenses:{},
    optionalExpenses : {},
    income : [],
};

let questionOne = prompt("Введите обязательную статью расходов в этом месяце");
let questionTwo = prompt("Во сколько обойдется");

appData.expenses.questionOne = questionTwo;

alert(appData.coin / 30);






