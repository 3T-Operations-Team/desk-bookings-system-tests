import {
  When,
  Then,
  Given,
  Before,
} from "@badeball/cypress-cucumber-preprocessor";
import dayjs from "dayjs";

const bookDesk = async (deskNbr: number) => {
  const res: any = await fetch(
    Cypress.env("CYPRESS_BE_HOST") +
      "/api/booking/?email=" +
      Cypress.env("CYPRESS_TEST_USER_1_EMAIL"),
    {
      method: "POST",
      headers: { Authorization: Cypress.env("CYPRESS_TEST_USER_1_TOKEN") },
      body: `{"deskId": ${deskNbr}, "date": "${dayjs().format("YYYY-MM-DD")}"}`,
    },
  );
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
});

When("the employee selects desk {int}", (deskNbr) => {
  cy.get(".desk")
    .contains("Flex " + deskNbr)
    .click();
});

Then("desk {int} is not selected", (deskNbr: number) => {
  const desk = cy.get(".desk").contains("Flex " + deskNbr);
  desk.should("not.have.class", "available");
  desk.should("not.have.class", "selected");
});
