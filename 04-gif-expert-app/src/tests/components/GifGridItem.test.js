import { shallow } from 'enzyme';
import GifGridItem from '../../components/GiftGridItem';

describe('Testing component GifGridItem', () => {
  const title = 'My title';
  const url = 'https://test.net/img.jpg';

  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('should show component GifGridItem', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have a parragraph with the title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('should have a image equal to url and attribute alt', () => {
    const image = wrapper.find('img');
    expect(image.prop('src')).toBe(url);
    expect(image.prop('alt')).toBe(title);
  });

  test('should have class animate__fadeIn', () => {
    const div = wrapper.find('div');
    const className = div.prop('className');

    expect(className.includes('animated__fadeIn')).toBe(true);
  });
});
