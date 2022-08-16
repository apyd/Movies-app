import cypress from 'cypress';

describe('Add movie modal', () => {
  it("should be visible when 'Add movie' button clicked", () => {
    cy.visit(Cypress.env('appBaseURL'));
    cy.url().should('be.equal', Cypress.env('appSearchURL'));
    cy.get('#openAddMovieModal').click();
    cy.get('#modal');
  });
  it('should be closed on close button click', () => {
    cy.visit(Cypress.env('appBaseURL'));
    cy.url().should('be.equal', Cypress.env('appSearchURL'));
    cy.get('#openAddMovieModal').click();
    cy.get('#modal');
    cy.get('#closeModal').click();
    cy.get('#modal').should('not.exist');
  });
});
