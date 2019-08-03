# wayFarer
wayFarer is a public bus transportation booking service that enables the user to book and manage their trips efficiently.

kings and are able to cancle a trip. The application also has an admin section where the admin can do things like create a trip, view a list of all available bookings, view all trips createdad and also cancela a trip.

## Table of Contents
- Github pages link.
- Features.
- Technologies.
- Installation and setup.
- Limitations.

### Github pages link
https://joekirumira.github.io/wayFarer/UI/index.html

### Features
WayFarer has the following features.

### Authentication
- It uses JSON Web Token (JWT) for authentication.
- Token is generated on user login.
- User is assigned normal role on registration.
- Admin User is pre-seeded into the application with administrative priviledges.

### Normal Users
- Users can register.
- Users can log in.
- Users can view all available trips.
- Users can book a trip.
- Users can delete a booking.
- User can view view all his/her bookings.

### Admin Users
- Admin Users can log in
- Admin Users can create a trip
- Admin Users can cancel a trip
- Admin Users can view all bookings

### Technology
- Wayfarer uses some of the modern technologies. The core ones are:

- ECMAScript 6: Also known as ES2015, its a version of Javascript with next-generation features like arrow functions, generators, enhanced object literals, spread operators and more.

- NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server-side.

- ExressJS: ExpressJS, is a web application framework for Node.js, It is designed for building web applications and APIs. 

### Installation and Setup
 Clone the repository:
 https://github.com/joekirumira/wayFarer
 
Navigate into the cloned repository:
cd wayFarer

Install dependencies:
npm install

### Limitations
The limitations with this current version of Hello Books includes:

The Administrator cannot cancel a booking.

Users cannot view friends that booked the same trip.

### Testing
To test run npm test or npm run test

### FAQs
For more details contact joekirumira3@gmail.com
