import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { setLoginCredentials } from "../page-object-model/login.js";
import { goToMyBookingsPage } from "../page-object-model/navigation.js";
import {
  clickButton,
  getByTestId,
  getCheckboxes,
  getType,
} from "../page-object-model/general.js";
import { bookDeskForEmployeeFetch } from "../page-object-model/booking.js";
import { currentDate } from "../../cypress/support/e2e.js";
import dayjs from "dayjs";

Given("the employee is logged in", setLoginCredentials);

Given("the employee is on the My Bookings page", goToMyBookingsPage);

Given("the employee has booked desk {int} today", (deskNbr: number) => {
  bookDeskForEmployeeFetch(deskNbr, "TEST_USER_EMAIL", "TEST_USER_TOKEN");
});

Given("the employee has booked desk {int} yesterday", (deskNbr: number) => {
  bookDeskForEmployeeFetch(
    deskNbr,
    "TEST_USER_EMAIL",
    "TEST_USER_TOKEN",
    currentDate - 24 * 60 * 60 * 1000,
  );
});

Given(
  "the employee has booked desk {int} for {int} different days",
  (deskNbr: number, nbrDays: number) => {
    const day = 24 * 60 * 60 * 1000;
    for (let i = 0; i < nbrDays; i++) {
      bookDeskForEmployeeFetch(
        deskNbr,
        "TEST_USER_EMAIL",
        "TEST_USER_TOKEN",
        currentDate + i * day,
      );
    }
  },
);

When("the employee navigates to the Desk Booking page", () => {
  clickButton("Book a Desk");
});

When("the employee selects all bookings", () => {
  getCheckboxes().each(($check) => {
    cy.wrap($check).check();
  });
  getByTestId("KeyboardArrowRightIcon")
    .parent()
    .click({ multiple: true, force: true });
  getCheckboxes().each(($check) => {
    cy.wrap($check).check();
  });
});

When("the employee deletes all bookings", () => {
  getByTestId("DeleteIcon").click();
});

Then("the employee can see the Desk Booking page", () => {
  cy.location("pathname").should("eq", "/");
});

Then(
  "the employee sees desk {int} and todays date in Booked Desks table",
  (deskNbr: number) => {
    const deskName = "Flex " + deskNbr;
    getType(".MuiTableRow-root", deskName)
      .parent()
      .should("have.text", deskName + "today");
  },
);

Then("Booked Desks table is empty", () => {
  getCheckboxes().should("not.exist");
});

Then(
  "the employee sees desk {int} and yesterdays date in Past Bookings",
  (deskNbr: number) => {
    const deskName = "Flex " + deskNbr;
    getType(".MuiTableRow-root", deskName)
      .parent()
      .should(
        "have.text",
        deskName +
          dayjs(currentDate - 24 * 60 * 60 * 1000).format("YYYY-MM-DD"),
      );
  },
);

Then("table pagination is not enabled in the Booked Desks table", () => {
  getByTestId("KeyboardArrowRightIcon").parent().should("be.disabled");
});

Then("table pagination is enabled in the Booked Desks table", () => {
  getByTestId("KeyboardArrowRightIcon").parent().should("be.enabled");
});
