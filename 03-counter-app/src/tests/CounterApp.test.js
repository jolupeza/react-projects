import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Testing component Counter App', () => {
  let wrapper = shallow( <CounterApp /> );

  beforeEach( () => {
    wrapper = shallow( <CounterApp /> );
  });

  test( 'should show component CounterApp', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should show default value to 100', () => {
    const wrapper = shallow( <CounterApp value={ 100 } />);
    const wrapperValue = Number( wrapper.find( 'h2' ).text().trim() );
    expect( wrapperValue ).toBe(100);
  });

  test('should increment value counter', () => {
    wrapper.find( 'button' ).at(0).simulate('click');
    const wrapperValue = Number( wrapper.find( 'h2' ).text().trim() );
    expect(wrapperValue).toBe(11);
  });

  test('should decrement value counter', () => {
    wrapper.find( 'button' ).at(2).simulate('click');
    const wrapperValue = Number( wrapper.find( 'h2' ).text().trim() );
    expect(wrapperValue).toBe(9);
  });

  test('should reseted value counter', () => {
    const wrapper = shallow( <CounterApp value={ 105 } />);
    wrapper.find( 'button' ).at(0).simulate('click');
    wrapper.find( 'button' ).at(1).simulate('click');
    const wrapperValue = Number( wrapper.find( 'h2' ).text().trim() );
    expect(wrapperValue).toBe(105);
  });

  test('should not decrement value minus to zero', () => {
    const wrapper = shallow( <CounterApp value={ 0 } />);
    wrapper.find( 'button' ).at(2).simulate('click');
    const wrapperValue = Number( wrapper.find( 'h2' ).text().trim() );
    expect(wrapperValue).toBe(0);
  });
});
