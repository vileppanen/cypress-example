/// <reference types="cypress" />

context('visual validation - app', () => {
  const APP_URL = 'http://localhost:3000'

  it('toMatchImageSnapshot - whole page', () => {
    cy.visit(APP_URL)
      .then(() => {
        cy.document()
          .toMatchImageSnapshot({
            imageConfig: {
              createDiffImage: true, // Should a "diff image" be created, can be disabled for performance
              threshold: 0, // Amount in pixels or percentage before snapshot image is invalid
              thresholdType: 'pixel' // Can be either "pixel" or "percent"
            }
          })
      })
  })
})
