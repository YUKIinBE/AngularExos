import { ToMinutePipe } from './to-minute.pipe'

describe('ToMinutePipe', () => {
  it('create an instance', () => {
    const pipe = new ToMinutePipe();
    expect(pipe).toBeTruthy();
  });
});
