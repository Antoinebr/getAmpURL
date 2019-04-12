const {URL} = require('url');
const fetch = require('node-fetch');
const chalk = require('chalk');


(async () => {

    // take the URL from the CLI args
    process.argv.splice(0, 2);

    let [cannonicalURL = false] = process.argv;

    if (!cannonicalURL) {
        throw new error('Missing cannonical URL ! Provide the cannonical URL as a first Command Line Interface arguement');
    }

    // Build the URL
    let parsedCannonicalURL = new URL(cannonicalURL);

    parsedCannonicalURL = parsedCannonicalURL.host + parsedCannonicalURL.pathname;

    // Fetch the URL and check for error 
    const response = await fetch(`https://cdn.ampproject.org/c/s/${parsedCannonicalURL}`);

    // if reponse is not correct
    if (!response.ok) throw new Error(`We received an invalid response ${await response.text()}`);

    // If no error print the result in the console
    console.log(' \n \n',chalk.blue(cannonicalURL),` \n \n Is in the Google AMP ⚡️ cache at the following location : \n \n`, chalk.green(response.url),'\n\n');

})()
.catch(e => console.log('Something wrong happened', e));




