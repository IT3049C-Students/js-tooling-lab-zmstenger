


describe('Rock Paper Scissors', ()=>{


  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.visit(`https://it3049c-students.github.io/js-tooling-lab-zmstenger/`)
    // Type Name
    cy.get('.form-control')
      .type('Zachary Stenger')
    // Press Start Button
    cy.get('.btn-primary').click()
    // Select Choice
    cy.get('.custom-select')
      .select('Rock')
    // Press Go
    cy.get('.btn-success').click()
    // Name equals Zachary Stenger
    cy.get('#game-history').should('contain.text', 'Zachary Stenger')
    // Number of tries should equal 1
    cy.get('#score').should('contain.text', 'Tries: 1')
    })
    
  })
