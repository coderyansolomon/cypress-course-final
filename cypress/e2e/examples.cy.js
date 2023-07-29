describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })
    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click();
        cy.location("pathname").should("equal", "/")

        cy.getDataTest('nav-overview').click();
        cy.location("pathname").should("equal", "/overview")

        cy.getDataTest('nav-fundamentals').click();
        cy.location("pathname").should("equal", "/fundamentals")

        cy.getDataTest('nav-examples').click()
        cy.location("pathname").should("equal", "/examples")
    })
    it('intercepts', () => {
        cy.intercept("POST", 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })
    it.only('grudges', () => {
        cy.contains(/add some grudges/i)

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })

        cy.getDataTest('clear-button').should('not.exist')

        cy.getDataTest('grudge-list-title').should('have.text', 'Add Some Grudges')

        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('some grudge')
        })
        cy.getDataTest('add-grudge-button').click()

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.getDataTest('grudge-list-title').should('have.text', 'Grudges')

        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('number 2')
        })
        cy.getDataTest('add-grudge-button').click()

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 2)
            cy.get('li').its(0).should('contains.text', 'some grudge')
        })

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click()
            })
        })

        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.getDataTest('clear-button').click()
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })

    })
})