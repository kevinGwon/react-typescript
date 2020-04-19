describe('Portfolio | Main', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Login Fail', () => {
    cy.get('form')
      .eq(1)
      .get('input[type="text"]')
      .invoke('val', 'godyel');
    cy.get('form')
      .eq(1)
      .contains('로그인')
      .click();
    cy.wait(1000);
    cy.get('.is-error').should('be.visible');
  });
});
