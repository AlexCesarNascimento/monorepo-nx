import { render } from '@testing-library/react';

import IuHeader from './iu-header';

describe('IuHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IuHeader />);
    expect(baseElement).toBeTruthy();
  });
});
