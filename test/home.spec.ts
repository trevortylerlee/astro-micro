import { expect, test } from "@playwright/test";

test("has my name visible as heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Fausto Moya" }),
  ).toBeVisible();
});

test("has a link that redirects to my LinkedIn profile", async ({ page }) => {
  await page.goto("/");
  const linkedInPage = page.waitForEvent("popup");
  const link = page.getByLabel("Fausto Moya on LinkedIn");
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/fausto-moya",
  );
  await link.click();
  expect((await linkedInPage).url()).toContain("https://www.linkedin.com/");
});

test("has a link that redirects to my GitHub profile", async ({ page }) => {
  await page.goto("/");
  const gitHubPromise = page.waitForEvent("popup");
  const link = page.getByLabel("Fausto Moya on GitHub");
  await expect(link).toBeVisible();
  await link.click();
  const gitHubPage = await gitHubPromise;
  await expect(gitHubPage).toHaveURL("https://github.com/MoyaF");
});

test("has a link that redirects to my email address", async ({ page }) => {
  await page.goto("/");
  const emailTo = page.getByLabel("Email Fausto Moya");
  await expect(emailTo).toHaveAttribute(
    "href",
    "mailto:faustomoya99@gmail.com",
  );
});

test("has a link that redirects to my blog", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "See all posts" }).click();
  await expect(page).toHaveURL("/blog");
});

test("has a link that redirects to my projects", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "See all projects" }).click();
  await expect(page).toHaveURL("/projects");
});
