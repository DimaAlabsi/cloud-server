# cloud-server


## Lab 16

## Author: 

***Dima Alabsi***

**Description of the lab:**  

Create a new application using real-time events for executing, and presenting an application that showcases an event driven architecture.

programming concepts:

- A “hub” server that moderates all events.
- Multiple “clients” that connect to the hub which can .both publish and subscribe to events
- Must operate over a network.



## UML

![uml](/img/UML.png)


## Links to check:


- Github pull request link : **[pull request](https://github.com/DimaAlabsi/cloud-server/pull/2)**
- Actions :  **[actions](https://github.com/DimaAlabsi/cloud-server/actions)** 


## Dependencies:  

- dotenv
- faker
- uuid
- socket.io
- socket.io-client


## How to start the application: 

- node hub.js
- node teacher.js
- node student.js


## Output result 💯

![console](/img/conoleOutput.png)






## installation (AWS & EB) 👍

![installation](/img/installation.png)



Elastic Beanstalk
Elastic Beanstalk (EB) will automatically wire up essential AWS services to create and deploy a running application.

For Node.js applications, this is generally just going to be an EC2 server instance along with an S3 bucket that stores our files

There are 2 ways to create a new application with EB, detailed below. Either way, all of your environments and applications will be available in the AWS Developer Console (GUI) for you to manage

Creating an application with the Elastic Beanstalk GUI
Choose NodeJS as your platform
Create and upload a .zip file with your application source code
Do not include node_modules or package-lock.json
This will create your application and environment in one step, giving you a full GUI from where you can manage the app.

-------------------
Creating an application using the command line only
First, ensure that you've installed the AWS CLI and the aws eb command line utilities.

eb init - Initializes your folder as an Elastic Beanstalk application
Choose your region (us-west-2)
Choose [Create new Application]
Note: If you already have an application, you could also choose that to connect
Answer the other questions as appropriate
Choose Node.js at the correct version
eb create my-environment-name - Create an "environment" for your app to reside in
eb deploy to deploy your new application to your new environment
You'll also use this whenever you make code changes
You can then use some other eb commands to manage your apps

eb open to open your app in the browser
eb list to get a list of apps
eb ssh to ssh (login) to one of your apps
eb health to get a health check on your environments