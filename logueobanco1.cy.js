describe('test suite- pruebas pagina de inicion', function(){


        //crearprueba
        it ('transferencia bancaria', function(){

        //Abrir sitio web
        cy.visit('http://zero.webappsecurity.com')


        //Comandos en cyress
        //Todo se inicializan con cy.get
        //loguearse
        cy.get('#signin_button').click()
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(3)
        cy.get('#tf_toAccountId').select(5)
        cy.get('#tf_amount').type("500")
        cy.get('#tf_description').type('Transferencia bancaria')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('contain.text','You successfully submitted your transaction.')


        // cy.get('.active > img').should('be.visible')
        // cy.get('.active > .custom > h4').contains(' Banking')
        // cy.get('.active > img')
    })

})