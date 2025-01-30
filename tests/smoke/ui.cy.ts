import {
  bookDesk,
  clickCancelBookingButton,
  getDesk,
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
  });

  it("should be able to see 30 desks", () => {
    getDesk("Manager").should("exist");
    for (let i = 2; i <= 30; i++) {
      getDesk("Flex " + i).should("exist");
    }
  });
});
