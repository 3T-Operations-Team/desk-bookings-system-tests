describe("Run External Contract Tests", () => {
  it("external contract real", async () => {
    const res: any = await fetch(
      "https://" + Cypress.env("SENDGRID_REAL") + "/v3/senders",
      {
        headers: { Authorization: "Bearer " + Cypress.env("SENDGRID_TOKEN") },
      },
    );
    assert.isTrue(res.status === 200);
  });
});
