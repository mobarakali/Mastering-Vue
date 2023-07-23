<template>
  <div class="container">
    <div class="row">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item"
            v-for="(image, index) in images"
            :key="index"
            :class="{ active: index === 0 }"
          >
            <img class="d-block w-100" :src="image.src" :alt="image.alt">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const jsonData = {
  "images": [
    {
      "src": "https://picsum.photos/id/247/1920/650",
      "alt": "First slide"
    },
    {
      "src": "https://picsum.photos/id/257/1920/650",
      "alt": "Second slide"
    },
    {
      "src": "https://picsum.photos/id/237/1920/650",
      "alt": "Third slide"
    }
  ]
};

const { images } = jsonData;
</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    // No need for explicit setup function here, as it's included in the <script setup> block above.
  }
});
</script>

<style>
#app{
  display: initial;
  max-width: initial;
}
.carousel-indicators{
  list-style-type: none;
}
/* Add any custom styles here if needed. */
</style>
