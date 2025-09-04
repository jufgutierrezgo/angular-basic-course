# Angular Example: Cookie Recipe with Signals and Computed Values

This example demonstrates a more modern Angular feature: **signals** and **computed properties**.  
It shows how to create a simple interactive cookie recipe calculator.

---

## Code

```ts
import { Component, signal, computed } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h2>Cookie recipe</h2>

    <label>
      # of cookies:
      <input type="range" min="10" max="100" step="10" [value]="count()" (input)="update($event)" />
      {{ count() }}
    </label>

    <p>Butter: {{ butter() }} cup(s)</p>
    <p>Sugar: {{ sugar() }} cup(s)</p>
    <p>Flour: {{ flour() }} cup(s)</p>
  `,
})
export class CookieRecipe {
  readonly count = signal(10);

  readonly butter = computed(() => this.count() * 0.1);
  readonly sugar = computed(() => this.count() * 0.05);
  readonly flour = computed(() => this.count() * 0.2);

  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.count.set(parseInt(input.value));
  }
}

bootstrapApplication(CookieRecipe);
```

---

## Explanation

### 1. Imports
```ts
import { Component, signal, computed } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
```
- `signal` → a special Angular function that holds reactive state.  
- `computed` → a function that automatically recalculates values when signals change.  
- `bootstrapApplication` → starts the Angular app without needing Angular modules.  

---

### 2. Component Metadata
```ts
@Component({
  selector: 'app-root',
  template: ` ... `
})
```
Defines the Angular component.  
- `selector: 'app-root'` → `<app-root>` is the custom HTML tag.  
- `template` → contains the interactive HTML for the recipe.  

---

### 3. Class: CookieRecipe
```ts
export class CookieRecipe {
  readonly count = signal(10);
  readonly butter = computed(() => this.count() * 0.1);
  readonly sugar = computed(() => this.count() * 0.05);
  readonly flour = computed(() => this.count() * 0.2);
  ...
}
```

- `count` → a signal starting with value **10** (cookies).  
- `butter`, `sugar`, `flour` → computed values that depend on `count`.  
  - Example: If `count = 20`, then `butter = 2 cups`, `sugar = 1 cup`, `flour = 4 cups`.

---

### 4. Template Interactions
```html
<input type="range" min="10" max="100" step="10" [value]="count()" (input)="update($event)" />
{{ count() }}
```
- A **range slider** lets the user pick how many cookies to make.  
- `[value]="count()"` binds the input to the signal.  
- `(input)="update($event)"` calls the `update()` method whenever the slider changes.  
- `{{ count() }}` displays the current number of cookies.  

---

### 5. Update Method
```ts
update(event: Event) {
  const input = event.target as HTMLInputElement;
  this.count.set(parseInt(input.value));
}
```
- Updates the `count` signal whenever the user moves the slider.  
- This automatically recalculates all `computed` values (`butter`, `sugar`, `flour`).  

---

### 6. Bootstrapping
```ts
bootstrapApplication(CookieRecipe);
```
- Starts the Angular app with `CookieRecipe` as the root component.  

---

## Key Takeaways
- **Signals** store state reactively.  
- **Computed properties** automatically recalculate when dependencies change.  
- This example shows Angular’s modern reactive programming style without needing external state management.  
