<!--- STARTEXCLUDE --->
# Telco Billing App
*30 minutes, Advanced, [Start Building](https://github.com/DataStax-Examples/telco-billing-app/blob/master/README.md#quick-start)*

An example of a telcom app dashboard, built with [React](https://reactjs.org/) and [Netlify](https://www.netlify.com).
<!--- ENDEXCLUDE --->

![image](https://raw.githubusercontent.com/DataStax-Examples/telco-billing-app/master/hero.png)

## Quick Start
<!--- STARTEXCLUDE --->
* [Signup for DataStax Astra](https://dtsx.io/2YNyxJT), or login to your already existing account. 
* [Create an Astra DB Database](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db) if you don't already have one.
<!--- ENDEXCLUDE --->
* [Create an Astra DB Keyspace](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db-keyspace) called `sag_telco_billing` in your database.
* [Generate an Application Token](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-application-token) with the role of `Database Administrator` for the Organization that your Astra DB is in.
* Click the 'Open in Gitpod' link: [![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/telco-billing-app)
* Once the app is finished launching in the Gitpod IDE, copy the `env.example` file to a file named `.env` and fill the required values in from your Application Token and [Astra DB connection settings](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-your-astra-db-connection-settings).
* Start the example by running `npm run dev` in the Gitpod console.

## Objectives
Launch and explore an example of a telco app dashboard in [Gitpod](https://www.gitpod.io/), built with [React](https://reactjs.org/) and [Netlify](https://www.netlify.com).
  
## How this works
Opening and running the app will populate the database you specify in your `.env` file with the required data, allowing you to explore the telco app.