# Chef-menu-MAST5112

Chef Menu App
Overview

This React Native app is designed to manage a chef’s menu. It allows the chef to:

Add, remove, and view menu items.

Calculate the average price per course (Starters, Mains, Desserts).

Filter menu items by course.

Built using TypeScript and Expo for easier development and testing.

Features

Home Screen: Displays the list of menu items, total count, and average price per course.

Add Item Screen: Allows the chef to add new menu items (dish name, description, course, and price).

Filter Screen: Filters the menu by course (Starter, Main, Dessert).

Remove Items: Items can be removed from the list.

Installation

Install dependencies:

npm install


Run the app:

npx expo start


Open the app on BlueStacks or any Android/iOS emulator by pressing "a" in the terminal.

Development Notes

Menu items are stored in an array and added to the app’s state.

Average price is calculated for each course and displayed on the home screen.

Navigation is handled with React Navigation.
