context('snapshots', () => {
  it('image snapshot', () => {
    cy.visit('http://localhost:3000')
      .then(() => {
        cy.get('body').toMatchImageSnapshot()
      })
  })
})
