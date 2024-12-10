import { expect, test } from "@playwright/test";

test("should display the Work Experience heading", async ({ page }) => {
  await page.goto("/experience");
  await expect(
    page.getByRole("heading", { name: "Work Experience" }),
  ).toBeVisible();
});

test("should display my experience at Ahold Delhaize", async ({ page }) => {
  await page.goto("/experience");
  await expect(page.getByText("Technical Lead @ Ahold Delhaize")).toBeVisible();
});

test("should display my experience at Routescanner", async ({ page }) => {
  await page.goto("/experience");
  await expect(
    page.getByText("Senior Software Engineer @ Routescanner"),
  ).toBeVisible();
});

test("should display my experience at Ualá", async ({ page }) => {
  await page.goto("/experience");
  await expect(page.getByText("Software Engineer @ Ualá")).toBeVisible();
});

test("should display my experience at Rappi", async ({ page }) => {
  await page.goto("/experience");
  await expect(page.getByText("Software Engineer @ Rappi")).toBeVisible();
});
