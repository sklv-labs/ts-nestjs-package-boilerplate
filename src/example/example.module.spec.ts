import { Test, TestingModule } from '@nestjs/testing';

import { ExampleModule } from './example.module';

describe('ExampleModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        ExampleModule.forRoot({
          option: 'test',
        }),
      ],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should configure module with forRoot', () => {
    const exampleModule = module.get(ExampleModule);
    expect(exampleModule).toBeDefined();
  });

  it('should configure module with forRootAsync', async () => {
    const asyncModule = await Test.createTestingModule({
      imports: [
        ExampleModule.forRootAsync({
          useFactory: () => ({
            option: 'async-test',
          }),
        }),
      ],
    }).compile();

    expect(asyncModule).toBeDefined();
  });
});
