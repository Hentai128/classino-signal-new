const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();
const PORT = process.env.PORT || 10000;
app.get("/", (_req, res) => res.status(200).send("Classino signaling server is running."));
const server = app.listen(PORT, "0.0.0.0", () => console.log(`Classino PeerServer listening on ${PORT}`));
const peerServer = ExpressPeerServer(server, { path: "/peerjs", proxied: true, allow_discovery: false });
app.use("/", peerServer);
