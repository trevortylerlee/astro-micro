import { expect, test } from "@playwright/test";

test("my name in the nav bar redirects to home page", async ({ page }) => {
  await page.goto("/blog");
  await page.getByRole("link", { name: "Fausto Moya⚡️" }).click();
  await expect(page).toHaveURL("/");
});

test("blog in the nav bar redirects to blog page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "blog" }).click();
  await expect(page).toHaveURL("/blog");
});

test("projects in the nav bar redirects to projects page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "projects", exact: true }).click();
  await expect(page).toHaveURL("/projects");
});

test("experience in the nav bar redirects to experience page", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "experience" }).click();
  await expect(page).toHaveURL("/experience");
});
