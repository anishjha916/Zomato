<template>
  <div class="container mt-5 p-5">
    <h1>What do you get on sign-up</h1>
    <p class="fs-4">
      Zomato Partner Platform helps you take your business to new heights
      instantly with no hassle and 100% transparency!
    </p>
    <div class="row mt-4">
      <div class="col-12 col-md-6">
        <!-- Placeholder for the first column content -->
        <!-- Add any additional content here if needed -->
      </div>
      <div class="col-12 col-md-6">
        <swiper
          ref="swiper"
          :modules="modules"
          :slides-per-view="1"
          :space-between="10"
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="(item, index) in slides" :key="index" class="swiper-slide">
            <div class="swiper-slide-content">
              <img :src="item.img" class="img-fluid" />
              <div class="swiper-slide-text">{{ textItems[index]?.title }}</div>
              <div class="swiper-slide-description">{{ textItems[index]?.description }}</div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../assets/pngegg.png';
import img2 from '../assets/pngegg.png';
import img3 from '../assets/pngegg.png';

export default {
  name: 'SyncSwiperComponent',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = ref(null);
    const textItems = [
      { title: 'Restaurant Partner app', description: 'Manage all your orders on your smartphone with our Android app' },
      { title: 'Restaurant Partner web dashboard', description: 'Manage all your orders on your desktop or laptop' },
      { title: 'API integration', description: 'Manage all your orders on your existing Point of Sale (POS) or third party software' }
    ];
    const slides = [
      { img: img1 },
      { img: img2 },
      { img: img3 }
    ];

    const updatePaginationText = (swiperInstance) => {
      const paginationEl = swiperInstance.pagination.el;
      const bullets = paginationEl.querySelectorAll('.swiper-pagination-bullet');
      bullets.forEach((bullet, index) => {
        bullet.textContent = textItems[index]?.title || '';
      });
    };

    const onSlideChange = () => {
      if (swiper.value && swiper.value.swiper) {
        updatePaginationText(swiper.value.swiper);
      }
    };

    onMounted(() => {
      if (swiper.value && swiper.value.swiper) {
        updatePaginationText(swiper.value.swiper);
      }
    });

    return {
      swiper,
      textItems,
      slides,
      modules: [Pagination, Autoplay],
      onSlideChange
    };
  },
};
</script>

<style scoped>
.img-fluid {
  height: auto;
  width: 100%;
}

.swiper-slide {
  position: relative;
}

.swiper-slide-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-slide-text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
}

.swiper-slide-description {
  position: absolute;
  bottom: 40px;
  left: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  max-width: calc(100% - 20px);
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Custom pagination style */
.swiper-pagination {
  text-align: center;
  margin-top: 10px;
}

.swiper-pagination-bullet {
  background: transparent;
  border: none;
  font-size: 14px;
  line-height: 1.2;
  color: #000;
  cursor: pointer; /* Ensure cursor changes to pointer */
}

.swiper-pagination-bullet:hover {
  color: #007bff; /* Change color on hover to indicate interactiveness */
}
</style>
