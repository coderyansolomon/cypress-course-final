import { default as ItemsAccordion } from "@/app/components/Accordion"

const items = [
  {
    summary: 'Fundamental 1) Describe blocks',
    details: `Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing. 
    The second is a callback function for your actually tests within that block`,
    id: '1',
  },
  {
      summary: 'Fundamental 2) It blocks',
      details: `Within your describe block, you will also have it blocks. 
      It blocks will be single tests within an overall test file. 
      The API for it() is the same as describe.
      The first argument is the title of an individual test, 
      and the second argument is a callback function containing your test code`,
      id: '2',
    },
  {
      summary: 'Fundamental 3) Commands & interacting with elements',
      details: `Cypress gives you various commands to help you test. 
      You can use these commands on the cy object.
      For example, cy.visit('/') will navigate the cypress runner to your home page.
      You have various other commands like cy.click(), cy.type(), cy.check(), etc. *docs
      NOTE: You must have your dev server running for Cypress to work.
      NOTE: Cypress has an async nature *docs`,
      id: '3',
    },
]

describe('Accordion.cy.jsx', () => {
  it('Items accordion', () => {
    cy.mount(<ItemsAccordion items={items} />)
    cy.getDataTest('accordion-wrapper').within(() => {
        cy.get('[data-test^="accordion-item"]').should('have.length', 3)
    })

    cy.contains('Your tests will exist in a describe block').should('not.be.visible')
    cy.getDataTest('accordion-item-1').within(() => cy.get('[role=button]').click())
    cy.contains('Your tests will exist in a describe block').should('be.visible')
    cy.getDataTest('accordion-item-1').within(() => cy.get('[role=button]').click())
    cy.contains('Your tests will exist in a describe block').should('not.be.visible')
  })
})