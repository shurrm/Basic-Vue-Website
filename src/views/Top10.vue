<template>
  <div class="page">
    <Logo />

    <div class="content">
      <Top10 />
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Top10 from '@/components/Top10.vue'

export default {
  components: {
    Logo,
    Top10
  }
}
</script>

<style>
.page {
  text-align: center;
}

.content {
  display: flex;
  justify-content: center;
  padding: 40px;
}
</style>