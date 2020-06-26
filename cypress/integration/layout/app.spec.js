/// <reference types="cypress" />

/*
 This suite demonstrates more functional approach on verifying some layout expectations.
 However, verifying like this could become cumbersome in the long run.
*/
context('demo-app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context('app layout', () => {
    context('when resolution 1440x900', () => {
      const VIEWPORT_WIDTH = 1440
      const VIEWPORT_HEIGHT = 900
      context('app bar', () => {
        const APP_BAR = 'header.App-bar'
        beforeEach(() => {
          cy.viewport(VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
        })
        it('should exist', () => {
          cy.get(APP_BAR).should('exist')
        })
        it('should be on top', () => {
          cy.get(APP_BAR)
            .then($el => $el[0].getBoundingClientRect())
            .should('contain', { top: 0, left: 0 })
        })
        it('should be of full width', () => {
          cy.get(APP_BAR)
            .then($el => $el[0].getBoundingClientRect())
            .should('contain', { width: VIEWPORT_WIDTH })
        })
        it('should be of height 36px', () => {
          cy.get(APP_BAR)
            .then($el => $el[0].getBoundingClientRect())
            .should('contain', { height: 36 })
        })
        context('logo', () => {
          const LOGO = 'img.App-logo'
          it('should not overflow from app bar', () => {
            cy.get(LOGO)
              .then($el => $el[0].getBoundingClientRect())
              .should('contain', { height: 36 })
          })
        })
      })
    })
  })
})
