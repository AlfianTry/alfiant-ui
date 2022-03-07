import { render } from '@testing-library/react';
import Elevation from './Elevation';
describe('Card', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Elevation />);
    expect(baseElement).toBeTruthy();
  });
});
