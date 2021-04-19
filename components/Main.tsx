import React, {
  useRef,
  useState,
} from 'react';

import fetchReviewSentiment from '../lib/fetchReviewSentiment';
import { ReviewSentimentResponse } from '../lib/models';

export default function Main(): JSX.Element {
  const reviewTextRef = useRef<HTMLTextAreaElement>();
  const [
    sentimentResponse,
    setSentimentResponse,
  ] = useState<ReviewSentimentResponse>();
  const [showLoading, setShowLoading] = useState<boolean>(false);

  const getSentimentForText = async (reviewText: string) => {
    if (sentimentResponse) {
      setSentimentResponse(undefined);
    }
    setShowLoading(true);
    const response: ReviewSentimentResponse = await fetchReviewSentiment(
      reviewText
    );
    setShowLoading(false);
    setSentimentResponse(response);
  };

  return (
    <div className="flex flex-col items-center p-10 mx-20 rounded-lg border-4 border-light-blue-500 border-opacity-100">
      <span className="font-bold">Type in your review</span>
      <textarea
        className="w-5/6 mt-4 px-3 py-2 min-h-full max-h-40 text-gray-700 border rounded-lg focus:outline-none"
        id="review-text"
        name="review-text"
        rows={4}
        minLength={3}
        maxLength={500}
        autoComplete="on"
        ref={reviewTextRef}
        defaultValue={'Loved every moment of the film. One for the ages!'}
      />
      <button
        className="mt-6 p-2 bg-green-500 bg-opacity-75 rounded-lg font-bold text-white"
        onClick={() => getSentimentForText(reviewTextRef.current.value)}
      >
        Check sentiment
      </button>
      {showLoading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black mt-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      {sentimentResponse ? (
        <div className="flex flex-col gap-4 mt-4 p-4 border-2 border-light-blue-500 border-opacity-100">
          <div>
            Sentiment:{' '}
            {sentimentResponse.sentiment === 'Positive' ? (
              <span className="font-bold text-green-500">Positive</span>
            ) : (
              <span className="font-bold text-red-500">Negative</span>
            )}
          </div>
          <div>Confidence Score: {sentimentResponse.score.toFixed(5)}</div>
        </div>
      ) : null}
    </div>
  );
}
