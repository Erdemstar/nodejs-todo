var Task = require("../model/taskModels");
module.exports = function (app) {

    app.get("/", async function (req, res) {
        await Task.find({"isFinish":false}).exec(function(err,data){
            res.render("index", { task: data })
        })
    });
}