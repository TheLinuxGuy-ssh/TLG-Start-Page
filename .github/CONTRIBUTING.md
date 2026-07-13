# Contributing to TLG Start Page

Thank you for your interest in contributing to the **TLG Start Page**! 
I'm excited to have you here. This guide will help you go from setup to a successfully merged pull request.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [What I Need Help With](#what-i-need-help-with)
- [Before You Start](#before-you-start)
- [Setting Up Locally](#setting-up-locally)
- [Branch Structure](#branch-structure)
- [Making a Contribution](#making-a-contribution)
- [Pull Request Checklist](#pull-request-checklist)
- [Commit Message Format](#commit-message-format)
- [Code Style Guidelines](#code-style-guidelines)
- [Project Structure](#project-structure)
- [Where to Get Help](#where-to-get-help)

---

## Code of Conduct

By contributing to this project, you agree to be respectful, collaborative, and inclusive to this project and every contributor in it


---

## What I Need Help With

All work is tracked using GitHub Issues.

| Label              | Meaning                 |
| ------------------ | ----------------------- |
| `good first issue` | Beginner-friendly tasks |
| `help wanted`      | Needs community support |
| `bug`              | Something is broken     |
| `enhancement`      | Feature improvements    |
| `documentation`    | Docs or README updates  |
| `design`           | UI/UX improvements      |

Start here →
https://github.com/thelinuxguy-ssh/tlg-start-page

---

## Before You Start

Before writing any code:

1. Check if an issue already exists.
2. If it exists, comment on it to let others know you are working on it.
3. If no issue exists, create one first before starting work.
4. You are allowed to address multiple **assigned issues** to you through a single **Pull Request**

This makes reviews faster and easier.

---

## Setting Up Locally

```bash
# 1. Fork the repository, then clone your fork
git clone https://github.com/YOUR_USERNAME/tlg-start-page.git
cd tlg-start-page

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app runs at:

```
http://localhost:3000
```

---

## Branch Structure

I use two main branches:

| Branch        | Purpose                                      |
|---------------|----------------------------------------------|
| `main`        | Production — what is live on the website     |
| `development` | Staging — where all PRs are merged first     |

**Always branch off `development` — never off `main`.**

```bash
# Switch to development first
git checkout development
git pull origin development

# Then create your branch
git checkout -b fix/your-change-name
```

Your pull request should always target the `development` branch.

---

## Making a Contribution

```bash
# 1. Switch to development and pull latest changes
git checkout development
git pull origin development

# 2. Create a new branch from development
git checkout -b feat/add-new-feature
git checkout -b fix/navbar-bug
git checkout -b docs/update-readme

# 3. Make your changes

# 4. Run checks before committing
npm run lint
npm run typecheck
npm run build

# 5. Commit your changes
git add .
git commit -m "feat: add new feature description"

# 6. Push your branch
git push origin feat/add-new-feature

# 7. Open a Pull Request on GitHub targeting the development branch
```

---

## Pull Request Checklist

Before submitting your PR:

- [ ] Code passes `npm run lint`
- [ ] Project builds successfully with `npm run build`
- [ ] Changes are tested locally in the browser
- [ ] No `console.log` statements left in the code
- [ ] PR targets the `development` branch not `main`
- [ ] PR is linked to an issue
- [ ] PR description clearly explains what changed and why

---

## Commit Message Format

I use **Conventional Commits**:

```
type: short description
```

### Examples

```
feat: add draggable option to terminal window
fix: fix pill not appearing on the terminal window topbar
docs: update command usage
style: fix space between links in lists
refactor: move link data to constants
chore: update dependencies
```

### Types

- `feat` → new feature
- `fix` → bug fix
- `docs` → documentation changes
- `style` → formatting with no logic change
- `refactor` → code restructuring
- `chore` → maintenance tasks
- `test` → testing changes

---

## Code Style Guidelines

- Use **TypeScript only** — `.ts` and `.tsx` files
- Avoid `any` types
- Prefer **Tailwind CSS** over inline styles
- Only use inline `style={{}}` for dynamic values like hex colors
- One main component per file
- Do not add new npm packages without opening an issue and
  getting approval first

---

## Project Structure

```bash
src/
├── components/   # Reusable UI components
├── context/      # Per-User settings and config management
├── hooks/        # Custom React hooks
├── pages/        # One file per route
├── styles/       # CSS Stylesheets
```

---

## Where to Get Help

If you are stuck:

- **GitHub Issues** — for bugs and feature discussions
- **Email** — [mr.linux.0@protonmail.com](mailto:mr.linux.0@protonmail.com)

I aim to review all pull requests within **48 hours of initialisation**.

---

## Thank You

Every contribution matters. Whether it is code, design,
documentation, or feedback.

Together, we build in public and grow together.
