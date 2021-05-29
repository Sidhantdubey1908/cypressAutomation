/// <reference types ='Cypress'/>


describe('My fourth test suite', function()
{

    it('My fourth test case', function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       
        cy.get('#opentab').then(function(el){

            const pr = el.prop('href')

            cy.visit(pr)


        })

        
      
      
    })


})


