import React from "react";
import testops from "../../assets/testops-main-top-photo.svg";
import insights from "../../assets/katalon-testops-actionable-insights.svg";
import workflow from "../../assets/katalon-testops-improved-workflow.svg";
import devops from "../../assets/katalon-testops-streamlined-devops.svg";
import centralize from "../../assets/testops-test-management-centralize-v1.svg";
import getorganized from "../../assets/testops-test-management-get-organized.svg";
import prioritize from "../../assets/testops-test-planning-maximize.svg";
import maximize from "../../assets/testops-test-planning-plan-prioritize.svg";
import evaluate from "../../assets/testops-test-planning-evaluate.svg";
import execution from "../../assets/testops-test-execution-photo.svg";
import Advancedreports from "../../assets/testops-advanced-reports.svg";
import MonitorAndAlert from "../../assets/testops-monitor-and-alerts.svg";
import Testingframeworks from "../../assets/testops-seamlessly-testing-frameworks.svg";
import CiCdTools from "../../assets/testops-seamlessly-ci-cd-tools.svg";
import jiraIntegration from "../../assets/jira_integration.svg";
import SlackIntegration from "../../assets/slack_integration.svg";
import CustomIntegration from "../../assets/testops-custom-integrations-with-sdk-photo.svg";


const Home = () => {
  return (
    <div className="h-full  w-auto ">
      {/* testops  */}

      <div className=" flex flex-col items-center justify-center lg:flex-row">
        <div className=" ml-5 items-center mx-auto  flex  flex-col  justify-center h-full  mr-5">
          <h1 className="font-semibold text-4xl sm:text-5xl mt-5 ">
            Emeelan TestOps
          </h1>
          <p className="text-center md:ml-16 md:pl-4 sm:ml-0 py-4 text-xl">
            Orchestrate Tests. Connect DevOps. Act on Insights
          </p>
          <div>
            <button className="hover:bg-custom-hover bg-custom-green text-white mr-5 px-10 py-3 rounded-md cursor-pointer">
              Start for free
            </button>
            <button className="border-2 border-custom-green text-black px-10 py-3 rounded-md cursor-pointer">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="">
          <img
            src={testops}
            alt="TestOps"
            className="md:pl-20 mt-5 ml-auto p-5  md:w-auto"
          />
        </div>
      </div>

      {/* section-2  */}
      <div className="mx-auto  mt-20 flex flex-col md:flex-row  md:grid-cols-3 gap-10 md:px-20">
        <div className="items-center justify-center">
          <img src={workflow} alt="workflow" className="mx-auto" />
          <h1 className="font-semibold text-center text-xl sm:text-2xl mt-3">
            Improved Workflow
          </h1>
          <p className="text-center mt-2 ">
            Eliminate bottlenecks and friction in all processes to ensure
            consistency and accuracy for your builds.
          </p>
        </div>
        <div>
          <img src={devops} alt="devops" className="mx-auto" />
          <h1 className="font-semibold text-center text-xl sm:text-2xl mt-3">
            Streamlined DevOps
          </h1>
          <p className="text-center mt-2 ">
            Standardize manual processes, remove complexities and enhance
            coordination in your DevOps pipeline.
          </p>
        </div>
        <div>
          <img src={insights} alt="Insights" className="mx-auto" />
          <h1 className="font-semibold text-center text-xl sm:text-2xl mt-3">
            Actionable Insights
          </h1>
          <p className="text-center mt-2 ">
            Deliver better product quality with data-based strategies and spend
            less time digesting endless log files.
          </p>
        </div>
      </div>

      {/* section-3  Test Management*/}
      <div>
        <h1 className="font-bold text-center text-3xl sm:text-4xl mt-20">
          Orchestrate Tests & DevOps efficiently. Release faster.
        </h1>
      </div>

      <div>
        <h1 className="font-bold text-center text-3xl sm:text-4xl mt-20 text-[#5959eb]">
          Test Management
        </h1>
        <div className="mx-auto  mt-10 flex flex-col md:flex-row md:grid md:grid-cols-2 p-5 sm:px-10 text-center md:text-left md:gap-32 md:px-20">
          <div>
            <img src={centralize} alt="Centralize" className="inline pb-3" />
            <h1 className="font-medium text-2xl sm:3xl font-[Roboto]">
              Centralize everything. Get visibility. Enhance collaboration
            </h1>
            <p className="mt-3">
              TestOps takes care of all your execution infrastructure and
              scalability. Skip the deployment and maintenance steps to make
              more room for innovation.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <img
              src={getorganized}
              alt="Get Organized"
              className="inline pb-3"
            />
            <div className="">
              <h1 className="font-medium font-[Roboto] text-2xl sm:3xl">
                Get organized.{" "}
                <span className="block"> Focus on the right tests </span>
              </h1>
              <p className="mt-3">
                Map project requirements and milestones to specific test cases.
                Create Test Suites to package tests together, even across
                different frameworks and environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section-4  Test Planning*/}
      <div>
        <h1 className="font-bold text-center text-3xl sm:text-4xl mt-20 text-[#5959eb]">
          Test Planning
        </h1>
        <div className="mx-auto  mt-10 flex flex-col md:flex-row md:grid md:grid-cols-3 p-5 text-center md:text-left md:gap-32 md:px-20">
          <div>
            <img src={maximize} alt="Centralize" className="inline pb-3" />
            <h1 className="font-medium text-2xl sm:3xl font-[Roboto]">
              Plan, prioritize efficiently with smart scheduling
            </h1>
            <p className="mt-3">
              TestOps smartly prioritizes the essential tests, so that you can
              optimize your test cycle while maintaining high quality.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <img src={prioritize} alt="Get Organized" className="inline pb-3" />
            <div className="">
              <h1 className="font-medium font-[Roboto] text-2xl sm:3xl">
                Maximize resources and drive ROI
              </h1>
              <p className="mt-3">
                Effective planning mechanism to maximize server usage, improve
                environment coverage, and ultimately increase your ROI.
              </p>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <img src={evaluate} alt="Get Organized" className="inline pb-3" />
            <div className="">
              <h1 className="font-medium font-[Roboto] text-2xl sm:3xl">
                Evaluate release readiness
              </h1>
              <p className="mt-3">
                Analyze the quality of your releases and evaluate readiness.
                When your development team deploys your software, TestOps helps
                you do it with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section-5 Test Execution */}
      <div>
        <h1 className="font-bold text-center  md:text-left sm:text-left md:pl-20 text-3xl sm:text-4xl mt-20 text-[#5959eb]">
          Test Execution
        </h1>
        <div className="mx-auto  mt-2 flex flex-col md:flex-start md:flex-row p-5 text-center md:text-left  md:px-20">
          <div>
            <div className="">
              <h1 className="opacity-90 font-medium mt-3 text-2xl sm:3xl font-[Roboto]">
                Streamlined, serverless solution
              </h1>
              <p className="mt-2 leading-relaxed">
                TestOps handles all your execution infrastructure and
                scalability. Skip the deployment and maintenance steps to make
                more room for innovation.
              </p>
            </div>
            <div>
              <h1 className="opacity-90 font-medium mt-6 text-2xl sm:3xl font-[Roboto]">
                Automatic load balancing to reduce run time
              </h1>
              <p className="mt-2 leading-relaxed">
                TestOps automatically balances your Test Runs across available
                Test Environments in your CI provider to drastically reduce your
                run times.
              </p>
            </div>
            <div>
              <h1 className=" opacity-90 font-medium mt-6 text-2xl sm:3xl font-[Roboto]">
                Parallel execution to speed up as you grow
              </h1>
              <p className="mt-2 leading-relaxed">
                Execute tests on multiple devices at once to easily scale your
                execution processes, improve test coverage, and shorten the
                delivery cycle.
              </p>
            </div>
          </div>
          <img
            src={execution}
            alt="Execution"
            className="md:p-5 mt-10 md:mt-0"
          />
        </div>
      </div>

      {/* section-6 Advanced reports */}
      <div>
        <h1 className="font-bold text-center text-3xl sm:text-4xl mt-16">
          Build Quality Insights into Your CI/CD Pipeline
        </h1>
      </div>
      <div>
        <h1 className="font-bold text-center md:text-left sm:text-center md:ml-96 md:pl-72 pb-5 md:pb-0 sm:pb-0 text-3xl sm:text-4xl mt-20 text-[#5959eb]">
          Advanced Reports
        </h1>

        <div className="mx-auto  mt-0 flex flex-col md:flex-start md:flex-row p-5 text-center md:text-left  md:px-20">
          <img
            src={Advancedreports}
            alt="AdvancedReports"
            className="sm:mt-10 md:mt-0"
          />

          <div className="p-5 md:ml-16">
            <div className="">
              <h1 className="opacity-90 font-medium mt-3 text-2xl sm:3xl font-[Roboto]">
                Get the full picture on quality
              </h1>
              <p className="mt-2 leading-relaxed">
                Leverage out-of-the-box reports for quality, coverage analysis,
                test flakiness, and dashboards to report on the metrics that
                matter most to your business.
              </p>
            </div>
            <div>
              <h1 className="opacity-90 font-medium mt-6 text-2xl sm:3xl font-[Roboto]">
                Understand failures ASAP
              </h1>
              <p className="mt-2 leading-relaxed">
                Automatically detect assertions in each Test Case. Look at rich
                execution reports with HAR files, videos, screenshots, execution
                logs, error messages, and accessibility artifacts to get a clear
                understanding of issues.
              </p>
            </div>
            <div>
              <h1 className="opacity-90 font-medium mt-6 text-2xl sm:3xl font-[Roboto]">
                Streamline result collection and analysis
              </h1>
              <p className="mt-2 leading-relaxed">
                TestOps robust failure analysis and reporting capabilities work
                across any framework you use, not just Katalon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section-7 monitoring and alerts  */}
      <div>
        <h1 className="font-bold text-center md:text-left sm:text-left md:pl-20 text-3xl sm:text-4xl mt-20 text-[#5959eb]">
          Monitoring and Alerts
        </h1>
        <div className="mx-auto  mt-2 flex flex-col md:flex-start md:flex-row p-5 text-center md:text-left  md:px-20">
          <div>
            <div className="">
              <h1 className="opacity-90 font-medium mt-3 text-2xl sm:3xl font-[Roboto]">
                Real-time data tracking for fast, accurate debugging
              </h1>
              <p className="mt-2 leading-relaxed">
                View full reports on execution logs and screens during the
                running process. Quickly, easily detect the root causes of any
                rising issues.
              </p>
            </div>
            <div>
              <h1 className="opacity-90 font-medium mt-6 text-2xl sm:3xl font-[Roboto]">
                Make decisions faster with live monitoring
              </h1>
              <p className="mt-2 leading-relaxed">
                Instant feedback on codes, test scripts and application quality
                to help you make adjustments in tough situations.
              </p>
            </div>
            <div>
              <h1 className=" opacity-90 font-medium mt-6 text-2xl sm:3xl font-[Roboto]">
                Customizable alerts for full control
              </h1>
              <p className="mt-2 leading-relaxed">
                Get notifications under your defined conditions and thresholds.
                Manage your systems without undergoing continuous follow-ups.
              </p>
            </div>
          </div>
          <img
            src={MonitorAndAlert}
            alt="Execution"
            className="md:pl-10 mt-10 md:mt-0"
          />
        </div>
      </div>

      {/* section-8 Frameworks and tools  */}
      <div>
        <h1 className="font-bold text-center text-3xl sm:text-4xl mt-20">
          Seamlessly Integrate Your Ecosystem
        </h1>
      </div>

      <div>
        <div className="mx-auto   flex flex-col md:flex-row md:grid md:grid-cols-2 p-5 sm:px-10 text-center md:text-left md:gap-32 md:px-20">
          <div>
            <h1 className="font-bold text-center text-3xl sm:text-4xl md:mt-20 mt-5 text-[#5959eb]">
              Testing Frameworks
            </h1>
            <img
              src={Testingframeworks}
              alt="Testing Frameworks"
              className="p-3 flex mx-auto md:justify-center md:items-center md:mt-10"
            />
            <p className="mt-3 text-center">
              We built TestOps with Katalon Studio and Katalon Recorder in mind,
              but you can easily integrate with other frameworks too, no coding
              required: (coming soon) TestNG, JUnit, Jest, Mocha, Jasmine.
            </p>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="">
              <h1 className="font-bold text-center text-3xl sm:text-4xl mt-5 md:mt-20 text-[#5959eb]">
                CI / CD Tools
              </h1>
              <img
                src={CiCdTools}
                alt="Get Organized"
                className="p-3 flex mx-auto md:justify-center md:items-center  md:mt-10 "
              />
              <h1 className="font-semibold text-center font-base sm:2xl font-[Roboto]">
                Integrations with top CI tools
              </h1>
              <p className="mt-1 text-center">
                Trigger orchestration via Jenkins, Bamboo, Azure DevOps. Your
                pipeline is manageable in both Katalon and CI tools.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="">
            <h1 className="font-bold text-center text-3xl sm:text-4xl mt-5 md:mt-20 text-[#5959eb]">
              Test Environments
            </h1>
            <img
              src={CiCdTools}
              alt="Get Organized"
              className="p-3 flex mx-auto md:justify-center md:items-center md:m-auto md:mt-10 "
            />
          </div>
        </div>
      </div>

      {/* section-9 project management requirement..  */}
      <div>
        <h1 className="font-bold text-center text-3xl sm:text-4xl mt-20 text-[#5959eb]">
          Project Management, Requirements, Collaboration
        </h1>
        <div className="mx-auto md:pr-20 md:pl-20 mt-10 flex flex-col md:flex-row md:grid md:grid-cols-2  sm:px-10 text-center  md:gap-28 md:px-30">
          <div className="md:pl-16">
            <img
              src={jiraIntegration}
              alt="Jira"
              className="p-3 flex mx-auto md:justify-center md:items-center"
            />
            <h1 className="font-medium md:mt-3 text-center text-2xl sm:3xl font-[Roboto]">
              Jira Integration
            </h1>
            <p className="mt-3 text-center">
              Empower Agile teams with continuous releases, requirement and test
              case sync-up. Execution results and defects are automatically
              submitted to Jira to get constant feedback.
            </p>
          </div>
          <div className="mt-10 md:mt-0 md:pr-16">
            <img
              src={SlackIntegration}
              alt="Slack"
              className="p-3 flex mx-auto md:justify-center md:items-center"
            />
            <h1 className="font-medium text-center text-2xl sm:3xl font-[Roboto]">
              Slack Integration
            </h1>
            <p className="mt-3 text-center">
              Push test results notifications to Slack. Notifications link back
              to Katalon TestOps for detailed analysis - so that you can repair
              incidents as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* section-7 Custom integrations with SDK & REST APIs  */}
      <div>
        <div className="mx-auto  mt-2 flex flex-col md:flex-start md:flex-row p-5 text-center md:text-left  md:px-20">
          <div>
            <div className="md:pl-20">
              <h1 className="font-bold text-center md:text-left  text-3xl sm:text-center sm:text-4xl mt-20 text-[#5959eb]">
                Custom integrations with SDK & REST API
              </h1>
              <p className="mt-2 leading-relaxed">
                Supercharge team productivity by performing core features from
                outside the Katalon TestOps UI. Trigger executions from another
                tool or share test results into an external dashboard.
              </p>
            </div>
          </div>
          <img
            src={CustomIntegration}
            alt="CustomIntegration"
            className="md:pl-10 md:mt-10  md:w-2/5"
          />
        </div>
      </div>

      {/* Black Box  */}
      <div className="w-11/12 bg-black max-w-6xl mx-auto rounded-xl mt-5 mb-10">
       <div className="p-8 md:p-16">
       <h1 className="font-bold text-center  text-3xl  sm:text-4xl text-white">
       Your automation journey starts here.
        </h1>
        <div className="flex mx-auto justify-center items-center mt-5 md:mt-10">
            <button className="md:text-lg hover:bg-custom-hover bg-custom-green text-white mr-5 px-4 py-2 md:px-14 md:py-3.5 rounded-md cursor-pointer">
              Start for free
            </button>
            <button className="md:text-lg bg-white text-black px-4 py-2 md:px-10 md:py-3.5 rounded-md cursor-pointer">
              View a demo
            </button>
         
          </div>
       </div>
      </div>
    </div>
  );
};

export default Home;
