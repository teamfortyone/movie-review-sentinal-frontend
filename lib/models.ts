export type ReviewSentimentResponse = {
  sentiment?: "Positive" | "Negative";
  score?: number;
  error?: string
}