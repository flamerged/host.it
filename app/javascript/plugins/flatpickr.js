import flatpickr from "flatpickr";

const init_flatpickr = () => {
  if (document.querySelectorAll(".datepicker")) {
    flatpickr(".datepicker", {
      enableTime: true,
    });
  }
}

export { init_flatpickr }