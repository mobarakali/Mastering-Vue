

<script setup>
import { ref } from 'vue';

const carouselData = [
  {
    "src": "https://picsum.photos/id/200/1920/650",
    "alt": "First slide"
  },
  {
    "src": "https://picsum.photos/id/1000/1920/650",
    "alt": "Second slide"
  },
  {
    "src": "https://picsum.photos/id/1040/1920/650",
    "alt": "Third slide"
  }
];

const images = carouselData;
const currentSlideIndex = ref(0);

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % images.length;
};

const prevSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + images.length) % images.length;
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
          <li v-for="(image, index) in images" :key="index" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" :class="{ active: index === currentSlideIndex }" ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="{ active: index === currentSlideIndex }" >
            <img class="d-block w-100" :src="image.src" :alt="image.alt">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev" @click="prevSlide">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next" @click="nextSlide">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>


<style>
#app {
  display: initial;
  max-width: initial;
}
.carousel-indicators {
  list-style-type: none;
}
/* Add any custom styles here if needed. */
</style>
