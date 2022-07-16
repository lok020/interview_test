const express = require('express');
const Form = require('./form');
const sequelize = require('./connect_database');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));

async function init_database (restart_database){
  sequelize.sync( {force: restart_database} ).then(() => console.log('database is ready'));
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

init_database(false);

app.get("/get", async (req, res) => {
  await Form.findAll()
  .then( data => {
    console.log(data);
    res.send(data);
    res.json("Get success");
  })
  .catch( error => {
    console.log("ERROR", error);
    res.json("Get failed due to error");
  })
})

app.post("/save", async (req, res) => {
  await Form.create( req.body )
  .then( data => {
    console.log(data);
    res.json("Save success");
  })
  .catch( error => {
    console.log("ERROR", error);
    res.json("Save failed due to error");
  })
})

// get will result in 200
// delete will result in 404
// use get, and use force: true, to restart server and clear the table
app.get("/clear", async (req, res) => {
  res.send("Clear the table and start over");
  init_database(true);
    // await Form.destroy()
    // .then( data => {
    //   console.log(data);
    //   res.json("Clear success");
    // })
    // .catch( error => {
    //   console.log("ERROR", error);
    //   res.json("Clear failed due to error");
    // })
})


//////////////////////////////////////////////////////////////////////
/* other functions */
//////////////////////////////////////////////////////////////////////

// app.get(async (req, res) => {
//     console.log("TEST");
// })

// app.post('./form', async (req, res) => {
//     await form.create(req.body);
//     res.send('Form data are saved');
// })

// app.get('./form', async (req, res) => {
//     const all_forms = await form.findAll();
//     res.send("All forms are retrieved", all_forms);
// })

// app.get('./form/:email', async (req, res) => {
//     const req_email = req.params.email;
//     const the_form = await form.findOne({ where: { email: req_email} });
//     res.send("Retrieved the form with the request email", the_form);
// })

// app.put('./form/:email', async (req, res) => {
//     const req_email = req.params.email;
//     const the_form = await form.findOne({ where: { email: req_email} });
//     the_form.email = req.body.email;
//     await the_form.save();
//     res.send("Form updated");
// })

// app.delete('./form/:email', async (req, res) => {
//     const req_email = req.params.email;
//     await form.destroy({ where: { email: req_email} });
//     res.send("Form removed");
// })

// app.listen(5000, () => {
//     console.log("Server running");
// })