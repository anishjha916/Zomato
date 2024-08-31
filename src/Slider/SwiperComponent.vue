<template>
  <div class="p-5 w-100">
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
  
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <div class="card" style="width: 20rem">
          <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">First</h5>
            <p class="card-text">Stay home and Order to Your Doorstep</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card" style="width: 20rem">
          <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Second</h5>
            <p class="card-text">Stay home and Order to Your Doorstep</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card" style="width: 20rem">
          <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Third</h5>
            <p class="card-text">Stay home and Order to Your Doorstep</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card" style="width: 20rem">
          <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Four</h5>
            <p class="card-text">Stay home and Order to Your Doorstep</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card" style="width: 20rem">
          <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Five</h5>
            <p class="card-text">Stay home and Order to Your Doorstep</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  name: "SwiperComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<style scoped>
/* Customize the navigation buttons */
.swiper-button-next,
.swiper-button-prev {
  display: none;
}

.d-flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
</style>
