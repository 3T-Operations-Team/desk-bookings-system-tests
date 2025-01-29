import dayjs from "dayjs";
import { clickButton, getButton, getType } from "./general.js";
import { currentDate } from "../../cypress/support/e2e.js";

export const getDesk = (deskName: string) => {
  return getType(".desk", deskName);
};

export const clickOnDesk = (deskName: string) => {
  getDesk(deskName).click();
};

export const clickBookingButton = () => {
  clickButton("Book");
};

export const clickCancelBookingButton = () => {
  clickButton("Cancel Booking");
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
  getButton(day.toString()).click();
};

export const selectCalendarYear = (year: number) => {
  cy.get(".MuiPickersCalendarHeader-label").click();
  getType(".MuiPickersYear-root", year.toString()).click();
};
