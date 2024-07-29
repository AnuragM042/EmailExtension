// content.js
function checkEmails() {
  // Fetch sent emails using Gmail API
  // Check for responses and notify user
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "checkEmails") {
    checkEmails();
  }
});
