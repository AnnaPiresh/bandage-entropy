/**
 * Created by Anna Piresh on 14.04.2016.
 */

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['pauzzle_homepage.js'],
    browserName: 'chrome',
    //directConnect: true,
    jasmineNodeOpts: {
        showColors: true // Use colors in the command line report.
    },
    onPrepare: function() { //allows to set browser size without window().maximize()
        var width = 1900;
        var height = 1400;
        browser.driver.manage().window().setSize(width, height);
    },
    directConnect: true   //connect to local browser without starting Selenium Server

};