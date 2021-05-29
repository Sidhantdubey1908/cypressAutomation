/// <reference types ='Cypress'/>
import 'cypress-iframe'

describe('My fourth test suite', function()
{

    it('My fourth test case', function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       // cy.get('div[class="mouse-hover-content"]').invoke('show')
       //for clicking hidden element forefully
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="#/mentorship"]').eq('0').click()

        
      
      
    })


})


