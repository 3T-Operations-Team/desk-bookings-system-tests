import dayjs from "dayjs";
import { clickPageElement } from "./general.js";
import { currentDate } from "../../cypress/support/e2e.js";

export const getDesk = (deskName: string) => {
  return cy.get(".desk").contains(deskName);
};

export const clickOnDesk = (deskName: string) => {
  getDesk(deskName).click();
};

export const clickBookingButton = () => {
  clickPageElement("Book");
};

export const clickCancelBookingButton = () => {
  clickPageElement("Cancel Booking");
};

export const bookDesk = (deskName: string) => {
  clickOnDesk(deskName);
  clickBookingButton();
};

export const bookDeskForAnotherEmployee = (deskNbr: number) => {
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
        date: dayjs(currentDate).format("YYYY-MM-DD"),
      }),
    },
  );
};

export const selectCalendarDay = (day: number) => {
  cy.get("button").contains(day).click();
};

export const selectCalendarYear = (year: number) => {
  cy.get(".MuiPickersCalendarHeader-label").click();
  cy.get(".MuiPickersYear-root").contains(year).click();
};
