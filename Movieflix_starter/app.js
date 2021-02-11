/*
 Authors: Keven Truong, Calista Lai
 Your name and student #: Calista Lai, A01225061
 Your Partner's Name and student #: Keven Truong, A01248981
 (Make sure you also specify on the Google Doc)
*/
const express = require("express");
const fs = require("fs");

let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", (req, res) => res.render("pages/index"));

app.get("/myForm", (req, res) => res.render("pages/myForm"));

app.post("/myForm", (req, res) => {
    // console.log(req.body.movies);
    let movies = req.body.movies.split(",");
    res.render("pages/index.ejs", {movieList: movies});
});

app.get("/myListQueryString", (req, res) => {
    // console.log(req.query);
    // personally, I think this is the superior method:
    let movies = Object.values(req.query);
    res.render("pages/index.ejs", {movieList: movies});
});

app.get("/search/:movieName", (req, res) => {
    let movieName = req.params.movieName;
    let fileLine;
    fs.readFile("./movieDescriptions.txt", "utf8", (err, file) => {
        if (err){
            return err;
        }
        let fileArr = file.split("\n");
        //console.log(fileArr);
        for (description of fileArr) {
            if (description.split(":")[0].toUpperCase() == movieName.toUpperCase()) {
                fileLine = description.split(":");
                break;
            }
        }
        if (fileLine) {
            res.render("pages/searchResult", {movieName: fileLine[0], fileLine: fileLine[1]})
        } else {
            res.render("pages/searchResult", {
                movieName: "Not Found",
                fileLine: "Movie could not be found",
            })
        }
    })
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 🚀");
});
