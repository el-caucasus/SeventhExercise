
'use strict';

// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let allServicePrices;
// let fullPrice;
// let servicePercentPrice;
// let rollback = 10;
// let service1;
// let service2;

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 10,
    service1: '',
    service2: '',
    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num));
    },


    logger: function () {
        // что тут должно быть?
    },

    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

        do {
            appData.screenPrice = +prompt("Сколько будет стоить данная работа?", 12345);
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    },

    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let price = 0;

            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Отправка формы");
            }

            do {
                price = +prompt("Сколько это будет стоить?", 3456);
            } while (!isNumber(price))

            sum += +price;
        }
        return sum;

    },

    getFullPrice: function () {
        return appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000) {
            return "Даем скидку в 5%";
        } else if (price >= 0) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так";
        }

    },

    start: function () {

        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();

    },


}

for (const key in appData) {
    console.log(key, appData[key]);
}

appData.start();


// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);


