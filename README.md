## Sentiment Analysis on Movie

This is the frontend web application for our Sentiment Analysis on Movie Reviews project.

## Development

The project was developed and tested on Node.js v14

1. Clone this repository
   ```
   git clone https://github.com/teamfortyone/movie-review-sentinal-frontend.git
   ```
2. Install necessary dependencies
   ```
   npm install
   ```
3. Run development server

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Connecting to the lambda function

This repository acts as the web frontend to [this serverless lambda function](https://github.com/teamfortyone/sentiment-analysis-lambda).

Follow the Deployment steps there to host your own function.

Once you get the API endpoint URL, use it as an environment variable. For local development, create a `.env.local` file in the root of this project and set the variable:

    NEXT_PUBLIC_BASE_URL=<paste your API endpoint URL here>

For environment variables in a Netlify deployment, follow [this tutorial](https://www.netlify.com/blog/2020/12/10/environment-variables-in-next.js-and-netlify/).

## Deployment

Once you've set up your lambda function with API Gateway, you're ready to deploy the frontend that calls it.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/teamfortyone/movie-review-sentinal-frontend)

## License

MIT License
