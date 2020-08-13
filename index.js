// Broadcast that you're opening a page.
localStorage.openpages = Date.now();
const onLocalStorageEvent = (e) => {
  console.log('### onLocalStorageEvent', e.key);
  if (e.key == "openpages") {
    // Listen if anybody else is opening the same page!
    localStorage.page_available = Date.now();
  }
  if (e.key == "page_available") {
    alert("One more page already open");
  }
};
window.addEventListener('storage', onLocalStorageEvent, false);
