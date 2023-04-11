describe("Main Page Fetch", () => {
    beforeEach(() => {
      cy.intercept('GET', "http://localhost:3001/",{fixture:'tricks.json'}) 
      cy.visit('http://localhost:3000')
  })
       it('should render trick names', () => {
        cy.contains('regular treflip')
        cy.contains('switch heelflip')
        cy.contains('regular frontside 50-50')
       })
       it('should render obstacle types', () => {
        cy.contains('flat ground')
        cy.contains('stairs')
        cy.contains('ledge')
       })
});
