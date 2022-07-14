/// <reference types="cypress" />


describe('Rock Paper Scissors', ()=>{


  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.visit(`https://it3049c-students.github.io/js-tooling-lab-zmstenger/`)
    // Type Name
    cy.get('.form-control')
      .type('Zachary Stenger')
    // Select Choice
    cy.get('.custom-select')
      .select('rock')
    // Press Go
    cy.get('.btn-success').click()
    //cy.get()

    })
    
  })
