describe('Portfolio | Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Login - Fail', () => {
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
  it('Login - Success', () => {
    let session = null;
    cy.request('GET', `${Cypress.env('getToken')}${Cypress.env('key')}`).as(
      'getToken',
    );
    cy.get('@getToken').should(res => {
      if (res.status !== 200) return false;
      expect(res).to.have.property('status', 200);

      // Connect
      cy.request('POST', `${Cypress.env('getLogin')}${Cypress.env('key')}`, {
        username: Cypress.env('id'),
        password: Cypress.env('password'),
        request_token: res.body.request_token,
      }).should(res => {
        expect(res).to.have.property('status', 200);
      });

      // Session
      cy.request('POST', `${Cypress.env('getSession')}${Cypress.env('key')}`, {
        request_token: res.body.request_token,
      })
        .should(res => {
          expect(res).to.have.property('status', 200);
        })
        .as('getAccount');
    });

    // Account
    cy.get('@getAccount').should(res => {
      if (session === null) {
        session = res.body.session_id;
      }
      expect(res).to.have.property('status', 200);
      cy.request('GET', `${Cypress.env('getAccount')}${session}`);
    });

    // Login
    cy.login();
  });
});
