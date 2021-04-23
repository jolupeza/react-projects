import { getGifs } from "../../helpers/getGifs";

describe('Testing helper getGifs', () => {
  test('should return 5 elements', async() => {
    const gifs = await getGifs('Dragon Ball');

    expect(gifs.length).toBe(5);
  });

  test('should return 0 elements if not send parameter', async() => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});