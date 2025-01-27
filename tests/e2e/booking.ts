import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import dayjs from "dayjs";

const bookDesk = async (deskNbr: number) => {
  const res = await fetch(
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
  console.error("Response: " + res);
};

Given("the employee is logged in", () => {
  window.localStorage.setItem("logedUserEmail", Cypress.env("TEST_USER_EMAIL"));
  window.localStorage.setItem("logedUserToken", Cypress.env("TEST_USER_TOKEN"));
});

Given("the employee is on the desk booking page", () => {
  cy.visit(Cypress.env("HOST"));
});

Given("desk {int} is already booked by another employee", (deskNbr: number) => {
  bookDesk(deskNbr);
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .should("not.have.class", "available");
});

When("the employee selects desk {int}", (deskNbr) => {
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .click();
});

Then("desk {int} is not selected", (deskNbr: number) => {
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .should("not.have.class", "selected");
});
