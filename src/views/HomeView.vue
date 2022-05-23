<template>
  <div>
    <h1>Firebaseを使った読み書き確認</h1>
    <input v-model="message" />
    <button @click="addMessage">メッセージを追加</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

export default {
  name: "HomeView",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    addMessage() {
      firebase
        .database()
        .ref("slack")
        .set({
          content: this.message,
          user: {
            name: "John Doe",
          },
        });
    },
  },
};
</script>
