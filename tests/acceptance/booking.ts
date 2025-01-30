import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { setLoginCredentials } from "../page-object-model/login.js";
import { goToMainPage } from "../page-object-model/navigation.js";
import {
  bookDeskForAnotherEmployee,
  clickBookingButton,
  clickCancelBookingButton,
  clickOnDesk,
  getDesk,
  selectCalendarDay,
} from "../page-object-model/booking.js";
import {
  clickButton,
  getButton,
  getPageElement,
} from "../page-object-model/general.js";

Given("the employee is logged in", setLoginCredentials);

Given("the employee is on the desk booking page", goToMainPage);

Given("desk {int} is already booked by another employee", (deskNbr: number) => {
  bookDeskForAnotherEmployee(deskNbr);
  getDesk("Flex " + deskNbr).should("not.have.class", "available");
});

Given("desk {int} is available", (deskNbr: number) => {
  getDesk("Flex " + deskNbr).should("have.class", "available");
});

Given("the employee has booked desk {int}", (deskNbr: number) => {
  getDesk("Flex " + deskNbr).should("have.class", "booked");
});

When("the employee selects desk {int}", (deskNbr: number) => {
  clickOnDesk("Flex " + deskNbr);
});

When(
  "the employee attempts to select the permanently reserved desk Manager",
  () => {
    clickOnDesk("Manager");
  },
);

When("the employee books the desk", clickBookingButton);

When("the employee cancels the booking", clickCancelBookingButton);

When("the employee selects day {int}", (day: number) => {
  selectCalendarDay(day);
});

When("the employee selects day {int} in the past", (day: number) => {
  selectCalendarDay(day, true);
});

When("the employee navigates to My Bookings page", () => {
  clickButton("My Bookings");
});

Then("desk {int} cannot be selected", (deskNbr: number) => {
  getDesk("Flex " + deskNbr).should("not.have.class", "selected");
});

Then("desk Manager cannot be selected", (deskNbr: number) => {
  getDesk("Manager").should("not.have.class", "selected");
});

Then("it is not possible to book desk", () => {
  getPageElement("Book").should("be.disabled");
});

Then("the employee sees the message {string}", (message: string) => {
  cy.contains(message).should("exist");
});

Then("desk {int} is now reserved for the employee", (deskNbr: number) => {
  getDesk("Flex " + deskNbr).should("have.class", "booked");
});

Then("the employee is in My Bookings page", () => {
  cy.location("pathname").should("eq", "/myBookings");
});

Then("day {int} is not selected", (day: number) => {
  getButton(day.toString()).should("not.have.class", "Mui-selected");
});
