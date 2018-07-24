import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';
import { expect } from 'chai';

describe("<App>", () => {
  it('should render title prop as text', () => {
    const text = "the title";
    const component = shallow(<App title={text}/>);
    expect(component.find("h1").text()).to.equal(text);
  });
});
