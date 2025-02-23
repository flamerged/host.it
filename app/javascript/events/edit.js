const bannerUpload = () => {
  const realButton = document.querySelector(".real-upload");
  const uploadButton = document.querySelector("#upload-button");
  const eventBanner = document.querySelector(".event-banner");

  const displayPreview = (input) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        eventBanner.style.backgroundImage = 'url(' + reader.result + ')';
          // console.log(event.currentTarget.result);
      };
      reader.readAsDataURL(input.files[0]);
      uploadButton.innerHTML = "Change";
    }
  };

  if (uploadButton && realButton) {
    uploadButton.addEventListener("click", () => {
      realButton.click();
    });
    realButton.addEventListener("change", () => {
      // we call the displayPreview function (who retrieve the image url and display it)
      displayPreview(realButton);
    });
  }
};

export { bannerUpload };
