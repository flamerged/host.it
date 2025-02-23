import consumer from "./consumer";

const initChatroomCable = () => {
  const messagesContainer = document.querySelector('.chat-box');
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    const id = messagesContainer.dataset.chatroomId;
    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        messagesContainer.insertAdjacentHTML('beforeend', data);

        const receivedMessage = document.getElementById('sender');
        const senderId = receivedMessage.dataset.userId;
        const userIsReceiver = document.getElementById(`user-${senderId}`);
        const avatar = receivedMessage.querySelector(".chat-avatar");
        const message = receivedMessage.querySelector(".message");
        const messageContent = receivedMessage.querySelector(".message-content");
        const messageUsernameTime = receivedMessage.querySelector(".message-username-time");
        const userName = receivedMessage.querySelector(".message-username");

        if (userIsReceiver) {
          avatar.remove();
          message.classList.add("message-user");
          receivedMessage.classList.add("message-container-user");
          messageContent.classList.add("message-content-user");
          messageUsernameTime.classList.add("username-time-right");
          userName.innerHTML = "You";
        }

        receivedMessage.removeAttribute('id');

        const input = document.querySelector("#chat-input");
        input.value = "";
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      },
    });
  }
}

export { initChatroomCable };