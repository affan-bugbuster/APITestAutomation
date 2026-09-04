// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = 
({
    testDir: './tests',
    retries: 1,
    timeout: 30000,
    expect:
    {
      timeout: 10000,
    },

    reporter: 'html',

    projects:
    [
      {
        name: 'chrome',
        use:
        {
          browserName: 'chromium',
          headless: true,
          screenshot: 'only-on-failure',
          video: 'retain-on-failure',
          trace: 'retain-on-failure'
        }
      },
      {
        name: 'firefox',
        use:
        {
          browserName: 'firefox',
          headless: true,
          screenshot: 'only-on-failure',
          video: 'retain-on-failure',
          trace: 'retain-on-failure'
        }
      },
      {
        name: 'edge',
        use:
        {
          browserName: 'chromium',
          channel: 'msedge',
          headless: true,
          screenshot: 'only-on-failure',
          video: 'retain-on-failure',
          trace: 'retain-on-failure'
        }
      },
      {
        name: 'safari',
        use:
        {
          browserName: 'webkit',
          headless: true,
          screenshot: 'only-on-failure',
          video: 'retain-on-failure',
          trace: 'retain-on-failure'
        }
      }
    ]
});

module.exports = config