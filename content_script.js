// content_script.js

// This script runs on every web page that is loaded in Chrome.

// Get the amount of RAM that Chrome is currently using.
const ramUsage = chrome.system.memory.getInfo().available;

// If the RAM usage is above a certain threshold, then reload the active tab.
if (ramUsage > 2000000000) {
  chrome.tabs.reload(chrome.tabs.getSelected());
}
