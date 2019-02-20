<template>
  <div>
    <beautiful-chat
      :title="title"
      :participants="participants"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :placeholder="placeholder"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling" />
  </div>
</template>

<script>
export default {
  name: 'chatbox',
  data() {
    return {
      title: "Live Chat Support",
      placeholder:"Tulis pesan..",
      participants: [
        {
          // Tim support
          id: 'user1',
          name: 'Support',
          imageUrl: 'https://firstlink.com.my/wp-content/uploads/6-services-b.png'
        },
        {
          // User
          id: 'user',
          name: 'Andri',
          imageUrl: 'https://assets.gitlab-static.net/uploads/-/system/user/avatar/3465364/avatar.png?width=90'
        }
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      // titleImageUrl: 'static/img/ezbild.png',
      messageList: [
          { type: 'text', author: `user1`, data: { text: `Assalamu'alaikum, dengan siapa saya bicara?` } },
          { type: 'text', author: `me`, data: { text: `Waalaikumsalam` }}
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        launcher: {
          bg: '#4e8cff'
        },
        messageList: {
          bg: '#ffffff'
        },
        receivedMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        sentMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage (text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } })
      }
    },
    onMessageWasSent (message) {
      // called when the user sends a message
      this.messageList = [ ...this.messageList, message ]
    },
    openChat () {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat () {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false
    }
  }
}
</script>
