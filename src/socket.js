import { io } from "socket.io-client";
import { apiUrl } from "@/utils/endpoint";
// import socketIO from "socket.io-client";

// export const socket = socketIO.connect("http://localhost:4000");
// "undefined" means the URL will be computed from the `window.location` object
const URL =
  process.env.NODE_ENV === "production" ? undefined : "http://localhost:4000";

export const socket = io(URL);
