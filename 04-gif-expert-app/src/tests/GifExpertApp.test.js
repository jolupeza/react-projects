import { shallow } from 'enzyme';
import GiftExpertApp from '../GifExpertApp';

describe('Test component GifExpertApp', () => {
  test('should show component GifGrid', () => {
    const wrapper = shallow(<GiftExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should show categories list', () => {
    const categories = ['One Punch', 'Dragin Ball'];
    const wrapper = shallow(<GiftExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});