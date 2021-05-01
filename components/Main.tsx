import React, {
  useRef,
  useState,
} from 'react';

import fetchReviewSentiment from '../lib/fetchReviewSentiment';
import { ReviewSentimentResponse } from '../lib/models';
import SentimentResult from './SentimentResult';
import SpinningLoader from './SpinningLoader';

export default function Main(): JSX.Element {
  const reviewTextRef = useRef<HTMLTextAreaElement>();
  const [
    sentimentResponse,
    setSentimentResponse,
  ] = useState<ReviewSentimentResponse>();
  const [showLoader, setShowLoader] = useState<boolean>(false);

  const getSentimentForText = async (reviewText: string) => {
    if (sentimentResponse) {
      setSentimentResponse(undefined);
    }
    setShowLoader(true);
    const response: ReviewSentimentResponse = await fetchReviewSentiment(
      reviewText
    );
    setShowLoader(false);
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
      {showLoader && <SpinningLoader />}
      {sentimentResponse && <SentimentResult response={sentimentResponse} />}
    </div>
  );
}
