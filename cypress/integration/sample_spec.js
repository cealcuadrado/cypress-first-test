describe('My First Test', () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit('https://example.cypress.io');
  });

  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type');
  });

  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
  });

  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
  });

  it('Gets, types and assets', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com');
  });
});

describe('My Failing Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false);
  });
});

