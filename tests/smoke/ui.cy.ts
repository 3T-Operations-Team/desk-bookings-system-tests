describe("Login page", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("host"));
  });

  it("should be able to see the log in page", () => {
    cy.location("pathname").should("eq", "/login");

    cy.contains("Desk Booking").should("exist");

    const emailField = cy.get('input[placeholder="Email"]');
    emailField.should("exist");

    const passwordField = cy.get('input[placeholder="Password"]');
    passwordField.should("exist");

    const loginButton = cy.get("button").contains("Login");
    loginButton.should("exist");

    emailField.type(Cypress.env("TEST_USER_EMAIL"));
    passwordField.type(Cypress.env("TEST_USER_PASSWORD"));

    loginButton.click();

    cy.location("pathname").should("eq", "/");
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

  beforeEach(() => {
    cy.visit(Cypress.env("host"));
  });

  it("should be able to see main page", () => {
    cy.location("pathname").should("eq", "/");

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
