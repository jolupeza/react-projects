import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Test component AddCategory', () => {
  const setCategories = jest.fn();
  const value = 'Hola mundo';
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should show component AddCategory', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should change input text', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
  });

  test('should not send the data with submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean input text', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.prop('value')).toBe('');
  });
});
