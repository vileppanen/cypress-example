/// <reference types="cypress" />

context('visual validation - app visual', () => {
  const APP_URL = 'http://localhost:3000'

  it('should store snapshot', () => {
    cy.visit(APP_URL)
    cy.percySnapshot()
  })
})
