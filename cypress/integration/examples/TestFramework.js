/// <reference types ='Cypress'/>

import HomePage from '../PageObjects/HomePage'

import ProductPage from '../PageObjects/ProductPage'

describe('My fourth test suite', function()
{

    before(() => {
        // runs once before all tests in the block

        cy.fixture('example').then(function(data){

            this.data=data


        })
      })
    

    it('My fourth test case', function(){

        const Home = new HomePage()
        const Prod = new ProductPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        //cy.get('form input[name="name"]').type(this.data.name)

        Home.getEditBox().type(this.data.name)
       // cy.get('#exampleFormControlSelect1').select(this.data.gender)
       Home.getGender().select(this.data.gender)

        //cy.get('h4 input[name="name"]').should('have.value','Test')
        Home.getTwoWayDataBinding().should('have.value','Test')

        //cy.get('form input[name="name"]').should('have.attr','minlength','2')
        Home.getEditBox().should('have.attr','minlength','2')

        //cy.get('#inlineRadio3').should('be.disabled')
        Home.getEnterRadio().should('be.disabled')

        //to pause the execution and debug give below line of code
       // cy.pause() or   cy.get('a[href="/angularpractice/shop"]').click().debug()

        //cy.get('a[href="/angularpractice/shop"]').click()
        Home.getShoPage().click()

        this.data.product.forEach(element => {
            cy.selectProd(element)
        });
       // cy.selectProd('Blackberry')
        //cy.selectProd('iphone X')
       
        //cy.get('a[class="nav-link btn btn-primary"]').click()

        Prod.getCheckOut().click()

       

       
        
      
      
    })


})


