/// <reference types ='Cypress'/>


describe('API MOck test', function(){



it('API TESt', function(){

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    

cy.intercept({
//API request
method:'GET',
url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

},{
//api response
    statusCode:200,
    body: [
        {
            "book_name":"RestAssured with Java",
            "isbn":"RSU",
            "aisle":"2301"
        }
    ]

}).as('RetrieveBooks')

cy.get('body > app-root > app-landingpage > div > button').click()
cy.wait('@RetrieveBooks').should(({request, response}),function(){

    cy.get('tr').should('have.length',response.body.length+1)
   


})
cy.get('p').should('have.text','Sorry we have only one book available')



})


})