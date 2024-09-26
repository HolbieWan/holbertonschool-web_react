# TypeScript

## Learning Objectives

What are: 

### 1. Basic Types in TypeScript

TypeScript includes basic types like number, string, boolean, array, tuple, enum, any, void, null, and undefined, among others, to provide static typing.

### 2. Interfaces, Classes, and Functions

Interfaces: Define the structure of objects, ensuring type safety by enforcing properties and their types.
Classes: Provide OOP features such as inheritance, access modifiers (public, private, protected), and constructors.
Functions: TypeScript allows defining types for function parameters and return types. Supports arrow functions, optional parameters, and default parameters.

### 3. Working with the DOM in TypeScript

To interact with the DOM, TypeScript offers typed objects (e.g., HTMLElement, HTMLInputElement). You can use document.getElementById or similar methods and explicitly cast elements to their appropriate types for better type safety.

### 4. Generic Types

Generics allow creating reusable components that work with any type. You define a generic type by adding <T> to a function, class, or interface, enabling type flexibility while maintaining type safety.

### 5. Using Namespaces

Namespaces are used to organize code into logical groups and prevent name collisions. They can wrap related functions, variables, and classes. Declared with the namespace keyword.

### 6. Merging Declarations

TypeScript allows declaration merging, where two or more declarations (e.g., interfaces, namespaces) with the same name are merged into a single definition. This feature is useful for extending existing types or libraries.

### 7. Ambient Namespace to Import External Library

Ambient namespaces are used to declare types for external libraries that don't have TypeScript typings. You can declare these in .d.ts files to describe the shape of the library.

### 8. Basic Nominal Typing in TypeScript

TypeScript primarily uses structural typing (duck typing), but nominal typing can be achieved using type branding. You create a unique identifier on types that force explicit type checking.






