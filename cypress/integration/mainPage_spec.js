
context('Main Page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/reservations', { fixture: 'example.json' })
    cy.visit('http://localhost:3000/')
      
      
  })

  it('User should see the page title at top of page', () => {
    cy.get('h1')
    .contains('Turing Cafe Reservations')
  })

  it('User should see input form to be able to make a reservation', () => {
    cy.get('form')

  })

  it('User should be able to fill in all four input fields with necessary info', () => {
    cy.get('form')
    cy.get('#name').type('Sheila')
    cy.get('#date').type('15/05')
    cy.get('#time').type('4:45PM')
    cy.get('#number').type('3')
  })

  it('User should see a list of reservation card', () => {
    cy.get('.reservation-book')
    cy.get('.reservation-card')
    cy.get('h2').contains('Marie')
    cy.get('h4').contains('10/50')
    cy.get('h4').contains('4:45')
    cy.get('h4').contains('12')
    
  })

  //user should see list of reservation cards
  //children.length (should have length)
  //to do that, you need to stub the intercept, and put your own data
  //make a fixutre file with a data length of two
  //user should see the make reservation button
  //click
  //check user flow of adding new information to the page






})