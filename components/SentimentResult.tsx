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
  const { sentiment, score } = determineSentiment(response);
  const fontColor =
    sentiment === Sentiment.POSITIVE
      ? 'text-green-500'
      : sentiment === Sentiment.NEGATIVE
      ? 'text-red-500'
      : 'text-black-500';

  return (
    <div className="flex flex-col gap-4 mt-4 p-4 border-2 border-light-blue-500 border-opacity-100">
      <div>
        Overall Sentiment:{' '}
        <span className={`font-bold ${fontColor}`}>{sentiment}</span>
      </div>
      <div>Confidence Score: {score.toFixed(5)}</div>
    </div>
  );
}

const determineSentiment = (
  response: ReviewSentimentResponse
): {
  sentiment: Sentiment;
  score: number;
} => {
  const { positive, negative } = response;

  const difference = Math.abs(positive - negative);
  if (difference <= 0.1) {
    const score = 1 - difference;
    return { sentiment: Sentiment.NEUTRAL, score: score };
  }

  const sentiment =
    response.positive >= response.negative
      ? Sentiment.POSITIVE
      : Sentiment.NEGATIVE;
  const score: number =
    sentiment === Sentiment.POSITIVE ? response.positive : response.negative;
  return { sentiment: sentiment, score: score };
};
