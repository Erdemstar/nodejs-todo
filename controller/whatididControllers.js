var Task = require("../model/taskModels");

module.exports = function (app) {
    app.get("/whatidid", async function (req, res) {
        await Task.find({"isFinish":true}).exec(function(err,data){
            res.render("whatidid", { did: data })
        })
    });
};