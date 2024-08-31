<script>
import FooterView from "../../footer/footer.vue";
export default {
  components: {
    FooterView,
  },
  data() {
    return {
      isVisible: true,
      isVisible2: true,
      isVisible3: true,
      isVisible4: true,
      imageUrl1:
        "https://plus.unsplash.com/premium_photo-1661962305366-0c62646fd249?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      imageUrl:
        "https://images.unsplash.com/photo-1675282120637-bf7f084049e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnQlMjBoZCUyMHdhbGxwYXBlciUyMGZvciUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
      helpOptions: [
        "Order Issue",
        "Account Issue",
        "Refund Request",
        "General Inquiry",
        "Feedback",
      ],
      chunkedItems1: [
        { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/19ea8d1ea1620040f34f109c44f6c8b71684236627.png', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        { imgSrc: 'https://t4.ftcdn.net/jpg/02/14/93/81/240_F_214938164_zDVJLyb1oq7AAWhmYmsawiZuMi2jgrPW.jpg', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        { imgSrc: 'https://t4.ftcdn.net/jpg/05/58/28/39/240_F_558283914_DbhElEI71hUSh2MNtJbscvqboopFC41j.jpg', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        { imgSrc: 'https://t3.ftcdn.net/jpg/07/81/84/42/240_F_781844240_06lARJfRAipHZxuJRbEsucKbkqhwUS8Y.jpg', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        { imgSrc: 'https://t4.ftcdn.net/jpg/03/07/82/41/240_F_307824171_XJIGXDFaQzN7oB8DBXPdPsjpPVhieQI1.jpg', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        { imgSrc: 'https://t3.ftcdn.net/jpg/01/80/30/72/240_F_180307287_9pmazV0q6VgqxgMpSy8PF0yqGrwWmEnm.jpg', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        { imgSrc: 'https://t3.ftcdn.net/jpg/02/43/65/26/240_F_243652656_l1lUj57E04qnfaxwswuNZ6r7dwRzAKBm.jpg', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        { imgSrc: 'https://t4.ftcdn.net/jpg/04/01/65/61/240_F_401656189_L7LrnyZGgcrCjiXWQLKJudyX9BeRFqSQ.jpg', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        { imgSrc: 'https://t4.ftcdn.net/jpg/06/42/49/19/240_F_642491918_yPRYkB9UNTRfkolIt1oJ210Vw632NezJ.jpg', header: 'Coco kitchen & bar', First_para: 'North India, Chienese, Sushi...', Second_para: 'Vijay nagar, Indore' },
        // Add more items as needed
      ],
      chunkedItems2: [
        { imgSrc: 'https://images.unsplash.com/photo-1713633053534-a6d818a7e074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwaGFsbHxlbnwwfHwwfHx8MA%3D%3D', caption: '12 Best Dinnig Place' },
        { imgSrc: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGluaW5nJTIwaGFsbCUyMHdpdGglMjBnbGFjZSUyMG9mJTIwd2luZXxlbnwwfHwwfHx8MA%3D%3D', caption: '11 Best Romantic Dinning Place' },
        { imgSrc: 'https://images.unsplash.com/photo-1562252185-16feebe22b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwaGFsbCUyMHdpdGglMjByb3NlfGVufDB8fDB8fHww', caption: '17 Greate Cafe' },
        { imgSrc: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxsdSUyMHRpa2thfGVufDB8fDB8fHww', caption: '12 Local Favrouite Place' },
        { imgSrc: 'https://t3.ftcdn.net/jpg/03/49/38/00/240_F_349380090_TZINn9iWIN9QfLem7x2atpDu2WbLbeJv.jpg', caption: '12 Best Dinnig Place' },
        { imgSrc: 'https://t3.ftcdn.net/jpg/05/82/70/68/240_F_582706823_g8OGlzl8jUvUWWnaMxW7Gn7mx4v0Bdz1.jpg', caption: '11 Best Romantic Dinning Place' },
        { imgSrc: 'https://t3.ftcdn.net/jpg/08/02/43/82/240_F_802438246_c97ZMMckVCJzrbgdCmOLCu54InrQSKWs.jpg', caption: '17 Greate Cafe' },
        { imgSrc: 'https://t3.ftcdn.net/jpg/03/97/30/70/240_F_397307070_8RA0APOT2Q032yfmdtn8v1jEMcMqBjRA.jpg', caption: '12 Local Favrouite Place' },
        { imgSrc: 'https://t3.ftcdn.net/jpg/00/01/13/32/240_F_1133280_tOQZNXK8eJbGvakODs13Dr1ghM9fK8.jpg', caption: '12 Best Dinnig Place' },
        { imgSrc: 'https://t4.ftcdn.net/jpg/05/59/58/33/240_F_559583384_CtRfePjNUpSMOMH348InWmhCB7GGOH9S.jpg', caption: '11 Best Romantic Dinning Place' },



        // Add more items as needed
      ]
    };
  },
  methods: {
    toggleText() {
      this.isVisible = !this.isVisible;
    },
    toggleTextsecond() {
      this.isVisible2 = !this.isVisible2;
    },
    toggleTextthird() {
      this.isVisible3 = !this.isVisible3;
    },
    toggleTextfour() {
      this.isVisible4 = !this.isVisible4;
    },
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "70vh",
      };
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Zomato</h2>
        <div class="mx-auto d-flex align-items-center search-container w-50 h-25">
          <div class="input-group">
            <select class="form-select border-0 rounded-start">
              <option selected>All</option>
              <option value="1">Restaurants</option>
              <option value="2">Dishes</option>
              <option value="3">Cuisines</option>
            </select>
            <input class="form-control border-0" type="search" placeholder="Search" aria-label="Search" />
          </div>
        </div>
        <div class="d-flex gap gap-4">
          <button class="btn btn-outline-dark me-2" type="button">Login</button>
          <button class="btn btn-dark" type="button">Sign Up</button>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <p>Home / Indore / Collections / 12 Best Luxury Dining Places</p>
      <div class="row" :style="backgroundStyle">

        <div class="col-12 col-md-6 mt-5 text-white content-box">
          <h4>Zomato Collection</h4>
          <h1>12 Best Luxury Dining Places</h1>
          <p>Restaurants that are unmatched on multiple fronts with luxurious indoor settings and extravagant
            menus.</p>
          <p>12 Places</p>
        </div>
        <div class="col-12 col-md-6"></div>
      </div>

      <!-- first card item start here  -->
      <div class="mt-5">
        <div class="row">
          <div class="col-12 col-md-3 mt-4" v-for="(chunk, index) in chunkedItems1" :key="index">
            <div class="card bg-light">
              <img :src="chunk.imgSrc" class="card-img-top" style="height:13rem" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ chunk.header }}</h5>
                <button type="button" class="btn btn-success btn-sm">4.5 </button><span class="ms-2"> DINNING</span>
                <p>{{ chunk.First_para }}</p>
                <!-- <p>{{ chunk.Second_para }}</p> -->
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- The Collection Part start here -->
      <div class="container mt-5">
        <p class="fs-2">Collections</p>

        <div class="row">
          <router-link to="/collectioncard" v-for="(chunk, index) in chunkedItems2" :key="index"
            class="col-12 col-md-3 mb-3 px-2">
            <div class="card bg-dark text-white" style="height: 300px; border: 2px solid #ffffff; border-radius: 2rem;">
              <img :src="chunk.imgSrc" class="card-img h-100" alt="collection-img" style="object-fit: cover;" />
              <!-- <p class="text-center card-text mt-3 fs-5 fw-8">{{ chunk.caption }}</p> -->
              <div class="card-img-overlay">
                <h5 class="card-text" style="margin-top:14rem">{{ chunk.caption }}</h5>

              </div>
            </div>

          </router-link>
        </div>
      </div>
      <!-- The collection part end here -->
    </div>

  </div>
  <div class="mt-5 bg-light">
    <div class="container p-5">
      <h1 class="mt-2">Explore options near me</h1>

      <div class="row mt-3 border border-2 rounded-3">
        <div @click="toggleText">
          <p v-if="isVisible" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe food near me,
            Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream food near me, Momos food near
            me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near
            me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me, Tea food near
            me
          </p>
        </div>
      </div>

      <div class="row mt-3 border border-2 rounded-3">
        <div @click="toggleTextsecond">
          <p v-if="isVisible2" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe food near me,
            Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream food near me, Momos food near
            me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near
            me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me, Tea food near
            me
          </p>
        </div>
      </div>

      <div class="row mt-3 border border-2 rounded-3">
        <div @click="toggleTextthird">
          <p v-if="isVisible3" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe food near me,
            Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream food near me, Momos food near
            me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near
            me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me, Tea food near
            me
          </p>
        </div>
      </div>

      <div class="row mt-3 border border-2 rounded-3">
        <div @click="toggleTextfour">
          <p v-if="isVisible4" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe food near me,
            Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream food near me, Momos food near
            me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near
            me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me, Tea food near
            me
          </p>
        </div>
      </div>
    </div>
    <FooterView />
  </div>
</template>


<style scoped>
/* Opacity applied with background-color */
.content-box {
  background-color: rgba(0, 0, 0, 0.7);
  /* Adjust opacity here (0.7 means 70% opacity) */
  padding: 2rem;
  border-radius: 10px;
  /* Optional: Adds rounded corners */
}

/* Margin-top adjustment */
.mt-5 {
  margin-top: 5rem !important;
  /* You can adjust this value if the top margin is too large or too small */
}

/* Ensure the text is well-aligned */
.text-white {
  text-align: left;
}
</style>