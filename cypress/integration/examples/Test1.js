/// <reference types ='Cypress'/>


describe('My first test suite', function()
{

    it('My firts test case', function(){


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        cy.get('.search-keyword').type('ca');

        cy.wait(2000)

        cy.get('div.product-image:visible').should('have.length',4)

        cy.get('div.products').as('ProductLocator')

        cy.get('@ProductLocator').find('div.product').should('have.length',4)

        cy.get('@ProductLocator').find('div.product').eq('2').contains('ADD TO CART').click()
        cy.get('@ProductLocator').find('div.product').each(($el, index, $list)=>{

            const textveg= $el.find('h4.product-name').text()

            if(textveg.includes('Carrot')){
                $el.find('button').click()
            }


        })
//handling promise
cy.get('.brand').then(function(logoelement){

cy.log(logoelement.text())

})
      
    })


})


