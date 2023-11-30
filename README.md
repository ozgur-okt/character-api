# Cartoon Characters App
## Overview
This is a React app with TypeScript that allows users to explore cartoon characters from a public API. The app includes features such as listing characters based on locations, displaying character details, managing favorites, and responsive design. It utilizes Redux for state management, Sass for styling, React Router for navigation, and Axios for fetching data.

Here you can use the app: https://character-api.vercel.app/

## Features

* List of Cartoon Characters
The app fetches cartoon characters from a public API and displays them in a user-friendly interface.

* Four Pages
Locations Page: Displays a list of available locations.
Characters of Location Page: Shows characters based on the selected location.
Character Details Page: Provides detailed information about a specific character.
Favorites Page: Allows users to view and manage their favorite characters.
* Favorite Management
Users can add characters to their favorites or remove them, and the Favorites page displays the list of their saved favorites.

* Redux State Management
Redux is employed for efficient state management throughout the application.

* Responsive Design
The app is designed to be responsive, adapting to different screen sizes with a maximum width of 768px.

* Styling with Sass
Sass is used to enhance the styling of the app, making it modular and maintainable.

* React Router Navigation
React Router is implemented to enable seamless navigation between different pages of the app.

* Data Fetching with Axios
Axios is used to fetch data from the public API, ensuring a smooth user experience.

* Core Web Vitals (CLS Scores)
The app has Core Web Vitals reports in the cls folder at the root. These reports are generated using the Lighthouse extension of Google.

## Getting Started
Clone the repository.

`git clone https://github.com/ozgur-okt/character-api`

`cd character-api`

### Running the App on Local Host

Install dependencies with `npm install`.

Run the app locally with `npm start`.

Access it on [http://localhost:3000](http://localhost:3000).

### Running the App on Container

Alternatively, the app is containerized with Docker. 

Run `docker-compose up` to start the app. 

Accessible on [http://localhost:5000](http://localhost:5000).

## Contributing
Feel free to contribute to the project by submitting bug reports, feature requests, or pull requests. Your feedback and contributions are highly appreciated.

## License
This project is licensed under the MIT License.
