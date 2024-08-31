<script>
import Navbar from './Navbar.vue';
export default {
  components: {
        Navbar,
    },

    
  data() {
    return {
       items: [],
      menus: [],
      isVisible: true,
      isVisible2: true,
      isVisible3: true,
      isVisible4: true,
      imageWidth: 100,
      imageHeight: 50,
      imageWidth2: 120,
      imageHeight2: 60,
      selected: "",
      options: [
        { value: "option1", text: "Option 1" },
        { value: "option2", text: "Option 2" },
        { value: "option3", text: "Option 3" },
      ],

      chunkedItems2: [
                { imgSrc: 'https://images.unsplash.com/photo-1713633053534-a6d818a7e074?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwaGFsbHxlbnwwfHwwfHx8MA%3D%3D', caption: '12 Best Dinnig Place' },
                { imgSrc: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGluaW5nJTIwaGFsbCUyMHdpdGglMjBnbGFjZSUyMG9mJTIwd2luZXxlbnwwfHwwfHx8MA%3D%3D', caption: '11 Best Romantic Dinning Place' },
                { imgSrc: 'https://images.unsplash.com/photo-1562252185-16feebe22b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGluaW5nJTIwaGFsbCUyMHdpdGglMjByb3NlfGVufDB8fDB8fHww', caption: '17 Greate Cafe' },
                { imgSrc: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWxsdSUyMHRpa2thfGVufDB8fDB8fHww', caption: '12 Local Favrouite Place' },
       
                // Add more items as needed
            ]
    };
  },
  mounted() {
    this.fetchitem();
    this.fetchmenu();
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
    async fetchitem() {
      try {
        const response = await fetch('http://localhost:3000/items');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        this.items = await response.json();
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async fetchmenu() {
      try {
        const response = await fetch('http://localhost:3000/menus');
        if (!response.ok) {
          throw new Error('Failed to fetch menu');
        }
        this.menus = await response.json();
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    },


  },

};
</script>

<template>
  <!-- The MiddleView Part start here -->
  
  <div class="container-fluid" >
    <Navbar/>
    <div class="row"  v-for="item in items" :key="item._id">
      <div class="col-12 col-md-6">
        <h1 class="d-flex justify-content-center mt-5">{{ item.header }}</h1>
        <h4 class="d-flex justify-content-center mt-5">
          {{ item.description }}
        </h4>
        <!-- <img :src="item.photo" alt="Uploaded Photo" style="width: 100px; height: 100px"> -->
      </div>
      <div class="col-12 col-md-6">
        <img class="img-fluid" :src="item.photo" alt="Food" />
      </div>
    </div>
  </div>
  <!-- The MiddleView Part end here -->

  <!-- The card Part start here -->
  <div class="container mt-5" v-if="menus.length">
    <div class="row">
      <!-- The First Card -->
      <div class="col-12 col-md-4 mb-3" v-for="menu in menus" :key="menu._id">
        <router-link :to="menu.link" class="card-link" tag="div">
          <div class="card">
            <img :src="menu.photo"  class="card-img-top" alt="Order Online" />
            <div class="card-body">
              <h5 class="card-title">{{ menu.header }}</h5>
              <p class="card-text">{{ menu.description }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <!-- The card Part end here -->

  <!-- The Collection Part start here -->
  <div class="container mt-5">
    <p class="fs-2">Collections</p>
    <div class="row">
      <div class="col-12 col-md-9 mb-3">
        <p class="fs-5">Explore curated lists of top restaurants, cafes, pubs, and bars in Indore, based on trends</p>
      </div>
      <div class="col-12 col-md-3 mb-3 ">
        <p class="text-danger fs-5 ms-3">All collections in Indore  ></p>
      </div>
    </div>
                    <div class="row">
                        <router-link to="/collectioncard" v-for="(chunk, index) in chunkedItems2" :key="index" class="col-12 col-md-3 mb-3 px-2">
                            <div class="card bg-dark text-white"
                                style="height: 300px; border: 2px solid #ffffff; border-radius: 2rem;">
                                <img :src="chunk.imgSrc" class="card-img h-100" alt="collection-img"
                                    style="object-fit: cover;" />
                                <!-- <p class="text-center card-text mt-3 fs-5 fw-8">{{ chunk.caption }}</p> -->
                                <div class="card-img-overlay">
                                    <h5 class="card-text" style="margin-top:14rem">{{ chunk.caption }}</h5>

                                </div>
                            </div>

                          </router-link>
                    </div>
                </div>
  <!-- The collection part end here -->

  <!-- The cities part start here -->
  <div class="container mt-5">
    <h4>Popular localities in and around Indore</h4>

    <div class="row mt-5">
      <div class="col-12 col-md-4 mb-3">
        <div class="bg-light p-4 border border-2 rounded-3">
          <h6>Vijay Nagar</h6>
          <p>1259 Places</p>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-3">
        <div class="bg-light p-4 border border-2 rounded-3">
          <h6>Vijay Nagar</h6>
          <p>1259 Places</p>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-3">
        <div class="bg-light p-4 border border-2 rounded-3">
          <h6>Vijay Nagar</h6>
          <p>1259 Places</p>
        </div>
      </div>
    </div>
  </div>
  <!-- The cities part end here -->

  <!-- The Appbar part start here -->
  <div class="mt-5">
    <div class="row">
      <div class="col-12 col-md-6">
        <img src="../assets/pngegg.png" class="img-fluid" />
      </div>
      <div class="col-12 col-md-6 mt-5">
        <h1>Get the Zomato app</h1>
        <p class="mt-4">
          We will send you a link, open it on your phone to download
        </p>

        <div class="row">
          <div class="col-6 col-md-3">
            <input type="radio" id="phone" name="contactMethod" />
            <label for="phone" class="ms-2">Phone</label>
          </div>
          <div class="col-6 col-md-3">
            <input type="radio" id="email" name="contactMethod" />
            <label for="email" class="ms-2">Email</label>
          </div>
        </div>
        <div class="mt-3">
          <input type="text" class="form-control d-inline w-50 me-2" placeholder="Enter the Email" />
          <button type="button" class="btn btn-danger">Share App Link</button>
        </div>
        <p class="mt-3">Download app from</p>
        <div class="row">
          <div class="col-6 col-md-3">
            <img src="../assets/google_play.png" :width="imageWidth" :height="imageHeight" alt="Google Play" />
          </div>
          <div class="col-6 col-md-3">
            <img src="../assets/app_store.png" :width="imageWidth" :height="imageHeight" alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-5 bg-light">
    <div class="container p-5">
      <h1 class="mt-5">Explore options near me</h1>

      <div class="row mt-5 border border-2 rounded-3">
        <div @click="toggleText">
          <p v-if="isVisible" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe food near me, Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me, Tea food near me
          </p>
        </div>
      </div>

      <div class="row mt-5 border border-2 rounded-3">
        <div @click="toggleTextsecond">
          <p v-if="isVisible2" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe food near me, Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me, Tea food near me
          </p>
        </div>
      </div>

      <div class="row mt-5 border border-2 rounded-3">
        <div @click="toggleTextthird">
          <p v-if="isVisible3" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe food near me, Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me, Tea food near me
          </p>
        </div>
      </div>

      <div class="row mt-5 border border-2 rounded-3">
        <div @click="toggleTextfour">
          <p v-if="isVisible4" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe food near me, Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near me, South Indian food near me, Street food near me, Tea food near me
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- The Appbar part end here -->

  <!-- The Footer part start here -->
  <div class="mt-5">
    <div class="bg-light">
      <div class="container">
        <h1>Zomato</h1>
        <div class="float-end">
          <select v-model="selected" id="dropdown">
            <option v-for="option in options" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
          <p>Selected: {{ selected }}</p>
        </div>

        <div class="row mt-5">
          <div class="col-12 col-md-3">
            <p>About Me</p>
            <p>Who we Are</p>
            <p>Blog</p>
            <p>Work with us</p>
            <p>Report Fraud</p>
            <p>Press kit</p>
            <p>Contact Us</p>
          </div>
          <div class="col-12 col-md-3">
            <p>ZOMAVERSE</p>
            <p>Zomato</p>
            <p>Blinkit</p>
            <p>Feeding India</p>
            <p>HyperPure</p>
          </div>
          <div class="col-12 col-md-3">
            <p>For Restaurants</p>
            <p>Partner with us</p>
            <p>Apps for you</p>
          </div>
          <div class="col-12 col-md-3">
            <p>Social Links</p>
            <img src="../assets/google_play.png" :width="imageWidth" :height="imageHeight" alt="Google Play" />
            <img src="../assets/app_store.png" :width="imageWidth2" :height="imageHeight2" alt="App Store" />
          </div>
        </div>

        <p :style="{ textDecoration: 'underline' }">
          By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. 2008-.
        </p>
      </div>
    </div>
  </div>
  <!-- The Footer part end here -->
</template>

<style scoped>
.card-link {
  text-decoration: none; /* Remove any underline from the link */
  color: inherit; /* Inherit text color */
}
</style>
