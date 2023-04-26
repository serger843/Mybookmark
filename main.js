// Select the save button
var button = document.querySelector(".save_button");

// Select the input box
var siteName = document.querySelector("[name='site_name']");
var url = document.querySelector("[name='url']");

// Select the <div> with class="bookmarks"
var bookmarksSection = document.querySelector(".bookmarks");

// Hold bookmarks in local storage
if (typeof localStorage.bookmark == "undefined") {
  localStorage.bookmark = "";
}
