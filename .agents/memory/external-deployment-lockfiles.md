---
name: External deployment lockfiles
description: Preventing Replit-specific package registry references from breaking external deployments.
---

When deploying this project outside Replit, verify that package-lock.json contains only publicly reachable package URLs; Replit-generated lockfiles can include internal package-firewall registry URLs.

**Why:** External hosts such as Render cannot resolve Replit’s internal registry hostname, causing dependency installation to fail before the application build starts.

**How to apply:** Before an external deploy, search the lockfile for `package-firewall.replit.local` and regenerate or normalize those entries to the public npm registry, then run a clean `npm ci`.