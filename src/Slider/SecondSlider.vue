<template>
  <div class="p-5 w-100">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="d-flex justify-content-center p-5">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/order_online.avif"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
              
                <p class="card-text">
                  Earlier, we delivered food orders to our known and repeat
                  customers but now we have been able to create a completely new
                  segment of repeat users - all because of the Zomato app
                </p>
                  <h5 class="card-title ms-4">Pawan Kumar</h5>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center p-5">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/order_online.avif"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="d-flex justify-content-center p-5">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../assets/order_online.avif"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    
    </swiper>
  </div>
</template>

<script>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
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
</style>
