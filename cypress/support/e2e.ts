// All tests run on 2099-09-10
export const currentDate = Date.UTC(2099, 8, 15);

beforeEach(() => {
  cy.clock(currentDate, ["Date"]);

  cy.on("window:load", (win) => {
    cy.spy(win.console, "log").as("consoleLog");
    cy.spy(win.console, "error").as("consoleError");
    cy.spy(win.console, "warn").as("consoleWarn");
    cy.spy(win.console, "info").as("consoleInfo");
  });
});
