# 🚀 Creating an Angular Project in Visual Studio Code

This manual explains how to set up and run a new **Angular project** inside **Visual Studio Code (VS Code)**. It also describes the project structure with detailed explanations of each file and folder.

---

## 1. Install Prerequisites

Before creating an Angular project, install the following tools:

### 1.1 Node.js and npm
- Download and install **Node.js LTS** from [https://nodejs.org](https://nodejs.org).
- npm (Node Package Manager) is included with Node.js.

Verify installation:
```bash
node -v
npm -v
```

### 1.2 Angular CLI
Install Angular Command Line Interface globally:
```bash
npm install -g @angular/cli
```

Verify installation:
```bash
ng version
```

### 1.3 Visual Studio Code
- Download from [https://code.visualstudio.com](https://code.visualstudio.com).
- Recommended extensions:
  - **Angular Language Service**
  - **Angular Snippets**
  - **ESLint**

---

## 2. Create a New Angular Project

1. Open **VS Code**.
2. Open the integrated **Terminal** (`Ctrl + \``).
3. Navigate to the folder where you want to create the project:
   ```bash
   cd path/to/your/projects
   ```
4. Run the command to create a new Angular app:
   ```bash
   ng new my-angular-app
   ```
   - **Add Angular routing?** → `Yes` (recommended for most apps).
   - **Which stylesheet format?** → choose `CSS` (or `SCSS`, `SASS`, `LESS`).

---

## 3. Open the Project

Navigate into the folder:
```bash
cd my-angular-app
```

Open the project in VS Code:
```bash
code .
```

---

## 4. Run the Application

Start the Angular development server:
```bash
ng serve -o
```

- The `-o` flag automatically opens the app in your browser.  
- Default address: [http://localhost:4200](http://localhost:4200).

You should see the **Angular Welcome Page** 🎉

---

## 5. Project Structure Explained

When you create a new project, the Angular CLI generates several files and folders. Here’s what they mean:

```
my-angular-app/
├─ node_modules/         # All installed npm dependencies
├─ src/                  # Source code folder
│  ├─ app/               # Main application folder (components, modules, services)
│  │  ├─ app.component.css   # Styles for the root component
│  │  ├─ app.component.html  # Template (HTML) of the root component
│  │  ├─ app.component.spec.ts # Unit test for the root component
│  │  ├─ app.component.ts     # Logic (TypeScript) of the root component
│  │  └─ app.module.ts        # Root Angular module (declares components, imports)
│  ├─ assets/             # Static files (images, icons, JSON data, etc.)
│  ├─ environments/       # Environment configs (dev/prod)
│  │  ├─ environment.ts       # Development environment variables
│  │  └─ environment.prod.ts  # Production environment variables
│  ├─ index.html          # Main HTML file loaded in browser
│  ├─ main.ts             # Application entry point, bootstraps Angular
│  ├─ styles.css          # Global styles for the app
│  └─ polyfills.ts        # Polyfills for browser compatibility
├─ angular.json           # Angular workspace configuration (build, serve, test)
├─ package.json           # Project metadata + dependencies list
├─ package-lock.json      # Exact versions of installed dependencies
├─ tsconfig.json          # TypeScript configuration for the whole project
├─ tsconfig.app.json      # TypeScript config for the Angular app
├─ tsconfig.spec.json     # TypeScript config for unit testing
├─ karma.conf.js          # Karma test runner configuration
├─ .editorconfig          # Coding style configuration (indent, spaces)
├─ .gitignore             # Files to ignore in Git
└─ README.md              # Auto-generated documentation for your project
```

### 📂 Folder Explanations
- **node_modules/**: Contains all external libraries installed via npm.  
- **src/**: Main folder where your application code lives.  
- **src/app/**: Contains your components, services, and application logic.  
- **src/assets/**: Store static resources (e.g., images, fonts, mock JSON).  
- **src/environments/**: Environment-specific configurations (useful for dev vs production).  

### 📄 Important Files
- **app.component.ts**: Root component logic (TypeScript class).  
- **app.component.html**: Root component template (HTML).  
- **app.component.css**: Root component styles (CSS).  
- **app.module.ts**: Defines the root Angular module. Every new component/service must be declared or imported here.  
- **main.ts**: Entry point of the Angular app; bootstraps `AppModule`.  
- **angular.json**: Defines build/serve/test options, paths, and global styles/scripts.  
- **package.json**: Lists dependencies and useful scripts (`npm start`, `npm test`, etc.).  
- **tsconfig.json**: Configures TypeScript compiler rules.  

---

## 6. Next Steps

Now that your Angular app is running:
- Generate a new component:
  ```bash
  ng generate component my-component
  ```
- Or shorter:
  ```bash
  ng g c my-component
  ```

This will create:
```
src/app/my-component/
├─ my-component.component.ts
├─ my-component.component.html
├─ my-component.component.css
└─ my-component.component.spec.ts
```

---

✅ You now have a complete Angular project running in VS Code with a clear understanding of its structure!
