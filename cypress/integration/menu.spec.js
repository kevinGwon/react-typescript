describe('Portfolio | Main', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.login();
  });
  it('Menu ', () => {
    cy.wait(2000).then(() => {
      const $header = cy.get('#header');

      // Add Fovorite
      cy.openMenu();
      $header
        .get('ul > li:first-child')
        .contains('바로가기')
        .click();

      // Check URL
      cy.url().should('match', /detail/);

      // Remove Fovorite
      cy.openMenu();
      $header
        .get('ul > li:first-child')
        .contains('제거')
        .click();
      cy.closeMenu();

      // Re Add Fovorite
      cy.contains('찜하기').click();

      // Re Add to Check Fovorite
      cy.window().then(win => {
        const id = win.location.search.split('=')[1];
        cy.wait(2000).go('back');
        cy.openMenu();
        $header.get('ul a').should($a => {
          const href = $a.map(
            (i, item) =>
              Cypress.$(item)
                .attr('href')
                .split('=')[1],
          );
          expect(href.get()).contains(id);
        });
        cy.closeMenu();
      });

      // Close Menu
      cy.get('body').should('not.have.class', 'is-active--nav');
    });
  });
});
