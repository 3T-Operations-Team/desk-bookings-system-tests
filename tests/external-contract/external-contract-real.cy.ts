let senderEmail = "test@test.com";

describe("Run External Contract Tests", () => {
  it("should have a sender email", () => {
    cy.request({
      url: "https://" + Cypress.env("SENDGRID_REAL") + "/v3/senders",
      headers: {
        authorization: "Bearer " + Cypress.env("SENDGRID_TOKEN"),
      },
    }).then((res) => {
      expect(res.body).not.to.be.empty;
      expect(res.body[0].from.email).not.to.be.empty;
      senderEmail = res.body[0].from.email;
    });
  });

  it("should send an email successfully", () => {
    cy.request({
      method: "POST",
      url: "https://" + Cypress.env("SENDGRID_REAL") + "/v3/mail/send",
      headers: {
        authorization: "Bearer " + Cypress.env("SENDGRID_TOKEN"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { email: senderEmail },
        subject: "Desk booking for 2025-01-23 confirmed",
        personalizations: [{ to: [{ email: "test@test.com" }] }],
        content: [
          {
            type: "text/plain",
            value: "Your desk booking is confirmed. 2025-01-23, Desk #3",
          },
        ],
      }),
    }).then((res) => {
      expect(res.status).to.eq(202);
    });
  });
});
