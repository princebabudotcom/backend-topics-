// nodejs internal works

const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 10;

setTimeout(() => {
  console.log("Hello from timer 1");
}, 0);

setImmediate(() => console.log("Hello from immdiate fnc 1"));

// maybe take time
fs.readFile("sample.txt", "utf-8", () => {
  console.log("IO Polling is finished");

  setTimeout(() => {
    console.log("Hello from timer 2");
  }, 0);

  setTimeout(() => {
    console.log("Hello from timer 3");
  }, 10 * 1000);

  setImmediate(() => console.log("Hello from IO Immediate"));

  crypto.pbkdf2("password1", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms - Password 1 is done `);
  });
  crypto.pbkdf2("password2", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms - Password 2 is done `);
  });
  crypto.pbkdf2("password3", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms - Password 3 is done `);
  });
  crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms - Password 4 is done `);
  });

  crypto.pbkdf2("password5", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms - Password 5 is done `);
  });

  crypto.pbkdf2("password6", "salt1", 100000, 1024, "sha512", () => {
    console.log(`${Date.now() - start}ms - Password 6 is done `);
  });
});
console.log("Hello from Top level code");
