export const currentDate = Date.UTC(2099, 8, 26);

beforeEach(() => {
  cy.clock(currentDate, ["Date"]);
});
