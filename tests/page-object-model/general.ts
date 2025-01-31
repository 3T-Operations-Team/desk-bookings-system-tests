export const getType = (type: string, exactText: string) => {
  return cy.get(type).contains(new RegExp("^" + exactText + "$", "g"));
};

export const getPageElement = (text: string) => {
  return getType(".contents", text);
};

export const getButton = (text: string) => {
  return getType("button", text);
};

export const clickPageElement = (text: string) => {
  getPageElement(text).click();
};

export const clickButton = (text: string) => {
  getButton(text).click();
};

export const getCheckboxes = () => {
  return cy.get(":checkbox");
};

export const getByTestId = (testId: string) => {
  return cy.get('[data-testid="' + testId + '"]');
};
