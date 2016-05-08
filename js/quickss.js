var sites = ["facebook", "twitter", "googleplus", "linkedin", "reddit", "pinterest"];

quickShare(sites, 'dark wobble-vertical');

function quickShare(sites, customClasses) {
  if (!sites) sites = ["facebook", "twitter", "googleplus", "linkedin"];
  if (!customClasses) customClasses = '';
  var services = sites;
  var servicesHTML = '';
  var servicesName = [];
  for (i = 0; i < services.length; i++) {
    HTML = '<a class="socicon-' + services[i] + ' share-button ' + customClasses + '" href=""></a>';
    servicesHTML += HTML;
    servicesName.push(".socicon-" + services[i]);
  }
  document.getElementById("quick-share").innerHTML = servicesHTML;

  var url = window.location.href;
  var title = document.getElementsByTagName("title")[0].innerHTML;
  var ogImageExists = document.querySelector("meta[property='og:image']");
  if (ogImageExists) {
    var image = ogImageExists.content;
  } else {
    var image = '';
  }

  var allShareButtons = document.querySelectorAll(servicesName.toString());

  var facebookExists = document.querySelector(".socicon-facebook");
  if (facebookExists) {
    facebookExists.setAttribute("href", 'http://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '');
  }

  var twitterExists = document.querySelector(".socicon-twitter");
  if (twitterExists) {
    twitterExists.setAttribute('href', 'http://twitter.com/intent/tweet?status=' + encodeURIComponent(title) + ' ' + encodeURIComponent(url) + '');
  }

  var googleplusExists = document.querySelector(".socicon-googleplus");
  if (googleplusExists) {
    googleplusExists.setAttribute('href', 'http://plus.google.com/share?url=' + encodeURIComponent(url) + '');
  }

  var linkedinExists = document.querySelector(".socicon-linkedin");
  if (linkedinExists) {
    linkedinExists.setAttribute('href', 'http://www.linkedin.com/shareArticle?url=' + encodeURIComponent(url) + '');
  }

  var redditExists = document.querySelector(".socicon-reddit");
  if (redditExists) {
    redditExists.setAttribute('href', 'http://reddit.com/submit?url=' + encodeURIComponent(url) + '&amp;title=' + encodeURIComponent(title));
  }
  
  var pinterestExists = document.querySelector(".socicon-pinterest");
  if (pinterestExists) {
    pinterestExists.setAttribute('href', 'http://pinterest.com/pin/create/bookmarklet/?media=' + image + '&url=' + encodeURIComponent(url) + '&description=' + encodeURIComponent(title));
  }
      

  for (i = 0; i < services.length; i++) {
    document.getElementsByClassName("share-button")[i].addEventListener('click', function(e) {
      e.preventDefault();
      javascript: window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=600');
    });
  }
}