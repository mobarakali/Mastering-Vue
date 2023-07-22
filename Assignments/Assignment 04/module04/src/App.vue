<script setup>
const carouselImages = [
  { src: 'https://picsum.photos/id/236/1200/500', alt: 'First slide' },
  { src: 'https://picsum.photos/id/237/1200/500', alt: 'Second slide' },
  { src: 'https://picsum.photos/id/238/1200/500', alt: 'Third slide' },
];
</script>

<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li v-for="(image, index) in carouselImages" :key="index" :data-target="'#carouselExampleIndicators'" :data-slide-to="index" :class="{ 'active': index === 0 }"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(image, index) in carouselImages" :key="index" :class="{ 'carousel-item': true, 'active': index === 0 }">
          <img class="d-block w-100" :src="image.src" :alt="image.alt">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>




<style>
/* Optional custom CSS styles for the carousel */
.carousel {
  margin: 0 auto; 
  max-width: 1200px;
}

.carousel img {
  max-width: 100%;
}
</style>

<!-- Add Bootstrap CSS link to the index.html file -->
