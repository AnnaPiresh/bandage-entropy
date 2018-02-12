/**
 * Created by Anna Piresh on 14.04.2016.
 */

describe ("Actions on homepage", function () {

    var expectedConditions = protractor.ExpectedConditions;
    var searchButton = $('.btn.btn-default.m-0.pull-right');
    var isVisible = expectedConditions.elementToBeClickable(searchButton);
    var searchField = element.all(by.css('[name="q"]')).get(0);
    var searchTerm = 'Kathie';
    var getStartedButtons = element.all(by.css('.btn.btn-primary'));
    var seeAllCategoriesBtn = $('.btn.btn-default.btn-block-xs.font-gotham-medium');


    beforeEach(function(){
        //browser.manage().window().maximize();
        browser.get('https://www.upwork.com/');
    });

    it("should search for a freelancer from a homepage", function () {
        searchField.click();
        searchField.sendKeys(searchTerm);
        searchField.sendKeys(protractor.Key.ENTER);
        browser.wait(isVisible, 5000).then(function(){
            var listOfFreelancers = element.all(by.css('.jsShortName'));
            listOfFreelancers.get(0).getText().then(function(text){
                var firstName = text.slice(0,6);
                expect(firstName).toEqual(searchTerm);
            });
        });
    });

    it("should lead to sign up page after \"Get started\" button", function () {
        getStartedButtons.get(4).click().then(function(){
            var accountMessage = $('.navbar-text.text-right>span').isPresent();
                expect(accountMessage).toBe(true);
            });
        });

    it("should show freelancer's categories совсем как Денис :)", function () {
        seeAllCategoriesBtn.click().then(function () {
            var skillNameField = $('.form-control').isPresent();
            expect(skillNameField).toBe(true);
        });
    });

});

