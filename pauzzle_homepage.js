/**
 * Created by Anna Piresh on 20.04.2016.
 */

describe("Actions performed on homepage", function(){
    var lancerCePuzzleBtn = $$('.btn.btn-warning.bt-play');

    beforeEach(function () {
        browser.get("http://www.pauzzle.fr/#/home");
    });

    it("popup with puzzle options should be displayed", function(){
        //add waiter here

        lancerCePuzzleBtn.click().then(function(){
            var currentWindow = browser.driver.getWindowHandle().then(function (handle) {
                console.log(handle);
            });
        });
    });
});