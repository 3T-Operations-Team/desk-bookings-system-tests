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
  beforeEach(() => {
    window.localStorage.setItem(
      "logedUserEmail",
      Cypress.env("TEST_USER_EMAIL"),
    );
    window.localStorage.setItem(
      "logedUserToken",
      Cypress.env("TEST_USER_TOKEN"),
    );
    cy.visit(Cypress.env("host"));
  });

  it("should be able to see main page", () => {
    cy.location("pathname").should("eq", "/");

    cy.get("button").contains(Cypress.env("TEST_USER_EMAIL")).should("exist");
    cy.get(".MuiDateCalendar-root").should("exist");
    cy.get(".desk").should("exist");
    cy.get("button").contains("Book").should("exist");
  });

  it("should be able to book a desk", () => {
    cy.get(".desk").contains("Flex 27").click();
    cy.get(".contents").contains("Book").click();
    cy.contains("Desk successfully booked").should("exist");
  });

  it("should be able to cancel a booking", () => {
    cy.get(".contents").contains("Cancel Booking").click();
    cy.contains("Booking canceled").should("exist");
  });
});
