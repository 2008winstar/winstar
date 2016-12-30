/**
 * @file file description here.
 * @author winstar
 * @date 2016/12/15
 */
var request = require("request"),
    cheerio = require("cheerio"),
    url = 'http://www.baidu.com';

request(url, function (error, response, body) {
    if (!error) {
        console.log(body);
        var $ = cheerio.load(body),
            temperature = $("[data-variable='temperature'] .wx-value").html();

        console.log("It’s " + temperature + " degrees Fahrenheit.");
    } else {
        console.log("We’ve encountered an error: " + error);
    }
});