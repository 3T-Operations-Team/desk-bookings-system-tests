import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  window.localStorage.setItem("logedUserEmail", Cypress.env("TEST_USER_EMAIL"));
  window.localStorage.setItem("logedUserToken", Cypress.env("TEST_USER_TOKEN"));
});

Given("I am logged in and on the main page", () => {
  cy.visit(Cypress.env("HOST"));
});

Given("I select an available desk", () => {
  cy.get(".desk").contains("Flex 27").click();
});

When("I make a booking", () => {
  cy.get(".contents").contains("Book").click();
});

Then("I should receive a booking confirmation", () => {
  cy.contains("Desk successfully booked").should("exist");
});

When("I cancel a booking", () => {
  cy.get(".contents").contains("Cancel Booking").click();
});

Then("I should receive a booking cancelation confirmation", () => {
  cy.contains("Booking canceled").should("exist");
});
