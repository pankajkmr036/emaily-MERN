# emaily-MERN
A feedback-collection app.

The app helps an user ( Service provider) to create surveys regarding the feedback about their service and send them to the consumers using a third party mailing system.
• A user can avail the service by paying some amount in return for credits.
• App has a frontend React-app-server integrated with the NodeJs and Express backend.
• The user data including profile details and survey details are stored in MongoDb.
• Credit cards and payemnts are handle using extrenal service by Stride.
•
• Email sending service is taken from SendGrid.
• The app state management is done using Redux.
• Application is successfully deployed on Heroku.com




# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
