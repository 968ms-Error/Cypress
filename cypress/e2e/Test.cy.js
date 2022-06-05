/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Rename', function(){

    it('first test case', function(){
        cy.log("This is first test case")
    })

    it('second test case', function(){
        cy.log("this is second test case")
    })

    it('third test case', function(){
        cy.log("This is third test case")
    })

    it('4th test case', function(){
        cy.log("this is 4th test case")
    })

    it('5th test case', function(){
        cy.log("This is 5th test case")
    })
})