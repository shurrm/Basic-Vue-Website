<template>
  <div class="background">

    <!-- Enter Name Screen -->
    <div v-if="!entered" class="name-screen">
      <Logo />
      <h1>Welcome to my SpongeBob Website</h1>
      <input v-model="username" placeholder="Enter your name" />
      <button @click="submitName">Ok!</button>
    </div>

    <!-- Home -->
    <div v-else>
      <router-view :username="username" />

      <nav class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/top10">Top10</router-link>
      </nav>
    </div>

  </div>
</template>
<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  },

  data() {
    return {
      username: "",
      entered: false
    }
  },

  methods: {
    submitName() {
      if (this.username.trim() !== "") {
        this.entered = true
      }
    }
  }
}
</script>

<style>
.background {
  min-height: 100vh;
  background-image: url('./assets/bob_background.jpg');
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
}

div {
  text-align: center;    
}

html, body {
  margin: 0;
  padding: 0;
  background-image: url('./assets/bob_background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.name-screen {
  padding-top: 200px;
}

.nav {
  margin-top: 40px;
  font-size: 20px;
}
</style>