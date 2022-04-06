function rootobject() {
    alert("Using RootObject-window");
}
window.rootobject();

alert(window.innerHeight); // inner window height
// change the background color to orange
document.body.style.background = "orange";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 900);

alert(location.href); // shows current URL

if (confirm("Go to Flipkart")) {
  location.href = "https://www.flipkart.com/"; // redirect the browser to another URL
} 