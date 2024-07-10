chrome.runtime.onInstalled.addListener(() => {
    console.log("Email Extractor extension installed.");
});

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
    });
});
