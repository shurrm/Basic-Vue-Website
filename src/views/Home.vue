<template>
  <div class="page">
    <Logo />

    <h1>Welcome to My SpongeBob Basic Website</h1>

    <h2>Hello, {{ username }}!</h2>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  props: ["username"],
  components: {
    Logo
  }
}
</script>

<style>
.page {
  text-align: center;
  padding-top: 20px;
}
</style>