import type { Type } from '@nestjs/common';
import type { ModuleMetadata } from '@nestjs/common/interfaces';

/**
 * Example module options
 */
export interface ExampleModuleOptions {
  /**
   * Example option
   */
  option?: string;
}

export interface ExampleModuleAsyncOptions<TFactoryArgs extends unknown[] = unknown[]> extends Pick<
  ModuleMetadata,
  'imports'
> {
  /**
   * Dependencies to inject into `useFactory` (e.g. `ConfigService`)
   */
  inject?: { [K in keyof TFactoryArgs]: Type<TFactoryArgs[K]> | string | symbol };
  /**
   * Factory returning the `ExampleModuleOptions` (sync or async)
   */
  useFactory: (...args: TFactoryArgs) => ExampleModuleOptions | Promise<ExampleModuleOptions>;
}
