describe("Run External System Health Checks", () => {
  it("should be able to access SendGrid", async () => {
    cy.request({
      url: "https://" + Cypress.env("SENDGRID_HOST") + "/v3/senders",
      headers: {
        authorization: "Bearer " + Cypress.env("SENDGRID_TOKEN"),
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});

describe("Run Backend Health Checks", () => {
  it("should be able to access backend", async () => {
    const host = Cypress.env("BE_HOST");
    assert.isNotEmpty(host);
    const res = await fetch(host);
    assert.isTrue(res.status === 200);
  });
});
