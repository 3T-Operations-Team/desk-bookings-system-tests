import {
  bookDesk,
  clickCancelBookingButton,
} from "../page-object-model/booking.js";
import {
  manualLogin,
  setLoginCredentials,
} from "../page-object-model/login.js";
import { goToMainPage } from "../page-object-model/navigation.js";

describe("Login page", () => {
  beforeEach(goToMainPage);

  it("should be able to see the log in page", () => {
    cy.location("pathname").should("eq", "/login");
    cy.contains("Desk Booking").should("exist");
  });

  it("should be redirected to booking page after successful login", () => {
    manualLogin();
    cy.location("pathname").should("eq", "/");
  });
});

describe("Main page", () => {
  beforeEach(() => {
    setLoginCredentials();
    goToMainPage();
  });

  it("should be able to see main page", () => {
    cy.location("pathname").should("eq", "/");
    cy.get("button").contains(Cypress.env("TEST_USER_EMAIL")).should("exist");
    cy.get(".MuiDateCalendar-root").should("exist");
    cy.get(".desk").should("exist");
    cy.get("button").contains("Book").should("exist");
  });

  it("should be able to book a desk", () => {
    bookDesk("Flex 27");
    cy.contains("Desk successfully booked").should("exist");
  });

  it("should be able to cancel a booking", () => {
    clickCancelBookingButton();
    cy.contains("Booking canceled").should("exist");
  });
});
