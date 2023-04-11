describe('homepage', () => {
    beforeEach(() => {
     cy.visit('http://localhost:3000')
    })
    it('should take us to the homepage', () => {
      cy.get('h1')
      cy.contains('Sick Trick Wish List')
    })
    it('should have tricks', () => {
        cy.get('.tricks-container').contains('regular treflip')
    })
  })