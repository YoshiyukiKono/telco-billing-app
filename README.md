<!--- STARTEXCLUDE --->
# Telco Billing App
*30 minutes, Advanced, [Start Building](https://github.com/DataStax-Examples/telco-billing-app/blob/master/README.md#quick-start)*

An example of a telcom app dashboard, built with [React](https://reactjs.org/) and [Netlify](https://www.netlify.com).
<!--- ENDEXCLUDE --->

![image](https://raw.githubusercontent.com/DataStax-Examples/telco-billing-app/master/hero.png)

## Quick Start
<!--- STARTEXCLUDE --->
* <a href="https://dtsx.io/2YNyxJT" target="_blank">Signup for DataStax Astra</a>, or login to your already existing account. 
* <a href="https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db" target="_blank">Create an Astra DB Database</a> if you don't already have one.
<!--- ENDEXCLUDE --->
* <a href="https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db-keyspace" target="_blank">Create an Astra DB Keyspace</a> called `sag_telco_billing` in your database.
* <a href="https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-application-token" target="_blank">Generate an Application Token</a> with the role of `Database Administrator` for the Organization that your Astra DB is in.
* Click the 'Open in Gitpod' link: <br/><a href="https://gitpod.io/#https://github.com/DataStax-Examples/telco-billing-app" target="_blank"><img src="https://camo.githubusercontent.com/76e60919474807718793857d8eb615e7a50b18b04050577e5a35c19421f260a3/68747470733a2f2f676974706f642e696f2f627574746f6e2f6f70656e2d696e2d676974706f642e737667" alt="Open in IDE" data-canonical-src="https://gitpod.io/button/open-in-gitpod.svg" style="max-width: 100%;"></a>
* Once the app is finished launching in the Gitpod IDE, copy the `env.example` file to a file named `.env` and fill the required values in from your Application Token and <a href="https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-your-astra-db-connection-settings" target="_blank">Astra DB connection settings</a>.
* Start the example by running `npm run dev` in the Gitpod console.

## Objectives
Launch and explore an example of a telco app dashboard in [Gitpod](https://www.gitpod.io/), built with [React](https://reactjs.org/) and [Netlify](https://www.netlify.com).
  
## How this works
Opening and running the app will populate the database you specify in your `.env` file with the required data, allowing you to explore the telco app.