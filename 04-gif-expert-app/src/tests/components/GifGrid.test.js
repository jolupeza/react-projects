import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test component AddCategory', () => {
  const category = 'Dragon Ball';

  test('should show component GifGrid', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items when load images', () => {
    const gifs = [
      { id: 'ABC', url: 'https://localhost/image.png', title: 'Goku'},
      { id: 'DEF', url: 'https://localhost/image.png', title: 'Goku'},
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  });
});
