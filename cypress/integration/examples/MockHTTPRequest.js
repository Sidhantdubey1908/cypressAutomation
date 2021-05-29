/// <reference types ='Cypress'/>


describe('HTTP MOck test', function(){



it('HTTP TESt', function(){

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')

    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{

    req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra'
    req.continue((res)=>{
expect(res.statusCode).to.equal(200)

    })

    




    }).as('Dummy')
    
    cy.get('.btn-primary').click()
    cy.wait('@Dummy')



})


})