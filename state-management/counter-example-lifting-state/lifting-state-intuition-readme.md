# Lifting State in React

## What is "Lifting State" in React?

**Lifting state** in React is a technique used to **move state from a child component to a common parent component**. This is useful when you need multiple child components to share or communicate state between each other.

### Why is Lifting State Important?

1. **Shared State**: When two or more components need to share the same piece of data, lifting the state to their closest common parent allows that data to be shared easily between them.

2. **Centralized Control**: By placing the state in a parent component, you centralize the data handling. This makes it easier to manage, update, and pass data between child components through **props**.

3. **Component Communication**: When you lift state, child components can communicate indirectly. For example, one child can update the state, and another child can respond to the updated state, even though they don’t directly interact with each other.

### Example Scenario

Imagine you have a **counter** app with two parts:
- A button that increases a counter.
- A display that shows the current counter value.

Without lifting state, you might be tempted to keep the counter value directly inside the display or button component. But if the **button** needs to update the counter, and the **display** needs to show the updated value, then **lifting the state** to a parent component is necessary.

### How Does Lifting State Work?

1. **Identify the State**: First, identify which piece of state is shared between components (e.g., the counter value).

2. **Move the State to the Parent**: Lift the state up to the nearest common parent component. For our example, that means moving the counter value to the parent component.

3. **Pass State and Functions as Props**:
   - Pass the state down to the components that need to display it.
   - Pass functions (that update the state) to the components that need to modify it.

### Code Walkthrough

Let’s say we have three components:
- `Counter` (parent)
- `DisplayCount` (child)
- `IncrementButton` (child)

Here's what happens:
- The `Counter` component holds the `count` state.
- It passes the `count` value to `DisplayCount` so that it can show the number.
- It also passes an `onIncrement` function to `IncrementButton` so that clicking the button can increase the count.

This way, **the button and the display both have access to the counter value**, even though the actual state is managed in the parent `Counter` component.

### Visual Representation

### Benefits of Lifting State

- **Simplifies Data Flow**: Data flows down from parent to child, making it easier to follow and debug.
- **Improves Reusability**: Child components can be more focused on their specific tasks without managing state.
- **Prepares for Larger Apps**: As your app grows, lifting state helps to keep components organized and interactions predictable.

### When Should You Lift State?

- When two or more sibling components need to share or react to the same data.
- When a parent component should have centralized control over how data is updated and displayed.
- When managing the state in multiple child components directly becomes complex or error-prone.

### Conclusion

Lifting state is a fundamental concept in React that helps to organize how data flows between components. It may feel a bit tricky at first, but it keeps your application logic clean and ensures components remain easy to reason about. As a result, you can build more complex and interactive user interfaces with ease.

In the provided example, let's break down what is considered the **parent** component, the **child** components, and what piece of **state** is lifted and how.

## Parent and Child Components:

### Parent Component:
- `Counter` is the **parent** component.
- It holds the shared state (`count`) and manages the logic for updating that state.

### Child Components:
- `DisplayCount` and `IncrementButton` are the **child** components.
- They receive the state and functions as props from the `Counter` component.

## What Piece of Information is Lifted:

The **piece of information that is lifted** is the `count` state.

### Here's how it works:

1. Originally, you might consider keeping the `count` state inside `DisplayCount` because it displays the counter value. Alternatively, you might consider placing the logic for changing the `count` inside `IncrementButton` since it triggers the change.

2. **Lifting the state** means taking the `count` state **out of these child components** (`DisplayCount` or `IncrementButton`) and **moving it up** to the `Counter` component (the common parent).

3. Once the `count` state is moved to the `Counter` component:
   - The `Counter` component manages the `count` using `useState`.
   - `DisplayCount` receives `count` as a prop to display the current count value.
   - `IncrementButton` receives a function (`handleIncrement`) as a prop to increment the count when the button is clicked.

### Why Lift the State?

By lifting the state:

- **`IncrementButton`** can change the count without directly owning the state.
- **`DisplayCount`** can display the count without directly owning the state.
- The `Counter` component takes care of managing the state and passing the necessary values and functions to its children.
