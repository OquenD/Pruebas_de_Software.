//Definir el nombre de la suite de pruebas
describe('test suite- pruebas pagina de inicion', function()
{
    //crearprueba
    it ('validacion encabezado superior', function(){
        //Abrir sitio web
        cy.visit('http://zero.webappsecurity.com')
        //Comandos en cyress
        //Todo se inicializan con cy.get
        cy.get('.active > img').should('be.visible')
        cy.get('.active > .custom > h4').contains(' Banking')
        cy.get('.active > img')
    })

})