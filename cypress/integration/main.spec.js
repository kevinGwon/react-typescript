describe('Portfolio | Main', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.login();
  });
  it('Main', () => {
    cy.wait(2000).then(() => {
      // Check active class [Action Type]
      cy.contains('button', 'action').should('have.class', 'is-active');

      // Click and Check [animation Type]
      cy.contains('button', 'animation')
        .click()
        .should('have.class', 'is-active');

      // Check active class [footer]
      cy.get('footer').should('have.class', 'is-toggle');

      // Click and Check [romance Type]
      cy.contains('button', 'romance')
        .click()
        .should('have.class', 'is-active');

      // Check active class [footer]
      cy.get('footer').should('not.have.class', 'is-toggle');

      // Move page to detail
      cy.get('.swiper-container-romance')
        .find('a')
        .eq(0)
        .click();

      // Check URL
      cy.url().should('match', /detail/);

      // Go Back
      cy.wait(2000).go('back');

      // Re Check [romance Type]
      cy.contains('button', 'romance')
        .wait(1000)
        .should('have.class', 'is-active');
    });
  });
});
