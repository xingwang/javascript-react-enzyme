# javascript-react-enzyme
Simple example of basic react testing using enzyme.
Has the setup for the following:
* karma + enzyme + mocha + chai + webpack + babel
* mocha + enzyme + chai + webpack + babel

The original source can be found [here](https://github.com/gihrig/react-testing-starter-kit), which is a fork of [this](https://github.com/SpencerCDixon/react-testing-starter-kit).

## testing notes
Working with enzyme the past few days has been fairly easy. I was able to get most of the components tested simply by doing a shallow render and then checking the props or its children's props.

While working with Redux, I had to bring in proxyquire and sinon to get most things mocked properly. By moving all the logic of the mapStateToProps, mapDispatchToProps, and mergeProps to another file and importing them into the container file, I was able to leave only the single connect line not completely covered. The reason why it's not completely covered is due to sinon not being able to pick up on the curried function with the presentation layer. Either that or I haven't figured out how yet.
