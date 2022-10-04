Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
  cy.get('#firstName').type ('Juliana')
  cy.get('#lastName').type ('Rocha')
  cy.get('#email').type ('ju@exemplo.com')
  cy.get('#open-text-area').type ('Teste')
  cy.get('button[type="submit"]').click() 
})