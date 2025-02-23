const inviteModal = () => {
 const openList = document.querySelectorAll(".list-button");
 const closeList = document.querySelector("#close-button");
 const modal = document.querySelector(".invite-modal");

 if (openList) {
  openList.forEach(button => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      modal.style.display = "flex";
    });
  })

  if (closeList) {
    closeList.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
 }

 if (modal) {
  modal.addEventListener("click", event => {
    if (event.target.className ==   "invite-modal"){
        document.querySelector(".invite-modal").style.display = "none";
       }
    })
}
};

const copyLink = () => {

    const copyText = document.querySelector(".event-url");
    const copyButton = document.querySelector(".event-url-copy");
    
    if (copyText) {
      copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(copyText.innerHTML);
        copyButton.innerHTML = "Link copied!";
      });
      
      copyButton.addEventListener("mouseout", () => {
        copyButton.innerHTML = "Copy link";
      })
    }
}

export { inviteModal, copyLink };