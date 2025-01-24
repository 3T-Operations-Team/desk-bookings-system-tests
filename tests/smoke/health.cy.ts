describe("Run External System Health Checks", () => {
  it("should be able to access SendGrid", async () => {
    const res: any = await fetch(
      "https://" + Cypress.env("SENDGRID_HOST") + "/v3/senders",
      {
        headers: { Authorization: "Bearer " + Cypress.env("SENDGRID_TOKEN") },
      },
    );
    assert.isTrue(res.status === 200);
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
