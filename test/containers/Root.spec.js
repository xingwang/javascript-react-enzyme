import React from 'react';
import { shallow } from 'enzyme';
import Root from 'containers/Root';
import CommentList from '../../src/components/CommentList';

describe('(Container) Root', () => {
  const wrapper = shallow(<Root />);
  // console.log(wrapper.find('h1').type());
  // console.log(wrapper.find('h1').props());
  // console.log(wrapper.find(CommentList).type());
  // console.log(wrapper.find(CommentList).props());

  it('renders as a <div>', () => {
    expect(wrapper.type()).to.equal('div');
  });

  it('has style with height 100%, background #99f', () => {
    const expectedStyles = {
      height: '100%',
      background: '#99f'
    }
    expect(wrapper.prop('style')).to.eql(expectedStyles);
  });

  it('has one h1 tag', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('has className of welcome-header for the h1', () => {
    expect(wrapper.find('h1').props().className).to.equal('welcome-header');
  });

  it('has the correct text for the h1', () => {
    expect(wrapper.find('h1').props().children).to.equal('Welcome to testing React!');
  });

  it('has one h4 tag', () => {
    expect(wrapper.find('h4')).to.have.length(1);
  });

  it('has the correct text for the h1', () => {
    expect(wrapper.find('h4').props().children).to.equal('Comments:');
  });

  it('renders a CommentList component', () => {
    expect(wrapper.find(CommentList)).to.have.length(1);
  });

  it('has the correct props passed into CommentList component', () => {
    expect(typeof(wrapper.find(CommentList).props().onMount)).to.equal('function');
    expect(wrapper.find(CommentList).props().isActive).to.equal(false);
  });
});
