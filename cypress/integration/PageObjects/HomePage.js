class HomePage{

    getEditBox(){

        return cy.get('form input[name="name"]')
    }

    getTwoWayDataBinding(){
         return cy.get('h4 input[name="name"]')
    }

    getGender(){

        return cy.get('#exampleFormControlSelect1')
    }

    getEnterRadio(){

        return cy.get('#inlineRadio3')
    }

    getShoPage(){

        return  cy.get('a[href="/angularpractice/shop"]')
    }
}

export default HomePage