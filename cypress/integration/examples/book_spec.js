context("work books shop", () => {
    it("приложение должно открыться по адресу: http://localhost:9000", () => {
      cy.visit("http://localhost:9000");
    });
    it("добавление главы", () => {
      cy.get('input[name=glava]').type('test').should('have.value', 'test')
      cy.contains('Добавить').click()
    });
    it("добавление заголовка", () => {
      cy.get('input[name=zagolovok]').last().type('testoviy zagolovok', ).should('have.value', 'testoviy zagolovok')
      cy.get('button').last().click()
    });
    it("Изменение состояния главы по чекбосу на Ready", () => {
      cy.get('input[type=checkbox').last().check()
      cy.get('h2').eq(-1).contains('Ready')
    });
    it("Изменение состояния главы по чекбосу на Unready", () => {
        cy.get('input[type=checkbox').last().uncheck()
        cy.get('h2').eq(-1).contains('Not ready')
      });
      it("Откатить изменения", () => {
        cy.contains('Откатить изменения').click()
        cy.get('h2').eq(-1).contains('Ready')
      });
      it("Переключение фильтров Completed", () => {
        cy.contains('COMPLETED').click()
        cy.contains('Ready')
      });
      it("Переключение фильтров UNCOMPLETED", () => {
        cy.get('input[type=checkbox').last().click().click()
        cy.contains('UNCOMPLETED').click()
        cy.contains('Not ready').not()
      });
  });