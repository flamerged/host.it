import { fetchWithToken } from "../utils/fetch_with_token";

const invitationAjax = () => {
  const newInvitationForm = document.querySelector("#new_invitation");
  const receiverEmailInput = document.querySelector(
    "#invitation_receiver_email"
  );
  const invitations = document.querySelector(".invitations");

  if (newInvitationForm) {
    const action = newInvitationForm.attributes[3].value;
    newInvitationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      fetchWithToken(action, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          invitation: { receiver_email: receiverEmailInput.value },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // handle JSON response from server
          const invitation = data.invitation;
          const newInvitation = `
            <div class="invitee" id="invitation-${invitation.id}">
              <div class="receiver-avatar">?</div>
              <div class="invitee-info">
                ${invitation.receiver_email}
              </div>
              <div class="invitee-status">
                <div class="invitation-status-pending">Pending</div>
              </div>
              <div class="invite-delete">
                <a title="Delete invitation" rel="nofollow" data-method="delete" href="/invitations/${invitation.id}">
                  <i class="far fa-trash-alt"></i>
                </a>
            </div>
            </div>`;

          invitations.insertAdjacentHTML("afterbegin", newInvitation);

          const newInvitee = invitations.querySelector(
            `#invitation-${invitation.id}`
          );
          // console.log(newInvitee);
          const newDeleteButton = newInvitee.querySelector(".invite-delete a");

          newDeleteButton.addEventListener("click", () => {
            newInvitee.remove();
          });
        });
    });
  }

  const acceptButton = document.querySelector(".accepting");
  const declineButton = document.querySelector(".declining");
  const eventDetails = document.querySelector(".event-details");

  if (eventDetails) {
    // console.log(eventDetails);
    // console.log(acceptButton);
    const acceptBanner = '<div class="invitee-status-accepted">Accepted</div>';
    const declineBanner = '<div class="invitee-status-declined">Declined</div>';
    if (acceptButton) {
      acceptButton.addEventListener("click", () => {
        //  console.log(acceptButton);
        eventDetails.insertAdjacentHTML("afterbegin", acceptBanner);
      });
    }
    
    // console.log(declineButton);
    if (declineButton) {
      declineButton.addEventListener("click", () => {
        // console.log(declineButton);
        eventDetails.insertAdjacentHTML("afterbegin", declineBanner);
      });
    }
  }

  const inviteDeleteButtons = document.querySelectorAll(".invite-delete a");

  if (inviteDeleteButtons) {
    inviteDeleteButtons.forEach((deleteButton) => {
      deleteButton.addEventListener("click", () => {
        const inviteId = deleteButton.dataset.invitationId;
        const invitee = document.querySelector(`#invitation-${inviteId}`);
        invitee.remove();
      });
    });
  }

  const inviteOptions = document.querySelector(".invite-options");

  if (inviteOptions) {
    const acceptButton = inviteOptions.querySelector(".accepting");
    const declineButton = inviteOptions.querySelector(".declining");

    acceptButton.addEventListener("click", () => {
      inviteOptions.remove();
    });

    declineButton.addEventListener("click", () => {
      inviteOptions.remove();
    });
  }

  const inviteInput = document.querySelector("#invitation_receiver_email");
  const InviteForm = document.querySelector("#new_invitation");

  if (InviteForm) {
    InviteForm.addEventListener("submit", () => {
      inviteInput.value = "";
    });
  }
};

export { invitationAjax };
