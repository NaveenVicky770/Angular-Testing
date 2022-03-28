import { ReversePipe } from './reverse.pipe';

//Example of Isolated test
describe('UserComponent', () => {
  it('should create', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });
});
