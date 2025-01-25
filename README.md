# Node.js Unexpected Token Error in JSON Parsing

This repository demonstrates an uncommon error in Node.js related to JSON parsing: the "Unexpected token" error. This error typically occurs when the JSON string being parsed contains syntax errors, such as missing brackets, incorrect commas, or invalid characters.

## Reproducing the Bug

The `bug.js` file contains a simple Express.js server.  The error isn't directly in this file, but rather in how JSON might be handled in a separate part of your application.

To reproduce the error, you will need to simulate a scenario where your application attempts to parse an invalid JSON string using `JSON.parse()`.  A simple example is provided in the comments within `bug.js`.

## Solution

The `bugSolution.js` file shows how to prevent this error. Always validate JSON input before parsing and handle potential errors gracefully.