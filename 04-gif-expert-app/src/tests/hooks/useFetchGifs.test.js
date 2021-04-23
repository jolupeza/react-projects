import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Test hook useFetchGifts', () => {
  test('should return initial state', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return array images and loading in false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(5);
    expect(loading).toBe(false);
  });
});