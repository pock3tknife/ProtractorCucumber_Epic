"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    directConnect: true,
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    Capabilities: {
        browserName: "chrome",
    },
    specs: ["../Features/Test1.feature"],
    cucumberOpts: {
        // require: 'Features/Step_Definitions/StepDef.js',
        format: "json:./cucumberreports.json",
        // format: ['progress', 'pretty:output.txt'],
        //format:'pretty:./cucumberreports2.txt',
        onComplete: () => {
            //var reporter = require('cucumber-html-reporter');
            var options = {
                theme: "bootstrap",
                jsonFile: "./cucumberreports.json",
                output: "./cucumber_report.html",
                reportSuiteAsScenarios: true,
                scenarioTimestamp: true,
                launchReport: true,
                metadata: {
                    "App Version": "0.3.2",
                    "Test Environment": "STAGING",
                    Browser: "Chrome 91.0.4472.124",
                    Platform: "Windows 10",
                    Parallel: "Scenarios",
                    Executed: "Remote",
                },
            };
            reporter.generate(options);
        },
        require: ["Features/Step_Definitions/StepDef.js"],
    },
    plugins: [
        {
            package: require.resolve("protractor-multiple-cucumber-html-reporter-plugin"),
            options: {
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                openReportInBrowser: true,
                pageTitle: "Project Report",
                pageFooter: "<div><p>Protractor with cucumber</p></div>",
                customData: {
                    title: "Protractor Cucucmber Report",
                    data: [
                        { label: "Project", value: "Protractor with Cucumber test" },
                        { label: "Created By", value: "Reynald Calayag" },
                    ],
                },
            },
        },
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsaUVBQW1EO0FBRXhDLFFBQUEsTUFBTSxHQUFXO0lBQzFCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFFcEMsWUFBWSxFQUFFO1FBQ1osbURBQW1EO1FBQ25ELE1BQU0sRUFBRSw2QkFBNkI7UUFDckMsNkNBQTZDO1FBQzdDLHlDQUF5QztRQUV6QyxVQUFVLEVBQUUsR0FBRyxFQUFFO1lBQ2YsbURBQW1EO1lBRW5ELElBQUksT0FBTyxHQUFHO2dCQUNaLEtBQUssRUFBRSxXQUFXO2dCQUNsQixRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxzQkFBc0IsRUFBRSxJQUFJO2dCQUM1QixpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFO29CQUNSLGFBQWEsRUFBRSxPQUFPO29CQUN0QixrQkFBa0IsRUFBRSxTQUFTO29CQUM3QixPQUFPLEVBQUUsc0JBQXNCO29CQUMvQixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2lCQUNuQjthQUNGLENBQUM7WUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFDRCxPQUFPLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztLQUNsRDtJQUNELE9BQU8sRUFBRTtRQUNQO1lBQ0UsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQ3RCLG1EQUFtRCxDQUNwRDtZQUNELE9BQU8sRUFBRTtnQkFDUCwyQkFBMkIsRUFBRSxJQUFJO2dCQUNqQyw0QkFBNEIsRUFBRSxJQUFJO2dCQUNsQyxtQkFBbUIsRUFBRSxJQUFJO2dCQUN6QixTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQixVQUFVLEVBQUUsNENBQTRDO2dCQUN4RCxVQUFVLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLDZCQUE2QjtvQkFDcEMsSUFBSSxFQUFFO3dCQUNKLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsK0JBQStCLEVBQUU7d0JBQzVELEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUU7cUJBQ2xEO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQyJ9