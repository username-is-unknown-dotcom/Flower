window.onload = () => {
  const messageText = "For you, Meyly TANG";
  const messageElement = document.querySelector(".message");
  let index = 0;

  const typeWriter = () => {
    if (index < messageText.length) {
      messageElement.innerHTML = messageText.substring(0, index + 1);
      index++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        messageElement.style.opacity = 0;
        setTimeout(() => {
          document.body.classList.add("loaded");
          const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
          }, 1000);
        }, 1000); 
      }, 2000);
    }
  };

  messageElement.style.opacity = 1;
  typeWriter();
};
