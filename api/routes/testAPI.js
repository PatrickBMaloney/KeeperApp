const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
// const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/shopDB", {useNewUrlParser: true });

const noteSchema = new mongoose.Schema ({
    title: String,
    content: String
});

const Fruit = mongoose.model("Note", noteSchema);

const initialNotes = [
    {
        key: 1,
        title: "Delegation",
        content:
            "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
    },
    {
        key: 2,
        title: "Loops",
        content:
            "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
    },
    {
        key: 3,
        title: "Arrays",
        content:
            "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
    },
    {
        key: 4,
        title: "Hardware vs. Software",
        content:
            "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    }
];

initialNotes.forEach(element => {
    let note = new Fruit ({
        title: "Apple",
        content: "the apple is red"
    });
    note.save();
});

const note = new Fruit ({
    title: "Apple",
    content: "the apple is red"
});

// fruit.save();

const deleteItem = (id) => {
    Note.findByIdAndRemove(id, function(err){
        if (!err) {
            console.log("Successfully deleted checked item.");
        }
    });
};

router.get("/", function(req, res, next) {
    res.json(notes);
});

router.post("/", function(req, res){
    console.log(req.body);
    console.log("Post request recieved.");
})

router.post("/delete", function(req, res){
    console.log(req.body);
    console.log("Delete request recieved.");
    deleteItem(req.body.id);
})

module.exports = router;