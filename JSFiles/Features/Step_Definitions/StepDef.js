"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const HomePage_1 = require("../../PageObjects/HomePage");
const AddCustomer_1 = require("../../PageObjects/AddCustomer");
var expect = chai_1.default.expect;
let objHome = new HomePage_1.Home();
let objAddCustomer = new AddCustomer_1.Addcustomer();
cucumber_1.Given("I launch the url {string}", { timeout: 60 * 1000 }, function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(url).then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.driver.manage().window().maximize();
                yield protractor_1.browser.sleep(5000);
            });
        });
    });
});
cucumber_1.When("I click on Bank Manager Login", { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objHome.btnManagerLogin.click();
        //await browser.sleep(5000)
    });
});
cucumber_1.When("I click on Add customer", { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.addcustomerLink.click();
        yield protractor_1.browser.sleep(5000);
    });
});
cucumber_1.When("I give the customer details {string}, {string},{string}", { timeout: 60 * 1000 }, function (fname, lname, postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.firstName.sendKeys(fname);
        yield objAddCustomer.lastName.sendKeys(lname);
        yield objAddCustomer.postCode.sendKeys(postcode);
        yield protractor_1.browser.sleep(5000);
    });
});
cucumber_1.When("I click on Add customer button", { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield objAddCustomer.AddcustomerButton.click();
        yield protractor_1.browser.sleep(5000);
    });
});
cucumber_1.Then("I should get the popup", { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield protractor_1.browser
                .switchTo()
                .alert()
                .getText()
                .then(function (popupmessage) {
                console.log(popupmessage);
                protractor_1.browser.switchTo().alert().accept();
                expect(popupmessage).to.include("Customer added successfully with customer id");
            });
        }
        catch (error) {
            console.log("Exception in Alert: " + error);
            expect(true).to.equal(false);
        }
    });
});
cucumber_1.Before(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.manage().deleteAllCookies();
    });
});
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFvRTtBQUNwRSwyQ0FBa0Q7QUFDbEQsZ0RBQXdCO0FBQ3hCLHlEQUFrRDtBQUNsRCwrREFBNEQ7QUFDNUQsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV6QixJQUFJLE9BQU8sR0FBRyxJQUFJLGVBQUksRUFBRSxDQUFDO0FBQ3pCLElBQUksY0FBYyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQ3ZDLGdCQUFLLENBQ0gsMkJBQTJCLEVBQzNCLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFDdEIsVUFBZ0IsR0FBRzs7UUFDakIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUMxQixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQUEsQ0FDRixDQUFDO0FBRUYsZUFBSSxDQUNGLCtCQUErQixFQUMvQixFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQ3RCOztRQUNFLE1BQU0sT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QywyQkFBMkI7SUFDN0IsQ0FBQztDQUFBLENBQ0YsQ0FBQztBQUVGLGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQ3RELE1BQU0sY0FBYyxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQ0YseURBQXlELEVBQ3pELEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFDdEIsVUFBZ0IsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFROztRQUNwQyxNQUFNLGNBQWMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLE1BQU0sY0FBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsTUFBTSxjQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FBQSxDQUNGLENBQUM7QUFFRixlQUFJLENBQ0YsZ0NBQWdDLEVBQ2hDLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFDdEI7O1FBQ0UsTUFBTSxjQUFjLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQUEsQ0FDRixDQUFDO0FBRUYsZUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDckQsSUFBSTtZQUNGLE1BQU0sb0JBQU87aUJBQ1YsUUFBUSxFQUFFO2lCQUNWLEtBQUssRUFBRTtpQkFDUCxPQUFPLEVBQUU7aUJBQ1QsSUFBSSxDQUFDLFVBQVUsWUFBWTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQzdCLDhDQUE4QyxDQUMvQyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5QjtJQUNILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxpQkFBTSxDQUFDOztRQUNMLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxnQkFBSyxDQUFDLFVBQWdCLFFBQVE7O1FBQzVCLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssaUJBQU0sQ0FBQyxNQUFNLEVBQUU7WUFDNUMsTUFBTSxVQUFVLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9