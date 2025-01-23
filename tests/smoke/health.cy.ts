describe("Run External System Health Checks", () => {
  it("should be able to access SendGrid", async () => {
    const res: any = await fetch(
      "https://status.sendgrid.com/api/v2/status.json",
    );
    const status = await res.json();
    assert.isTrue(status.status.indicator === "none");
  });
});

describe("Run Backend Health Checks", () => {
  it("should be able to access backend", async () => {
    const host = Cypress.env("be_host");
    assert.isNotEmpty(host);
    const res = await fetch(host);
    assert.isTrue(res.status === 200);
  });
});
