# Useful Angular CLI Commands

## Project Setup
- `ng new <project-name>`  
  Create a new Angular project with a ready-to-use structure.

- `ng serve`  
  Run the application locally with live reload at `http://localhost:4200`.

- `ng serve --open`  
  Same as above, but automatically opens the app in the browser.

- `ng build`  
  Build the project for deployment in the `dist/` folder.

- `ng build --prod`  
  Build the project optimized for production.

---

## Code Generation
- `ng generate component <name>` or `ng g c <name>`  
  Create a new component with its HTML, CSS, and spec files.

- `ng generate module <name>` or `ng g m <name>`  
  Create a new Angular module.

- `ng generate service <name>` or `ng g s <name>`  
  Create a new service file.

- `ng generate directive <name>` or `ng g d <name>`  
  Create a custom directive.

- `ng generate pipe <name>` or `ng g p <name>`  
  Create a new pipe.

- `ng generate guard <name>` or `ng g g <name>`  
  Create a route guard.

---

## Testing
- `ng test`  
  Run unit tests using Karma.

- `ng e2e`  
  Run end-to-end tests (if set up).

---

## Utilities
- `ng lint`  
  Run linting checks on the codebase.

- `ng add <package>`  
  Add a new package with Angular schematics support (e.g., `ng add @angular/material`).

- `ng update`  
  Update Angular and dependencies to the latest versions.

- `ng version` or `ng v`  
  Display Angular CLI and workspace version info.

- `ng cache clean`  
  Clear Angular CLI’s persistent build cache (useful if you encounter weird build issues).

---

## Advanced
- `ng config`  
  View or set configuration values for the workspace.

- `ng build --watch`  
  Rebuild automatically on file changes (useful for libraries).

- `ng deploy`  
  Deploy the application directly (if a deployment builder is configured).
