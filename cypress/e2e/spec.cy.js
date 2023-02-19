describe('WSG Test', () => {
  it('Visit WSGCoach Portal', () => {
    //go to website
    cy.visit('https://stg.mycareers.coach/')

    //click on Appian sign in
    cy.contains('Appian').click()

    //input login details and sign in
    cy.get('#un').type('wsgcoach1')
    cy.get('#pw').type('appian@Mar2022')
    cy.contains('Sign In').click()

    //conduct search based on AC1
    cy.get('#17bf758c24c7436111321806233f8791').type('john') //search by name
    cy.contains('Search').click()
    // cy.expect(get('table').contains('td','John')).to.has('John')
    //to loop through table and check that all tr contains at least one td which contains john
    //to loop through table and check that theres no empty td

    cy.get('#17bf758c24c7436111321806233f8791').type('{selectall}{backspace}') //search by NRIC
    cy.contains('Search').click()
    //should only return one result

    cy.get('#17bf758c24c7436111321806233f8791').type('{selectall}{backspace}') //search by contact number
    cy.contains('Search').click()
    //

    cy.get('#17bf758c24c7436111321806233f8791').type('{selectall}{backspace}@gmail.com') //search by email
    cy.contains('Search').click()


  })
})