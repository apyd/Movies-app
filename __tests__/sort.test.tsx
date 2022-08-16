import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { Sort } from '../src/components/UI/Sort/Sort';
import { SORT_OPTIONS } from '../src/dictionary/dictionary';
import { ISortProps } from '../src/components/UI/Sort/Sort.types';

const renderer = require('react-test-renderer');

describe('<Sort/>', () => {
  let props: ISortProps;

  beforeEach(() => {
    props = {
      options: SORT_OPTIONS,
      selected: SORT_OPTIONS[0].value,
      onOptionChange: jest.fn(),
      sortLabel: 'Sort by'
    };
  });

  it('snapshot testing suite matches DOM Snapshot', () => {
    const domTree = renderer.create(<Sort {...props} />).toJSON();
    expect(domTree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    expect.hasAssertions();
    const { getByTestId } = render(<Sort {...props} />);
    const sort = getByTestId('Sort');
    //@ts-ignore
    expect(sort).toBeInTheDocument();
  });

  it('renders when empty selected prop is passed', () => {
    expect.hasAssertions();

    props = {
      ...props,
      selected: ''
    };

    const { getByTestId } = render(<Sort {...props} />);
    const sort = getByTestId('Sort');
    //@ts-ignore
    expect(sort).toBeInTheDocument();
  });
});
