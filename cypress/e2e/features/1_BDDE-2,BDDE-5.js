import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );
});

Given("I am on the duckduckgo.com homepage", () => {
  cy.visit("https://www.duckduckgo.com");
  cy.url().should("include", "duckduckgo");
});

When('I search for "kumquat"', () => {
  cy.get("input#search_form_input_homepage").type("kumquat");
  cy.get("#search_button_homepage").click();
});
Then('"kumquat" appears in search results', () => {
  cy.get("#links .nrn-react-div:first-child() h2 span").contains("kumquat", {
    matchCase: false,
  });
});
