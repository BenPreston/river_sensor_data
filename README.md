# Understanding the project

This project was designed to help utilise some water sensor data that was provided in JSON format [data.json](https://github.com/BenPreston/river_sensor_data/blob/main/src/data/data.json)

The key requirements of the project were as follows (provided with an explanation of how they were met for clarity)

**Consume JSON sample data and decode sensor data** - the project used the JSON data, as an example of decoding the date format has been changed to show day, month, year and time. However this is still sortable by date
**Present the data in tabular form; with appropriate**: 
**Formatting/styling for data types** - The date has been formated, as it was not clear what data was important to the client. For now all has been left, however there is a checkbox selector at the top of the page to remove any unrequired fields.
**Arrangement and presentation** - a selector has been created so individual row data fields can be selected. These are then reviewed in graphs and a map below
**Search/filtering capabilities** - search at a column level to filter in key values across every column is provided. The bytes column has been left free purely to show the client of the possiblity to remove this if required.
**UI performance for data size** - ten pieces of data are presented to the user at once, however they have the option to increase this to 25, 50, 100, 250, 500 and 1000
**Cross browser and screen size considerations** - for mobile a separate screen has been created that presents the data in box form. However a decision to remain at full length has been taken for easy choice of rows, as all columns are hideable
**Visualise the “sensor” data** - The data is presented both in map and graph format. By selecting specific values the client can see the relevant lat and long on a map. A graph plotting long vs lat has been  created. This has been done using a library so if the client would prefer and other type of data mapping, or graph shape this can easily be changed.
**Impress us by visualising some/all of the sensor data** - this has been done through a mapping function and graph which can be changed to any other standard form e.g line, bubble, pie etc depending on the clients needs.

### `View this live at`
https://watertabledata-c16bb.web.app/

### `npm start`

To run this project locally please clone and run npm start. 

You made need to add your own Google Authentication once you have this it runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Style Guide`

This has been written with esLint and prettier you can see both sheets for style guide

### `Further Questions`

Please contact the author [Ben Preston](hi@benpreston.net)