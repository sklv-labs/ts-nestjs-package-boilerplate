import { DynamicModule, Module, Provider, Type } from '@nestjs/common';

import { EXAMPLE_OPTIONS } from './example.constants';

import type { ExampleModuleAsyncOptions, ExampleModuleOptions } from './types';

@Module({})
export class ExampleModule {
  /**
   * Synchronously configure the Example module
   *
   * @param options - Example module options
   * @returns Dynamic module configuration
   */
  static forRoot(options: ExampleModuleOptions): DynamicModule {
    const exampleOptionsProvider: Provider = {
      provide: EXAMPLE_OPTIONS,
      useValue: options,
    };

    return {
      module: ExampleModule,
      providers: [exampleOptionsProvider],
      exports: [EXAMPLE_OPTIONS],
    };
  }

  /**
   * Asynchronously configure the Example module with dependency injection support
   *
   * @param options - Example module async options
   * @returns Dynamic module configuration
   */
  static forRootAsync<TFactoryArgs extends unknown[] = unknown[]>(
    options: ExampleModuleAsyncOptions<TFactoryArgs>
  ): DynamicModule {
    const exampleOptionsProvider: Provider = {
      provide: EXAMPLE_OPTIONS,
      useFactory: options.useFactory,
      inject: (options.inject ?? []) as Array<Type<unknown> | string | symbol>,
    };

    return {
      module: ExampleModule,
      imports: options.imports ?? [],
      providers: [exampleOptionsProvider],
      exports: [EXAMPLE_OPTIONS],
    };
  }
}
