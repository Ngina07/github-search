import { UserUppercasePipe } from './user-uppercase.pipe';

describe('UserUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new UserUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
