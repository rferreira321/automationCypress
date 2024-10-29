describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')

    cy.login('jusaweb@mailinator.com', 'Pa$$w0rd!')

  })


  it('not passes', () => {
    cy.visit('https://automationexercise.com/');
    cy.contains('Signup').click();
    cy.get('[data-qa="login-email"]').type('jusaweb@mailinator.com');
    cy.get('[data-qa="login-password"]').type('Pa$$wdas0rd!');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.login-form > form > p').invoke('text').should('contain', 'password is incorrect');

  })

})