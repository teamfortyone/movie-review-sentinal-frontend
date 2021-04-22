export type ReviewSentimentResponse = {
  positive?: number;
  negative?: number;
  error?: string
}

export enum Sentiment {
  POSITIVE = 'Positive',
  NEGATIVE = 'Negative'
}