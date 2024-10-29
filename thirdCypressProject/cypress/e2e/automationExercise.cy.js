import { faker } from '@faker-js/faker';


function generateRandomId(length = 10) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


describe('Automation Exercise', () => {


  xit('Login', () => {
    cy.visit('https://automationexercise.com/')

    cy.login('jusaweb@mailinator.com', 'Pa$$w0rd!')
    cy.get(':nth-child(10) > a').invoke('text').should('contain', 'Angelica Farley')

  })


  it('Cadastro', () => {
    
    let randomID = ''
    randomID = faker.internet.email()
    
    let randomPw = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Hello ' }) // 'Hello IREOXTDWPERQSB'
    
    cy.log(randomID)
    cy.log(randomPw)
    cy.pause()

    cy.visit('https://automationexercise.com/')
    cy.contains('Signup').click();
    cy.get('[data-qa="signup-name"]').type(generateRandomId())
    cy.get('[data-qa="signup-email"]').type(randomID)
    cy.get('[data-qa="signup-button"]').click()

    cy.get('[data-qa="password"]').type('automation')
    cy.get('[data-qa="first_name"]').type('Cypress')
    cy.get('[data-qa="last_name"]').type('Hill')
    cy.get('[data-qa="address"]').type('Rua do senhor')
    cy.get('[data-qa="state"]').type('State')
    cy.get('[data-qa="city"]').type('City')
    cy.get('[data-qa="zipcode"]').type('zipcode')
    cy.get('[data-qa="mobile_number"]').type('123456789')
    cy.get('[data-qa="create-account"]').click()

    cy.get('b').invoke('text').should('contain', 'Account Created!')

  })
})
