/*
    Name: Mike Villeneuve
    Date: 07/19/2022
*/


// Establish dependency with Express
const express = require("express");
const app = express();
app.use(express.json());


// End point to disply a message in an html heading element
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
})

// Array containing data set
let courses = [
    {"id": 1, "thingie": "pubbah", "color":"green"},
    {"id": 2, "thingie": "sneetch", "color":"yellow"},
    {"id": 3, "thingie": "widget", "color":"blue"},
    {"id": 4, "thingie": "gyro", "color":"red"},
    {"id": 5, "thingie": "lorax", "color":"orange"},
    {"id": 6, "thingie": "gimlet", "color":"purple"}
]

// End point to retrieve all "thingies" in a data set
app.get("/api/thingies/", (req, res) => {
    res.json(courses);
})


// End point to retrieve an html file
app.get("/api/index.html", (req, res) => {
    const fs = require("fs");
    let fileName = "index.html";
    fs.readFile(fileName, (err, data) => {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data.toString());
        res.end();
    })    
})

// Output to console feedback message indicating server is running 
app.listen(3000, () => {
    console.log("Listening on port 3000");
})