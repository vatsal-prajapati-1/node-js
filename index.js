const http = require("http");
const PORT = 2000;
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  res.setHeader("Content-Type", "application/json");

  if (method === "GET" && url === "/api/users") {
    res.end(JSON.stringify(users));
  }

  if (method === "GET" && url === "/users") {
    res.setHeader("Content-Type", "text/html");
    const html = `<ul> ${users
      .map((user) => `<li>${user.first_name}</li>`)
      .join("")} </ul>`;
    res.end(html);
  }

  if (req.method === "POST" && req.url === "/api/users") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      body = JSON.parse(body);
      users.push({ ...body, id: users.length + 1 });
      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.end(
          JSON.stringify({
            status: "success",
            message: "Users added Succeesfully",
          })
        );
      });
    });
  }
});

server.listen(PORT, () => console.log(`Server Started on ${PORT}`));
