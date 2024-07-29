// background.js
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(['profiles'], (result) => {
      console.log('Profiles currently in storage:', result.profiles);
    });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'sendEmail') {
      sendEmail(request.profile, request.receiverEmail);
    }
  });
  
  function sendEmail(profile, receiverEmail) {
    // Use Gmail API to send email
  }
  