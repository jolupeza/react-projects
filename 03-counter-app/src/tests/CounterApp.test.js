import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Testing component Counter App', () => {
  test( 'should show component CounterApp', () => {
    const wrapper = shallow( <CounterApp /> );
    expect( wrapper ).toMatchSnapshot();
  });

  test('should show default value to 100', () => {
    const wrapper = shallow( <CounterApp value={ 100 } />);
    const wrapperValue = Number( wrapper.find( 'h2' ).text().trim() );
    expect( wrapperValue ).toBe(100);
  });
});
