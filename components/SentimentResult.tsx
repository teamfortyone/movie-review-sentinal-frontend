import React from 'react';

import {
  ReviewSentimentResponse,
  Sentiment,
} from '../lib/models';

export default function SentimentResult({
  response,
}: {
  response: ReviewSentimentResponse;
}) {
  const sentiment =
    response.positive >= response.negative
      ? Sentiment.POSITIVE
      : Sentiment.NEGATIVE;
  const score: number =
    sentiment === Sentiment.POSITIVE ? response.positive : response.negative;

  return (
    <div className="flex flex-col gap-4 mt-4 p-4 border-2 border-light-blue-500 border-opacity-100">
      <div>
        Overall Sentiment:{' '}
        {sentiment === Sentiment.POSITIVE ? (
          <span className="font-bold text-green-500">{Sentiment.POSITIVE}</span>
        ) : (
          <span className="font-bold text-red-500">{Sentiment.NEGATIVE}</span>
        )}
      </div>
      <div>Confidence Score: {score.toFixed(5)}</div>
    </div>
  );
}
