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

export const bookDeskForEmployeeFetch = (
  deskNbr: number,
  userEmailEnv: string = "TEST_USER_1_EMAIL",
  userTokenEnv: string = "TEST_USER_1_TOKEN",
  date: number = currentDate,
) => {
  fetch(
    Cypress.env("BE_HOST") + "/api/booking?email=" + Cypress.env(userEmailEnv),
    {
      method: "POST",
      headers: {
        Authorization: Cypress.env(userTokenEnv),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deskId: deskNbr,
        date: dayjs(date).format("YYYY-MM-DD"),
      }),
    },
  );
};

export const selectCalendarDay = (day: number, force: boolean = false) => {
  getButton(day.toString()).click({ force: force });
};

export const selectCalendarYear = (year: number) => {
  cy.get(".MuiPickersCalendarHeader-label").click();
  getType(".MuiPickersYear-root", year.toString()).click();
};
