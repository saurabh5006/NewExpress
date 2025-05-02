const express = require("express");

const app = express();

// what will be lisent so it will lisent port which we will sent the requesr to the express

const port = 8080;

app.listen(port, ()=>{
    console.log("we are leasnig");
});

// it will track the rrspond in the server
// app.use((req, res)=>{
//     console.log("Resived respont")
// });

app.get("/:username", (req, res)=>{
    // console.log("Requested for the apple");
    // console.log(req.params);
    let {username } = req.params;
    // console.log(`welcome @${username}`)
    res.send(`welcome @${username}`);
});

app.post("/",(req , res)=>{
    console.log("uou have requested for the pass");
});



