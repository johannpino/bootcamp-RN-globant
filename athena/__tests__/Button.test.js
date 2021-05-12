import React from 'react';
import { shallow } from 'enzyme';
import Button from '../components/Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Button label="test label" />);
      expect(component).toMatchSnapshot();
    });
  });
});
