import "@testing-library/cypress/add-commands";

Cypress.Commands.add("searchFor", (itemName) => {
  cy.findByRole("textbox", { name: "Search Amazon" }).type(itemName);
  cy.findByRole("button", { name: "Go" }).click();
});

Cypress.Commands.add("goToItemPage", (itemName) => {
  cy.findByRole("heading", { name: itemName, level: 2 }).within(() => {
    cy.findByRole("link").click();
  });
});
