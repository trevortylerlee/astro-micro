# Personal Blog

[![Playwright Tests](https://github.com/MoyaF/blog/actions/workflows/e2e-tests.yml/badge.svg?branch=main)](https://github.com/MoyaF/blog/actions/workflows/e2e-tests.yml)

Welcome to my personal blog project! This blog is based on [astro-micro](https://github.com/trevortylerlee/astro-micro). It features a clean and modern design, supports markdown for writing posts, and includes a simple commenting system.

## Getting Started

To get started with this project, We need to install Bun by following their [installation guide](https://bun.sh/docs/installation).
Once it is installed, we can clone the repo and install the dependencies with the following command:

```bash
git clone git@github.com:MoyaF/blog.git
cd blog
bun install
```

## Running the Project

To run the project locally, use the following command:

```bash
bun run dev
```

This will start a local development server. Open your browser and navigate to `http://localhost:4321` to see the blog in action.

## Running the Tests

This project has a simple playwright test suite. We can run the test using the following command:

```bash
bun run test
```
