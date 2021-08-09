/// <reference types="cypress" />

describe('My First Test', () => {
  before('', () => {
    cy.visit('http://localhost:1667/#/');
  });
  
  it('Sign in for existing user', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('user98@hotmail.com');
    cy.get(':nth-child(2) > .form-control').type('Userpass1');
    cy.get('.btn').click();
    cy.get('.navbar').contains('user98').should('exist');
  });
});

