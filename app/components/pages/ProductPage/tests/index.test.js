/**
 *
 * Tests for ProductPage
 *
 * Pages
 */

import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions

import ProductPage from '../index';

describe('<ProductPage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ProductPage />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ProductPage />);
    expect(firstChild).toMatchSnapshot();
  });
});
