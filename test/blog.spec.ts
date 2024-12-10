import { expect, test } from "@playwright/test";

test("should display the Blog heading", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("heading", { name: "Blog" })).toBeVisible();
});

test("should display blogs", async ({ page }) => {
  await page.goto("/blog");
  await expect(page.getByRole("listitem")).not.toHaveCount(0);
});

test("should redirect to blog post", async ({ page }) => {
  await page.goto("/blog");
  const blogPosts = page.getByRole("listitem");
  const count = await blogPosts.count();
  const randomIndex = Math.floor(Math.random() * count);
  const blogPost = blogPosts.nth(randomIndex);
  blogPost.click();
  const blogPostUrl = await blogPost.getByRole("link").getAttribute("href") ?? "";
  await expect(page).toHaveURL(blogPostUrl);
});
