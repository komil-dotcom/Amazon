describe('Search for "I Learned The Hard Way" Album', () => {
  it("Album page validations", () => {
    let audioCDPrice;
    let ratingStars;
    let expectedRatingStars = 4.5;
    let boughtTogetherItem;

    cy.visit("/");
    cy.searchFor("Sharon Jones");
    cy.goToItemPage("I Learned The Hard Way");

    // Getting the Audio CD Price
    cy.findByRole("link", { name: /Audio CD \$/ })
      .invoke("text")
      .then((text) => {
        audioCDPrice = text.trim().replace(/\s\s+/g, " ").split(" ").at(2);
      });

    // Getting the Rating Stars
    cy.get("#averageCustomerReviews_feature_div").within(() => {
      cy.findByRole("button", { name: /out of 5 stars/ })
        .children()
        .first()
        .invoke("text")
        .then((ratingsText) => (ratingStars = ratingsText));
    });

    // Getting the first "Frequently bought together" item
    cy.findByRole("heading", { name: "Frequently bought together", level: 2 })
      .next()
      .within(() => {
        cy.get('[class*="mobile_title-component-overflow"]').spread(
          (selectedItem, firstBoughtTogetherItem) => {
            cy.wrap(selectedItem)
              .invoke("text")
              .then((selectedItemTitle) => {
                expect(selectedItemTitle).to.include("I Learned The Hard Way"); // Asserting that the first item in the Array is our selected album "I Learned The Hard Way"
              });
            cy.wrap(firstBoughtTogetherItem)
              .invoke("text")
              .then((title) => (boughtTogetherItem = title));
          }
        );
      })
      .then(() => {
        cy.task("log", `The Price for Audio CD is: ${audioCDPrice}`);
        cy.task("log", `It is rated: ${ratingStars}`);
        cy.task(
          "log",
          `Customers frequently buy it together with "${boughtTogetherItem}" album`
        );
      })
      .then(() => {
        expect(Number(ratingStars)).to.eq(expectedRatingStars);
      });
  });
});
