module.exports = { ci: {
  collect: { staticDistDir: './dist', numberOfRuns: 3, settings: { chromeFlags: '--no-sandbox --disable-dev-shm-usage' } },
  assert: { assertions: {
    'categories:performance': ['error', { minScore: 0.85, aggregationMethod: 'median' }],
    'categories:accessibility': ['error', { minScore: 0.95, aggregationMethod: 'median' }],
    'largest-contentful-paint': ['error', { maxNumericValue: 2500, aggregationMethod: 'median' }],
    'cumulative-layout-shift': ['error', { maxNumericValue: 0.1, aggregationMethod: 'median' }]
  } }
} }
