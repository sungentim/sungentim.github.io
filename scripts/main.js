var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';
var iceCream = 'chocolate';
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/1.jpeg') {
      myImage.setAttribute ('src','images/2.jpeg');
    } else {
      myImage.setAttribute ('src','images/1.jpeg');
    }
}
alert('appName = ' + navigator.appName + '\n' +
      'appVersion = ' + navigator.appVersion + '\n' +
      'language = ' + navigator.language + '\n' +
      'platform = ' + navigator.platform + '\n' +
      'userAgent = ' + navigator.userAgent);
