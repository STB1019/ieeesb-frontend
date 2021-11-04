const express = require("express");
const app = express();
const dbURI = "mongodb+srv://stb01019:<password>@stb01019.zwwac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Middleware che codifica i valori di un form, se presenti, in un oggetto javascript.
// Dopo è possibile accedere a questi dati con req.body
app.use(express.urlencoded({ extended: true }));

app.post("/post", (req, res) => {
  console.log(req.body);

  res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}...`));