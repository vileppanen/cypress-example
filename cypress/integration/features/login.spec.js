context('features', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  context('login', () => {
    it('should type in login parameters', () => {
      cy.get('input[name="username"]').type('foobar').should('contain.value', 'foobar')
      cy.get('input[name="password"]').type('zoojar').should('contain.value', 'zoojar')
    })
    it('should dispay content after login', () => {
      cy.get('input[name="username"]').type('foobar').should('contain.value', 'foobar')
      cy.get('input[name="password"]').type('zoojar').should('contain.value', 'zoojar')
      cy.get('button#login').click()
      cy.get('div#mainContent').should('exist')
    })
  })
})
