var shareButtonsList = document.getElementsByClassName("footer__share-icon");

for (var shareButton of shareButtonsList) {

  shareButton.addEventListener('click', function(){
    let sharePanel = shareButton.parentElement.querySelector('.footer__share-panel');
    sharePanel.classList.toggle('u-show');
    shareButton.classList.toggle('u-active');
  });

}

