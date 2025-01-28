export const currentDate = Date.UTC(2099, 8, 26);

before(() => {
  cy.clock(currentDate, ["Date"]);
});
