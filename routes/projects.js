var express = require("express");
router = express.Router();

module.exports = function (app) {

    app.get("/projects", (req, res) => {
        res.render("projects", { pageTitle: "Projects | Abdulqadir Abuharrus" });
    });

}