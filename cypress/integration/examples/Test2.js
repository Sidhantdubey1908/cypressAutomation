/// <reference types ='Cypress'/>


describe('My Second test suite', function()
{

    it('My second test case', function(){


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        cy.get('.search-keyword').type('ca');

        cy.wait(2000)

        cy.get('div.products').as('ProductLocator')

      
        cy.get('@ProductLocator').find('div.product').eq('2').contains('ADD TO CART').click()
        cy.get('@ProductLocator').find('div.product').each(($el, index, $list)=>{

            const textveg= $el.find('h4.product-name').text()

            if(textveg.includes('Carrot')){
                $el.find('button').click()
            }


        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
      
    })


})


