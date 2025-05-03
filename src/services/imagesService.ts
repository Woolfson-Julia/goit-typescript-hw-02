import axios from 'axios';
import { Image, ImageSearchResponse } from '../components/App/App.types';



export const fetchImages = async (topic: string, currentPage: number): Promise<Image[]> => {
  try {
    const response = await axios.get<ImageSearchResponse>('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'YcxlRspkhN8jxkIwedxhJPCTQsoC8f57HtjeLCsgiS4',
      query: topic,
      per_page: 12,
      page: currentPage,
      orientation: 'landscape',
    },
  });
  return response.data.results;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unknown error:", error);
    }
    throw new Error("Failed to fetch images");
  }
}

