const {test, expect} = require ('@playwright/test'); //import required libraries
// JSON file > String > JS object
const dataSet = JSON.parse(JSON.stringify(require ("../utils/CloudBerryStoreTestData.json")));
const users = dataSet.Sheet1;

for (const data of users)
{
    //Write Test
    test (`TC02_Login-${data.username}`, async ({request}) =>
    {
        // get the login page to establish session and obtain login token
        const LoginPageRes = await request.get("https://www.cloudberrystore.services/index.php?route=account/login&language=en-gb");

        // verify the login page succeed
        expect(LoginPageRes.ok()).toBeTruthy();

        // read the html body from login page response
        const html = await LoginPageRes.text();

        // extract login token from html
        const match = await html.match(/login_token=([a-zA-Z0-9]+)/);

        // verify if token exists
        expect(match).not.toBeNull();

        // get the token string
        const loginToken = match[1];

        const loginRes = await request.post(`https://www.cloudberrystore.services/index.php?route=account/login.login&language=en-gb&login_token=${loginToken}`,
        {
            form:
            {
                email: data.username,
                password: data.password
            },
            headers: 
            {
                'x-requested-with': 'XMLHttpRequest',
                'accept': 'application/json, text/javascript, */*; q=0.01',
            },
        }
        )

        // verify login API response status is 2xx
        expect(loginRes.ok()).toBeTruthy();

        const body = await loginRes.json();

        // Validate login success:
        //     Many OpenCart flows return:
        //     - { success: "...", redirect: "..." }
        //     On failure they often return:
        //     - { error: { warning: "..." } }
        expect(body.error, `Login failed for ${data.username}: ${JSON.stringify(body)}`).toBeFalsy();

        // Ensure we got a success marker (success message or redirect)
        expect(body.success || body.redirect, `Unexpected login response: ${JSON.stringify(body)}`).toBeTruthy();

        // Verify authenticated session by opening my account page using same request
        const accountRes = await request.get(`https://www.cloudberrystore.services/index.php?route=account/account&language=en-gb&`);

        // account page loaded successfully
        expect(accountRes.ok()).toBeTruthy();

        // check the account page html contains My Account
        const accountHtml = await accountRes.text();
        expect(accountHtml).toContain('My Account');
    });
}