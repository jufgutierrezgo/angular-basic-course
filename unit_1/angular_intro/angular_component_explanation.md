# Understanding a Basic Angular Component

This example shows one of the simplest Angular components. Let’s break it down step by step:

```ts
import { Component } from '@angular/core';
```

- **What it does:**  
  This line imports the `Component` decorator from Angular’s core library.  
  - A *decorator* in Angular adds special behavior to classes.
  - In this case, `@Component` tells Angular that the class below is an Angular component.

---

```ts
@Component({
  selector: 'app-root',
  template: `
    Welcome to Angular!
  `,
})
```

- **What it does:**  
  - `@Component({...})` is a decorator that provides metadata about the component.  
  - `selector: 'app-root'`  
    - Defines the HTML tag (`<app-root>`) where this component will be rendered in the DOM.  
  - `template: '...'`  
    - Defines the HTML content that will be displayed when the component loads.  
    - In this case, it shows the message **"Welcome to Angular!"**.

---

```ts
export class App {}
```

- **What it does:**  
  - This defines the actual **component class** named `App`.  
  - Even though the class is empty here, you can add properties and methods to handle data and logic for your app.  
  - The `export` keyword makes it available for use in other parts of the Angular application.

---

## How It Works Together

1. Angular sees the `App` class decorated with `@Component`.
2. When Angular runs, it looks for the `<app-root>` element in `index.html`.
3. The `template` inside the component (`Welcome to Angular!`) is injected into that element.
4. As a result, the browser displays:

```html
<app-root>
  Welcome to Angular!
</app-root>
```

---

## Key Takeaways

- Every Angular app is made up of **components**.  
- A component combines:
  - A **selector** (custom HTML tag).  
  - A **template** (HTML to display).  
  - A **class** (logic and data).  

This example is the foundation of every Angular application.
