describe('Автотесты на форму логина', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Заходим на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); //Вводим email
        cy.get('#pass').type('iLoveqastudio1'); //Вводим пароль
        cy.get('#loginButton').click(); //Клик по Войти 
        cy.get('#messageHeader').should('be.visible'); //Проверка что текст виден  
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Совпадение текста  
    })

it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Заходим на сайт 
        cy.get('#forgotEmailButton').click(); //Клик по Забыли пароль 
        cy.get('#mailForgot').type('qa@studio.ru'); // Вводи email 
        cy.get('#restoreEmailButton').click(); // Отправляем код
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка что есть крестик 
    })
it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Заходим на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); //Вводим email
        cy.get('#pass').type('iLoveqastudio5'); //Вводим пароль
        cy.get('#loginButton').click(); //Клик по Войти  
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка что есть крестик  
    })
it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Заходим на сайт 
        cy.get('#mail').type('qa@studio.ru'); //Вводим email
        cy.get('#pass').type('iLoveqastudio1'); //Вводим пароль
        cy.get('#loginButton').click(); //Клик по Войти  
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка что есть крестик  
    })
it('Валидация поля email', function () {
        cy.visit('https://login.qa.studio/'); //Заходим на сайт 
        cy.get('#mail').type('qastudio.ru'); //Вводим email без @
        cy.get('#pass').type('iLoveqastudio1'); //Вводим пароль
        cy.get('#loginButton').click(); //Клик по Войти  
        cy.get('#messageHeader').should('be.visible'); //Проверка что текст виден  
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Совпадение текста
    })
it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Заходим на сайт 
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Вводим email 
        cy.get('#pass').type('iLoveqastudio1'); //Вводим пароль
        cy.get('#loginButton').click(); //Клик по Войти  
        cy.get('#messageHeader').should('be.visible'); //Проверка что текст виден  
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверка что есть крестик  
    })
})