describe('Portfolio | Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Login - Fail', () => {
    // ID input
    cy.get('form')
      .eq(1)
      .get('input[type="text"]')
      .invoke('val', 'godyel');

    // Click Login
    cy.get('form')
      .eq(1)
      .contains('로그인')
      .click();

    // Wait
    cy.wait(1000);

    // Check Fail
    cy.get('.is-error').should('be.visible');
  });

  it('Login - Success', () => {
    let session = null;

    // Get Token
    cy.request('GET', `${Cypress.env('getToken')}${Cypress.env('key')}`).as(
      'getToken',
    );

    // Wait to Token
    cy.get('@getToken').should(res => {
      if (res.status !== 200) return false;

      // Check status - 200
      expect(res).to.have.property('status', 200);

      // Check Connect
      cy.request('POST', `${Cypress.env('getLogin')}${Cypress.env('key')}`, {
        username: Cypress.env('id'),
        password: Cypress.env('password'),
        request_token: res.body.request_token,
      }).should(res => {
        expect(res).to.have.property('status', 200);
      });

      // Check Session
      cy.request('POST', `${Cypress.env('getSession')}${Cypress.env('key')}`, {
        request_token: res.body.request_token,
      })
        .should(res => {
          expect(res).to.have.property('status', 200);
        })
        .as('getAccount');
    });

    // Wait to Account
    cy.get('@getAccount').should(res => {
      if (session === null) {
        session = res.body.session_id;
      }

      // Check status - 200
      expect(res).to.have.property('status', 200);
      cy.request('GET', `${Cypress.env('getAccount')}${session}`);
    });

    // Login
    cy.login();
  });
});
