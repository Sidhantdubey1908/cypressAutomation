/// <reference types ='Cypress'/>


describe('My fourth test suite', function()
{

    it('My fourth test case', function(){


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#product tbody tr td:nth-child(2)').each(($el, index, $list)=>{

           

            //if($el.text()=='Master Selenium Automation in simple Python Language'){
            //    $el.click()
           // }

           const text = $el.text()

           if(text.includes('Master Selenium Automation in simple Python Language')){

            cy.get('#product tbody tr td:nth-child(2)').eq(index).next().then(function(price){

                const pr = price.text()

                expect(pr).to.equal('25')



            })
           }


        })
      
    })


})


