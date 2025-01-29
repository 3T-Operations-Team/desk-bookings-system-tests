import { getButton } from "./general.js";

export const setLoginCredentials = () => {
  window.localStorage.setItem("logedUserEmail", Cypress.env("TEST_USER_EMAIL"));
  window.localStorage.setItem("logedUserToken", Cypress.env("TEST_USER_TOKEN"));
};

export const fillEmailField = () => {
  cy.get('input[placeholder="Email"]').type(Cypress.env("TEST_USER_EMAIL"));
};

export const fillPasswordField = () => {
  cy.get('input[placeholder="Password"]').type(
    Cypress.env("TEST_USER_PASSWORD"),
  );
};

export const clickLoginButton = () => {
  getButton("Login").click();
};

export const manualLogin = () => {
  fillEmailField();
  fillPasswordField();
  clickLoginButton();
};
