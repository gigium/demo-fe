const express = require("express");
const axios = require("axios");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  axios
    .get("http://demo-be.gigium-dev.svc.cluster.local:8080/")
    .then((resp) => {
      console.log(resp.data.color);
      res.send(
        '<html > <head><title>DEMO FE</title></head><body bgcolor="' +
          resp.data.color +
          '"><h1>' +
          resp.data.color +
          "</h1></body> </html>"
      );
    })
    .catch((e) => console.log(e));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
