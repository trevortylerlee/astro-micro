import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  testDir: "./test",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  timeout: 5000,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: process.env.CI ? process.env.BASE_URL : "http://localhost:4321",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    //{ name: "firefox", use: { ...devices["Desktop Firefox"] } },
    //{ name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "Mobile Chrome", use: { ...devices["Pixel 5"] } },
    //{ name: "Mobile Safari", use: { ...devices["iPhone 12"] } },
  ],
  webServer: !process.env.CI
    ? {
        command: "bun run preview",
        url: "http://localhost:4321",
        reuseExistingServer: true,
        timeout: 5000,
      }
    : undefined,
});
