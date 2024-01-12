describe('Покупка аватара', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/'); // Заходим на сайт 
        cy.get(':nth-child(1) > .auth__input').type('tarantov2244@gmail.com'); // Вводим логин
        cy.get('#password').type('Texet1234'); // Вводим пароль
        cy.get('.auth__button').click(); // Нажимаем кнопку войти
        cy.get('.header__btns > [href="/shop"]').click(); // Заходим в магазин 
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // Каждый раз выбераем разного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555 5555 5555 5557'); // Вводим номер карты 
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); // Вводим срок действия карты 
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Вводим cvv карты 
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Misha Tarantov'); // Вводим имя владельца карты 
        cy.get('.pay-btn').click(); // Нажимаем кнопку отплатить
        cy.get('#cardnumber').type('56456'); // Вводим код смс 
        cy.get('.payment__submit-button').click(); // Нажимаем кнопку отплатить
        cy.get('.pay__select-block').should('be.visible'); //Проверка что видим поле суммы заказа 
        cy.get('.payment__padding').should('be.visible'); //Проверка поле с успешной оплатой видимо 
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //Совпадение текста успешной оплаты 
        cy.get('.payment__adv').click(); // Нажимаем кнопку вернуться в магазин 
    })
})

