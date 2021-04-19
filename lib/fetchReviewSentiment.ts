import axios from 'axios';

import { ReviewSentimentResponse } from './models';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchReviewSentiment = async (reviewText: string): Promise<ReviewSentimentResponse> => {
  const encodedText = encodeURI(reviewText);
  const res = await axios.get(BASE_URL, {
    params: { 
      q: encodedText
    }
  });
  return res.data;
}

export default fetchReviewSentiment;