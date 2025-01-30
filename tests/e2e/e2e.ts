import { Given, Before } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
  window.localStorage.setItem("logedUserEmail", Cypress.env("TEST_USER_EMAIL"));
  window.localStorage.setItem("logedUserToken", Cypress.env("TEST_USER_TOKEN"));
});

Given("I am logged in and on the main page", () => {
  cy.visit(Cypress.env("HOST"));
});
