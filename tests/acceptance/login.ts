import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("the employee is on the login page", () => {
  cy.visit(Cypress.env("host"));
});

Given("the employee is logged in", () => {
  window.localStorage.setItem("logedUserEmail", Cypress.env("TEST_USER_EMAIL"));
  window.localStorage.setItem("logedUserToken", Cypress.env("TEST_USER_TOKEN"));
});

Given("the employee is on the desk booking page", () => {
  cy.visit(Cypress.env("host"));
});

When("the employee enters their correct email", () => {
  cy.get('input[placeholder="Email"]').type(Cypress.env("TEST_USER_EMAIL"));
});

When("the employee enters their correct password", () => {
  cy.get('input[placeholder="Password"]').type(
    Cypress.env("TEST_USER_PASSWORD"),
  );
});

When("the employee tries to login", () => {
  cy.get("button").contains("Login").click();
});

When("the employee navigates to the login page", () => {
  cy.visit(Cypress.env("host") + "/login");
});

When("the employee enters an incorrect email", () => {
  cy.get('input[placeholder="Email"]').type("email@incorrect.com");
});

When("the employee enters an incorrect password", () => {
  cy.get('input[placeholder="Password"]').type("incorrectPassword");
});

When("the employee logs out", () => {
  cy.get("button").contains(Cypress.env("TEST_USER_EMAIL")).click();
  cy.get(".MuiButtonBase-root").contains("Logout").click();
});

Then("the employee is redirected to the Desk Booking page", () => {
  cy.location("pathname").should("eq", "/");
});

Then("the employee is logged into their account", () => {
  cy.location("pathname").should("eq", "/");
  cy.get("button").contains(Cypress.env("TEST_USER_EMAIL")).should("exist");
});

Then("the employee remains on the login page", () => {
  cy.location("pathname").should("eq", "/login");
});

Then("the employee is not logged into their account", () => {
  cy.get("button").contains(Cypress.env("TEST_USER_EMAIL")).should("not.exist");
});

Then("a login error message is displayed", () => {});

Then("the employee is redirected to the login page", () => {
  cy.location("pathname").should("eq", "/login");
});
