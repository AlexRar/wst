(()=>{const e=()=>{document.getElementById("options").onclick=()=>{chrome.tabs.create({url:`chrome://extensions/?options=${chrome.runtime.id}`})}};e()})()