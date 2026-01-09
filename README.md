# @sklv-labs/ts-nestjs-package-boilerplate

A NestJS package boilerplate for quick library development.

## Features

- 🎯 **Type-Safe** - Full TypeScript support with comprehensive type definitions
- 🚀 **Easy Setup** - Simple API for both synchronous and asynchronous configuration
- 🛠️ **NestJS Native** - Built on top of NestJS with seamless integration
- 📦 **Well Configured** - Pre-configured with ESLint, Prettier, Jest, and TypeScript

## Installation

```bash
npm install @sklv-labs/ts-nestjs-package-boilerplate
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm install @nestjs/common@^11.1.11 @nestjs/core@^11.1.11
```

**Note:** This package requires Node.js 24 LTS or higher.

## Quick Start

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ExampleModule } from '@sklv-labs/ts-nestjs-package-boilerplate';

@Module({
  imports: [
    ExampleModule.forRoot({
      // Your configuration options
    }),
  ],
})
export class AppModule {}
```

### Async Configuration

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ExampleModule } from '@sklv-labs/ts-nestjs-package-boilerplate';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ExampleModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        // Your configuration options
      }),
    }),
  ],
})
export class AppModule {}
```

## Development

```bash
# Build
npm run build

# Lint
npm run lint

# Format
npm run format

# Test
npm run test

# Type check
npm run type-check
```

## License

MIT © [sklv-labs](https://github.com/sklv-labs)
