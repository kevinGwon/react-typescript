describe('Portfolio | Main', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.login();
  });
  it('Main', () => {
    cy.wait(2000).then(() => {
      cy.contains('button', 'action').should('have.class', 'is-active');
      cy.contains('button', 'animation')
        .click()
        .should('have.class', 'is-active');
      cy.get('footer').should('have.class', 'is-toggle');
      cy.contains('button', 'romance')
        .click()
        .should('have.class', 'is-active');
      cy.get('footer').should('not.have.class', 'is-toggle');
      cy.get('.swiper-container-romance')
        .find('a')
        .eq(0)
        .click();
      cy.url().should('match', /detail/);
      cy.wait(2000).go('back');
      cy.contains('button', 'romance')
        .wait(1000)
        .should('have.class', 'is-active');
    });
  });
});
