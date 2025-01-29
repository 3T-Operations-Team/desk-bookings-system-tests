export const getPageElement = (text: string) => {
  return cy.get(".contents").contains(text);
};

export const getButton = (text: string) => {
  return cy.get("button").contains(text);
};

export const clickPageElement = (text: string) => {
  getPageElement(text).click({ force: true });
};

export const clickButton = (text: string) => {
  getButton(text).click();
};
