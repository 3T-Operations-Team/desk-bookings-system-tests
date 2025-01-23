describe("Login page", () => {
  it("user should be able to see the log in page", () => {
    cy.visit(Cypress.env("host"));

    // should be able to see page title
    // should be able to see username field
    // should be able to see password field
    // should be able to see login button

    // should be able to login
    // should be redirected to the main page
  });
});

describe("Main page", () => {
  before(() => {
    window.localStorage.setItem(
      "logedUserEmail",
      Cypress.env("TEST_USER_EMAIL"),
    );
    window.localStorage.setItem(
      "logedUserToken",
      Cypress.env("TEST_USER_TOKEN"),
    );
  });

  it("user should be able to see main page", () => {
    // should be able to see page title
    // should be able to see navbar
    // should be able to see username
    // should be able to see calendar
    // should be able to see desks
    // should be able to see booking button
  });

  it("should be able to book a desk", () => {
    // book desk
    // see booking confiration
  });

  it("should be able to cancel a booking", () => {
    // book desk
    // see booking confiration
  });
});
