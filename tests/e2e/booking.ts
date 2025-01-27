import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import dayjs from "dayjs";

Given("the employee is logged in", () => {
  window.localStorage.setItem("logedUserEmail", Cypress.env("TEST_USER_EMAIL"));
  window.localStorage.setItem("logedUserToken", Cypress.env("TEST_USER_TOKEN"));
});

Given("the employee is on the desk booking page", () => {
  cy.visit(Cypress.env("HOST"));
});

Given("desk {int} is already booked by another employee", (deskNbr: number) => {
  fetch(
    Cypress.env("BE_HOST") +
      "/api/booking?email=" +
      Cypress.env("TEST_USER_1_EMAIL"),
    {
      method: "POST",
      headers: {
        Authorization: Cypress.env("TEST_USER_1_TOKEN"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deskId: deskNbr,
        date: dayjs().format("YYYY-MM-DD"),
      }),
    },
  );
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .should("not.have.class", "available");
});

Given("desk {int} is available", (deskNbr: number) => {
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .should("have.class", "available");
});

When("the employee selects desk {int}", (deskNbr) => {
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .click();
});

When("the employee books the desk", (deskNbr) => {
  cy.get(".contents").contains("Book").click();
});

Then("desk {int} is not selected", (deskNbr: number) => {
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .should("not.have.class", "selected");
});

Then("it is not possible to book desk", (deskNbr: number) => {
  cy.get(".contents").contains("Book").should("be.disabled");
});

Then("the employee sees the message {string}", (message: string) => {
  cy.contains(message).should("exist");
});

Then("desk {int} is now reserved for the employee", (deskNbr: number) => {
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .should("have.class", "booked");
});
