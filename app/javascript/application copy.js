// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------
// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { bannerUpload } from "events/edit";
import { init_flatpickr } from "../plugins/flatpickr";
import { initTilt } from "../plugins/tilt";
import { inviteModal, copyLink } from "events/show";
import { initMapbox } from "../plugins/init_mapbox";
import { initSlides } from "../plugins/slides";
import { navbarScroll } from "../pages/navbar_scroll";
import { collapseDayBoxes } from "../dashboard/index";
import { initChatroomCable } from "../channels/chatroom_channel";
import { invitationAjax } from "../events/invitations";
import { circlePopup } from "../dashboard/index";


document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  bannerUpload();
  init_flatpickr();
  initTilt();
  inviteModal();
  initMapbox();
  initSlides();
  navbarScroll();
  copyLink();
  collapseDayBoxes();
  initChatroomCable();
  invitationAjax();
  circlePopup();
});
