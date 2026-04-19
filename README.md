
# JavaScript Mastery Projects

## DOM Manipulation

### 📌 Project 1: Change text

**What I built:** <br>
A simple UI where clicking a button changes the heading text and toggles its state.

**What I learned:** <br>

-  How to select elements using <code>querySelector</code>
- How to listen to user actions using <code>addEventListener</code>
- Difference between UI and state
- Why using a state variable (<code>isUpdate</code>) is better than relying on DOM classes
- How to update text using <code>textContent</code>
- How to toggle classes and state using a boolean variable

**Key Insight:**<br>
UI should reflect state and not be the source of truth.

<br><br>

### 📌 Project 2: Change background color

**What I built:**<br>
A button that changes the background randomly on click.

**What I learned:**<br>

- How to generate random values using <code>Math.random()</code> 
- How to use arrays to manage multiple values (colors)
- How to separate logic into reusable functions (<code>getRandomIndex</code>)
- Importance of clean naming for readability
- Difference between deterministic and non-deterministic behavior

**CSS Architecture Insight:**<br>

- Practiced BEM methodology
- Learned that BEM prefers flat structure (independent classes)
- Understood that nesting should not create structural dependency
- Used nesting safely for pseudo-classes like <code>:hover</code>

**Key Insight:**<br>
- Dynamic behavior makes UI interactive, but structure and clarity make it maintainable.

<br><br>

### 📌 Project 3: Counter (Incease/Decrease)

**What I built:**<br>
A counter application where users can increase or decrease a number with real-time UI updates.
**What I learned:**<br>
- How to manage numeric state <code>currentValue</code>
- Event delegation for handling multiple buttons efficiently
- How to separate logic and UI using an <code>updateUI()</code> function
- Why UI should always reflect state, not control it
- How to prevent invalid state (no negative values)

**UX & Design Insights:**<br>

- Used disabled property to communicate state to the user
- Improved user experience by preventing unnecessary interaction
- Continued building a consistent color system using CSS variables

**Key insight:**<br>
- State changes should drive both behavior and user feedback.

<br><br>

### 📌 Project 4: Show / Hide Password


**What I built:**<br>
- A password input field with a toggle button to show or hide the entered password.

**What I learned:**<br>

- How to manage boolean state (isVisible)
- How to control DOM attributes dynamically (input.type)
- How to synchronize UI with state changes
- Importance of keeping logic independent from UI conditions

**Key insight:**<br>
- UI behavior should always be driven by state, not by DOM conditions.
