const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://testing1:testing1@ds247619.mlab.com:47619/test_db", { useNewUrlParser: true }).then(() => {
    console.log("Database connected");
})

const Racecar = mongoose.model('Racecar', { name: String });

const ListItem = mongoose.model("item", { item: String, item_details: String });

app.get("/api/get_list_data", (req, res) => {
    const output = {
        success: false,
        data: [],
        message: ""
    };
    ListItem.find({}, (err, data) => {

        if (err) {
            output.message = "Could not get data from database"
        } else {
            output.success = true;
            output.data = data;
            output.message = "Request successful";
        };

        res.json(output);

    })

});

app.post("/api/new_item", (req, res) => {
    const { item, item_details } = req.body;

    const newItem = new ListItem({ item, item_details });

    newItem
        .save()
        .then(() => {
            console.log("New item saved");
        });

    res.json("New Item Saved");

})


app.get('/api/get-car', (req, res) => {
    Racecar.findOne({ 'name': 'Lambo' }, function (err, data) {
        if (err) {
            console.log("Our error", err);
        }
        console.log("data", data);
        res.end();
    });
})

app.post('/api/create', (req, res) => {
    const { title } = req.body;
    console.log("Our title of our car", title);

    const car = new Racecar({ name: title });
    car.save().then(() => {
        console.log("Saved new record");
    });

    res.json("Saved our car");
})


app.listen(PORT, () => {
    console.log("We're online");
});
