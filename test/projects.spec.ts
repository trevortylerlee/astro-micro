import { expect, test } from "@playwright/test";

test("should display the Projects heading", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
});

test("should display projects", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("listitem")).not.toHaveCount(0);
});

test("should redirect to project", async ({ page }) => {
  await page.goto("/projects");
  const projects = page.getByRole("listitem");
  const count = await projects.count();
  const randomIndex = Math.floor(Math.random() * count);
  const project = projects.nth(randomIndex);
  project.click();
  const projectUrl = await project.getByRole("link").getAttribute("href") ?? "";
  await expect(page).toHaveURL(projectUrl);
});