export const goToMainPage = () => {
  cy.visit(Cypress.env("HOST"));
};

export const goToMyBookingsPage = () => {
  cy.visit(Cypress.env("HOST") + "/myBookings");
};
