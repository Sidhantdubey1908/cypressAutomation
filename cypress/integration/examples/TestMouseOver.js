/// <reference types ='Cypress'/>


describe('My fourth test suite', function()
{

    it('My fourth test case', function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       // cy.get('div[class="mouse-hover-content"]').invoke('show')
       //for clicking hidden element forefully
       
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')

        
      
      
    })


})


