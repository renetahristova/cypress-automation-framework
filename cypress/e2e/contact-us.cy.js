///<reference types = "Cypress"/>

describe("Test Contact Us form via WebdriverUni", ()=> {
    it("Should be able to submit a Successful submition via Contact Us form", () =>{
        //cy.visit("http://www.webdriveruniversity.com/")
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        //cy.get('#contact-us > .thumbnail').click();
        //cy.get('#contact-us').click();
        cy.get('[name="first_name"]').type("John")
        
    });
    it("Should not be able to submit a Successful submition via Contact Us form as all fields are required", () =>{
      
    });
    
});

