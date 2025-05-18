# goldbear-add

A TypeScript package providing a type-safe addition function.

## Installation

```bash
npm install goldbear-add
```

## Usage

```typescript
import { add, AddFunction } from 'goldbear-add';

// Using the function
const result = add(2, 3); // returns 5

// Using the type
const customAdd: AddFunction = (a, b) => a + b;
```

## Features

- TypeScript implementation with strict type checking
- Type-safe function interface
- Comprehensive test coverage
- Zero dependencies
- Small bundle size

## Development

### Running Tests

```bash
npm test
```

### Building

```bash
npm run build
```

### Publishing

```bash
npm publish
```
