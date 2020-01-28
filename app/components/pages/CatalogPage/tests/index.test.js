/**
 *
 * Tests for CatalogPage
 *
 * Pages
 */

import React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions

import CatalogPage from '../index';

describe('<CatalogPage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<CatalogPage />);
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
    } = render(<CatalogPage />);
    expect(firstChild).toMatchSnapshot();
  });
});
