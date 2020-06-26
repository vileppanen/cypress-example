/// <reference types="cypress" />

/*
 This suite demonstrates more functional approach on verifying some layout expectations.
 However, verifying like this could become cumbersome in the long run.
*/
context('app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  context('login', () => {
    it('should type in login parameters', () => {
      cy.get('input[name="username"]').type('foobar').should('contain.value', 'foobar')
      cy.get('input[name="password"]').type('zoojar').should('contain.value', 'zoojar')
      cy.percySnapshot()
    })
    it('should dispay content after login', () => {
      cy.get('input[name="username"]').type('foobar').should('contain.value', 'foobar')
      cy.get('input[name="password"]').type('zoojar').should('contain.value', 'zoojar')
      cy.get('button#login').click()
      cy.get('div#mainContent').should('exist')
      cy.percySnapshot()
    })
  })
})
