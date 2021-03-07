import { assertEquals,assertStringIncludes } from 'https://deno.land/std@0.89.0/testing/asserts.ts';
import puppeteer from 'https://deno.land/x/puppeteer@5.5.1/mod.ts';

const baseUrl = Deno.env.get('TEST_BASEURL') ||'http://188.166.149.195';

Deno.test('must have / responding code 200', async () => {
  const response = await fetch(baseUrl + '/');
  const { status } = response;
  //   console.log(response);
  assertEquals(status, 200);
  await response.body.cancel();
});
Deno.test(
  'must have api/status responding code 200',
  async () => {
    const response = await fetch(baseUrl + '/api/status');
    const { status } = response;
    //   console.log(response);
    assertEquals(status, 200);
    await response.body.cancel();
  },
);

Deno.test({
  name: 'must have a working link to github',
  fn: async () => {
    // const browser = await puppeteer.launch({headless: true});
    const browser = await puppeteer.launch({
        args: ['--disable-dev-shm-usage','--no-sandbox']
      });
    const page = await browser.newPage();
    await page.goto( baseUrl);
    await page.waitForSelector('a.github');

    await page.click('a.github');
    await page.waitForSelector('.page-profile');
    // await page.waitForNavigation({waitUntil:'networkidle0',timeout: 5000}); // TODO not working for some reason
    const url = await page.url();
    assertStringIncludes(url, '/jupegarnica');
    await browser.close();
  },
});
