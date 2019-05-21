import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Listing from './listings';
import ShoppingCart from './shoppingCart';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shallow renders', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('shallow renders', () => {
  const wrapper2 = shallow(<Listing />);
  expect(wrapper2).toMatchSnapshot();
});

// it('shallow renders', () => {
//   const wrapper3 = shallow(<ShoppingCart />);
//   expect(wrapper3).toMatchSnapshot();
// });