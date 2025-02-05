// All tests run on 2099-09-10
export const currentDate = Date.UTC(2099, 8, 15);

beforeEach(() => {
  cy.clock(currentDate, ["Date"]);
});
