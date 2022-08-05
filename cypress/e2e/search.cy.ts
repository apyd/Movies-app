import cypress from 'cypress'

const getMovieRequestURL = (searchQuery) => `${Cypress.env('apiBaseRequestURL')}search=${searchQuery}&searchBy=title&`

describe("Search panel", () => {
  it("should search for Test123123 and return no results", () => {
    cy.visit(Cypress.env('appBaseURL'));
    cy.url().should('be.equal', Cypress.env('appSearchURL'));
    cy.get("#search").type("Test123123");
    cy.get("#searchForm").submit();
    cy.url({ decode: true }).should('contain', 'search/Test123123');
    cy.get("#resultsList").children().should('not.exist');
  })
  it("should search for Coco and return 2 results", () => {
    cy.visit(Cypress.env('appBaseURL'));
    cy.url().should('be.equal', Cypress.env('appSearchURL'));
    cy.get("#search").type("Coco");
    cy.intercept(getMovieRequestURL('Coco')).as('searchForMovie');
    cy.get("#searchForm").submit();
    cy.wait('@searchForMovie');
    cy.url({ decode: true }).should('contain', 'search/Coco');
    cy.get("#resultsList").children().should('have.length', 2);
  })
  it("should be replaced with movie view with details when selecting movie from results list and match view selected movie", () => {
    cy.visit(Cypress.env('appBaseURL'));
    cy.intercept(Cypress.env('apiBaseRequestURL')).as('getMovies');
    cy.url().should('be.equal', Cypress.env('appSearchURL'));
    cy.wait('@getMovies');
    cy.get("#resultsList").children().first().click();
    cy.get("#movieDetails");
    cy.get("#movieTitle").contains('fifty shades freed', { matchCase: false });
  })
})