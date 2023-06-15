///<reference types = "Cypress"/>

describe("Test Contact Us form via Automation Test Store", ()=> {
    it("Should be able to submit a Successful submition via Contact Us form", () =>{
       cy.visit("https://automationteststore.com/")
       cy.get('.info_links_footer > :nth-child(5) > a').click();
       cy.get('#ContactUsFrm_first_name').type("John");
       cy.get('#ContactUsFrm_email').type("john@email.com");
       cy.get('#ContactUsFrm_enquiry').type("lorem ipsum");
       cy.get('.col-md-6 > .btn').click();
    });
    
});

