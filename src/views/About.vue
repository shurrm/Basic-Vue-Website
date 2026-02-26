<template>
  <div class="page">
    <Image1 />

    <h1>SpongeBob Lore</h1>

    <TextBox>
      SpongeBob SquarePants lives in a pineapple under the sea.
      He's absorbent and yellow and porous and  always up to nautical nonsense if its something you wish.
      He also works at the Krusty Krab and loves jellyfishing.
    </TextBox>
  </div>
</template>

<script>
import Image1 from '@/components/Image1.vue'
import TextBox from '@/components/TextBox.vue'

export default {
  components: {
    Image1,
    TextBox
  }
}
</script>

<style>
.page {
  text-align: center;
}
</style>