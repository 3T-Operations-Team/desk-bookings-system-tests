describe("Run External Contract Tests", () => {
  it("should have a sender email", async () => {
    const res: any = await fetch(
      "https://" + Cypress.env("SENDGRID_STUB") + "/v3/senders",
    );
    const body = await res.json();
    assert.isAbove(body.length, 0);
    assert.isNotEmpty(body[0].from.email);
  });

  it("should send an email successfully", async () => {
    const res: any = await fetch(
      "https://" + Cypress.env("SENDGRID_STUB") + "/v3/mail/send",
      {
        method: "POST",
      },
    );
    assert.isTrue(res.status === 202);
  });
});
