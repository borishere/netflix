describe('Netflix app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:9000');
  });

  it('Redirect to search', () => {
    cy.url().should('eq', 'http://localhost:9000/search');
  });

  it('Search movie', () => {
    cy.get('input.search-input')
      .should('be.empty')
      .type('interstellar');

    cy.get('.movies-list').should('have.length', 1);
    cy.get('.search-btn').click();
    cy.get('.movie-title').should('be.visible');
    cy.get('.movie-item').click();

    cy.get('.movie-details-title')
      .should('be.visible')
      .should('have.text', 'Interstellar');

    cy.get('.movie-details-year').should('be.visible');
    cy.get('.movie-details-runtime').should('be.visible');
    cy.get('.movie-details-description').should('be.visible');
  });
});