///<reference types = "Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
    it.only("Should be able to submit a Successful submition via Contact Us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //-----
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should('include', 'Contact-Us');
        //-----
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('[name="email"]').type("john@email.com")
        cy.get('textarea.feedback-input').type("This is some comment.")
        cy.get('[type="submit"]').click()
        cy.get('h1').should("have.text", "Thank You for your Message!")
    });
    it("Should not be able to submit a Successful submition via Contact Us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("John")
        cy.get('[name="last_name"]').type("Doe")
        cy.get('textarea.feedback-input').type("This is some comment.")
        cy.get('[type="submit"]').click();
        cy.get('body').contains("Error: all fields are required")
    });

});

