describe("Run External Contract Tests", () => {
  it("esternal contract stub", async () => {
    const res: any = await fetch(
      "https://" + Cypress.env("SENDGRID_STUB") + "/v3/senders",
      {
        headers: { Authorization: "Bearer " + Cypress.env("SENDGRID_TOKEN") },
      },
    );
    assert.isTrue(res.status === 200);
  });
});
