// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Login
Cypress.Commands.add('login', () => {
  const $form = cy.get('form').eq(1);
  $form
    .contains('로그인')
    .click()
    .as('login');
});

// Open menu
Cypress.Commands.add('openMenu', () => {
  const $header = cy.get('#header');
  $header.contains('메뉴 열기').click();
  cy.get('body').should('have.class', 'is-active--nav');
  $header.get('div[class^="DimLayerstyle"]').should('be.visible');
});

// Close Menu
Cypress.Commands.add('closeMenu', () => {
  const $header = cy.get('#header');
  $header.get('div[class^="DimLayerstyle"]').click();
  $header.get('div[class^="DimLayerstyle"]').should('not.be.visible');
});
