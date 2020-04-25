describe('Portfolio | Main', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.login();
  });
  it('Menu ', () => {
    cy.wait(2000).then(() => {
      const $header = cy.get('#header');
      cy.menu();
      $header
        .get('ul > li:first-child')
        .contains('바로가기')
        .click();
      cy.url().should('match', /detail/);
      cy.menu();
      $header
        .get('ul > li:first-child')
        .contains('제거')
        .click();
      $header.get('div[class^="DimLayerstyle"]').click();
      cy.contains('찜하기').click();
      cy.window().then(win => {
        const id = win.location.search.split('=')[1];
        cy.wait(2000).go('back');
        cy.menu();
        $header.get('ul a').should($a => {
          const href = $a.map(
            (i, item) =>
              Cypress.$(item)
                .attr('href')
                .split('=')[1],
          );
          expect(href.get()).contains(id);
        });
      });
      // cy.get('body').should('not.have.class', 'is-active--nav');
    });
  });
});
