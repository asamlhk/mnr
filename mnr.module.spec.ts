import { MnrModule } from './mnr.module';

describe('MnrModule', () => {
  let mnrModule: MnrModule;

  beforeEach(() => {
    mnrModule = new MnrModule();
  });

  it('should create an instance', () => {
    expect(mnrModule).toBeTruthy();
  });
});
