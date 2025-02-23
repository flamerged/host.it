// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// Bootstrap
import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap

// Custom imports
import { bannerUpload } from "./events/edit"
import { init_flatpickr } from "./plugins/flatpickr"
import { initTilt } from "./plugins/tilt"
import { inviteModal, copyLink } from "./events/show"
import { initMapbox } from "./plugins/init_mapbox"
import { initSlides } from "./plugins/slides"
import { navbarScroll } from "./pages/navbar_scroll"
import { collapseDayBoxes } from "./dashboard/index"
import { initChatroomCable } from "./channels/chatroom_channel"
import { invitationAjax } from "./events/invitations"
import { circlePopup } from "./dashboard/index"

// Function to initialize all components
const initializeComponents = () => {
  bannerUpload()
  init_flatpickr()
  initTilt()
  inviteModal()
  initMapbox()
  initSlides()
  navbarScroll()
  copyLink()
  collapseDayBoxes()
  initChatroomCable()
  invitationAjax()
  circlePopup()
}

// Call initializeComponents on Turbo load
document.addEventListener("turbo:load", initializeComponents)
