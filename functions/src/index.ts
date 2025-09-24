import * as functions from "firebase-functions";

// This is an HTTP-triggered Cloud Function that says "Hello!"
export const helloWorld = functions.https.onRequest((request, response) => {
  // Log a message to Firebase Cloud Logging
  functions.logger.info("Hello HTTP request received!", {structuredData: true});

  // Send a response back to the client
  response.send("Hello from a TypeScript Cloud Function on Daily Tulip!");
});
