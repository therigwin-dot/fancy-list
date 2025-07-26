# FancyList Project Workflow Definitions

This document defines the standardized meanings and procedures for common workflow requests in the FancyList project.

---

## SectionModuleControl (Unified Section Styling)
- All Category and Subject section styling is now managed by a single, reusable SectionModuleControl.
- Controls include: Background (with mode, color, gradient, image, transparency, etc.), Font, Shape, Expand/Collapse, Hover Color, Divider Toggle.
- Default values differ for Category and Subject, but the control set is identical.

---

## 1. Fix Code
- **Definition:**
  - The AI will fix code files as needed.
  - All changes will be presented for user approval (using the keep button).

---

## 2. Fix Bugs
- **Definition:**
  - The AI will run `gulp build` to build/test the project.
  - Any bugs or errors found will be fixed.
  - The process will be repeated until no bugs remain and the build is clean.

---

### Benchmark Test (Updated July 2025)
- Do NOT kill or restart gulp serve automatically. The user will confirm if it is stopped.
- Only start gulp serve if needed.
- You may restart Microsoft Edge and launch it to the SharePoint Online Workbench as part of the test procedure.
- This replaces the previous step to always kill gulp serve before starting.

---

## Notes
- These definitions are followed consistently for all future requests.
- If you want to update or clarify any workflow, update this document and notify the AI.
- See SectionModuleControl documentation for all section styling options. 