const express = require('express');
const sequelize = require('./database');
const form = require('./form');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(express.json());

app.post('./form', async (req, res) => {
    await form.create(req.body);
    res.send('Form data are saved');
})

app.get('./form', async (req, res) => {
    const all_forms = await form.findAll();
    res.send("All forms are retrieved", all_forms);
})

app.get('./form/:email', async (req, res) => {
    const req_email = req.params.email;
    const the_form = await form.findOne({ where: { email: req_email} });
    res.send("Retrieved the form with the request email", the_form);
})

app.put('./form/:email', async (req, res) => {
    const req_email = req.params.email;
    const the_form = await form.findOne({ where: { email: req_email} });
    the_form.email = req.body.email;
    await the_form.save();
    res.send("Form updated");
})

app.delete('./form/:email', async (req, res) => {
    const req_email = req.params.email;
    await form.destroy({ where: { email: req_email} });
    res.send("Form removed");
})

app.listen(5000, () => {
    console.log("Server running");
})