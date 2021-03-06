import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

// Once we set up Karma to run our tests through webpack
// we will no longer need to have these long relative paths
import CommentList from 'components/CommentList';

describe('(Component) CommentList', () => {

  describe('With empty props for CommentList', () => {
    const props = { onMount: 'someString' };
    // const wrapper = mount(<CommentList  {...props} />);

    it('Should throw an error', () => {
      expect(shallow(<CommentList  {...props} />).unrendered).to.not.be.null;
      // console.log('---', wrapper.props());
    });
  });

  describe('Lifecycle methods', () => {
    it('calls componentDidMount', () => {

      // create a spy for the componentDidMount function
      sinon.spy(CommentList.prototype, 'componentDidMount');

      const props = {
        onMount: () => {},
        isActive: false
      }

      // using destructuring to pass props down
      // easily and then mounting the component
      mount(<CommentList {...props} />);

      // CommentList's componentDidMount should have been
      // called once. In testing it's called twice, hence
      // 'called'. When run in dev mode it's called only once.
        expect(CommentList.prototype.componentDidMount.called).to.be.true;
    });

    it('calls onMount prop once it mounts', () => {
      // create a spy for the onMount function
      const props = { onMount: sinon.spy() };

      // mount our component
      mount(<CommentList {...props} />);

      // expect that onMount was called
      expect(props.onMount.calledOnce).to.be.true;
    });
  });

  it('should render as a <ul>', () => {
    const props = { onMount: () => {} };
    const wrapper = shallow(<CommentList  {...props} />);
    expect(wrapper.type()).to.eql('ul');
    expect(wrapper.find('li').props().children).to.equal('Comment One');
    expect(wrapper.find('li').text()).to.equal('Comment One');
  });

  describe('when active...', () => {
    const wrapper = shallow(
      // just passing isActive is an alias for true
      <CommentList onMount={() => {}} isActive />
    )
    it('should render with className active-list', () => {
      expect(wrapper.prop('className')).to.eql('active-list');
    });
  });

  describe('when inactive...', () => {
    const wrapper = shallow(
      // just passing isActive is an alias for true
      <CommentList onMount={() => {}} isActive={false} />
    )
    it('should render with className inactive-list', () => {
      expect(wrapper.prop('className')).to.eql('inactive-list');
    });
  });
});
