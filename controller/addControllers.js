var Task = require("../model/taskModels");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (app) {

    app.post("/task/add", urlencodedParser, function (req, res) {
        var number = Math.floor(Math.random() * Math.floor(9875513517864298999));
        var tmp = { task: req.body.task, isFinish: req.body.isFinish, myid: number };
        if (tmp.task != "") {
            Task.create(tmp, function (err, doc) {
                if (err) console.log("Aynı isimde kayıt girilemez")
                else {
                    console.log("Kayıt başarılı")
                }
            });
        }


    });
    app.post("/task/didIT", urlencodedParser, function (req, res) {
        Task.findOneAndUpdate({ task: req.body.task }, { isFinish: true }, { new: true, runValidators: true }, function (err, doc) {
            console.log(doc);
        });
        console.log("Task didIT olarak değiştirildi");
    });
    app.post("/task/update", urlencodedParser, function (req, res) {
        Task.findOneAndUpdate({ myid: req.body.myid }, { task: req.body.task }, { new: true, runValidators: true }, function (err, doc) {
            console.log(doc);
        });
        //Task.create(req.body);
        console.log("Task güncellendi")
    });
    app.post("/task/delete", urlencodedParser, function (req, res) {
        Task.findOneAndRemove({ task: req.body.task }, function (err) {
            if (err) console.log("Silme işlemi sırasında bir hata oluştu --> " + " " + req.body.task)
        });
        console.log("Obje silindi -->" + req.body.task);
    });
}