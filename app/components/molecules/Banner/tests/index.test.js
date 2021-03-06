/**
 *
 * Tests for Banner
 *
 * Molecules
 */

import { render } from '@testing-library/react';
import React from 'react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import Banner from '../index';

describe('<Banner />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Banner>
        <h3>Banner Content</h3>
      </Banner>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Banner>
        <h3>Banner Content</h3>
      </Banner>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
