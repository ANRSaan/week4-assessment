const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const { getCompliment, getFortune, getProfile, changeEmotion, deleteProfile } = require('./controller')
// const { getFortune } = require('./controller')
// const { getProfile } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/profile", getProfile);
app.put("/api/profile/:userName", changeEmotion);
app.delete("/api/profile/:userName", deleteProfile)

app.listen(4000, () => console.log("Server running on 4000"));
