chrome.contextMenus.create({
  title: 'Twitter Social Toolkit',
  contexts: ['selection'],
  onclick: myFunction
});

function myFunction (selectedText) {
  alert(selectedText.selectionText);
  chrome.tabs.create({url: 'https://www.twitter.com/intent/tweet?text=' + selectedText.selectionText});
}
