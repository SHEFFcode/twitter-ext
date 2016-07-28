chrome.contextMenus.create({
  title: 'Twitter Social Toolkit',
  contexts: ['page'],
  onclick: myFunction
});

function myFunction (selectedText) {
  alert(selectedText.selectionText);
  chrome.tabs.create({url: 'https://www.twitter.com/intent/tweet?text=' + selectedText.selectionText});
}
