import { faker } from '@faker-js/faker';

describe('OctoPerf', () => {
  it('Cadastro', () => {

    let username = faker.internet.userName()
    let pw = faker.internet.password()
    let firstName = faker.internet.userName({ firstName: 'Jeanne' })
    let lastName = faker.internet.userName({ firstName: 'Doen' })


    cy.visit('https://petstore.octoperf.com/')

    cy.get('a').click()
    cy.contains('Sign In').click()
    cy.get('#Catalog > a').click()

    cy.get('[name|="username"]').type(username)
    cy.get('[name|="password"]').type(pw)
    cy.get('[name|="repeatedPassword"]').type(pw)
    cy.get('[name|="account.firstName"]').type(firstName)
    cy.get('[name|="account.lastName"]').type(lastName)
    cy.get('[name|="account.email"]').type(faker.internet.email())
    cy.get('[name|="account.phone"]').type(faker.phone.number())
    cy.get('[name|="account.address1"]').type(faker.address.street())
    cy.get('[name|="account.address2"]').type(faker.address.street())
    cy.get('[name|="account.city"]').type(faker.address.city())
    cy.get('[name|="account.state"]').type(faker.address.state())
    cy.get('[name|="account.zip"]').type(faker.address.zipCode())
    cy.get('[name|="account.country"]').type(faker.address.country())
    cy.get('[name|="newAccount"]').click()

    cy.contains('Sign In').click()
    cy.get('[name|="username"]').type(username)
    cy.get('[name="password"]').clear().type(pw)
    cy.get('[name="signon"]').click()

    cy.get('#WelcomeContent').invoke('text').should('contain', firstName, lastName)
    
  })
})