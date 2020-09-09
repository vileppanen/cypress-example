context('snapshots', () => {
  it('text snapshot', () => {
    cy.visit('http://localhost:3000')
      .then(() => {
        cy.get('body').toMatchSnapshot()
      })
  })
})
