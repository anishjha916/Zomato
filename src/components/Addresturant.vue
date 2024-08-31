<!-- src/components/AboutComponent.vue -->

<script>
import SwiperComponent from "../Slider/SwiperComponent.vue";
import SecondComponent from "../Slider/SecondSlider.vue";
import Swiper from "../Slider/swipe.vue";
import imageUrl3 from "../assets/food.jpg";
export default {
  components: {
    SwiperComponent,
    SecondComponent,
    Swiper,
  },

  data() {
    return {
      imageUrl:
        "https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp",
      imageUrl2:
        "https://www.zomato.com/partner-with-us/static/media/StartJourney.7cfaaf0a.jpg",
      imageUrl3,

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
        backgroundSize: "cover" /* Ensure the image covers the entire div */,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Prevent the image from repeating */,
      };
    },
    backgroundStyle3() {
      return {
        backgroundImage: `url(${this.imageUrl3})`,
        backgroundSize: "cover" /* Ensure the image covers the entire div */,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Prevent the image from repeating */,
        height: "35rem",
      };
    },
    backgroundStyle1() {
      return {
        backgroundImage: `url(${this.imageUrl2})`,
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        backgroundPosition: "center",
        height: "200px", // Adjust height as needed
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
    },
  },
};
</script>

<template>
  <div>
    <div :style="backgroundStyle" class="bg-container">
      <div class="row p-2">

        <div class="col-6 d-flex justify-content-center">
          <h3 class="text-white fs-1  fw-bold">Zomato for You</h3>
        </div>
        <div class="col-6 d-flex justify-content-center gap gap-5">
          <router-link to="/advertise">
            <button type="button" class="btn btn-outline-light">Advertisement</button>
          </router-link>
          <router-link to="/login">
            <button type="button" class="btn btn-outline-light">Login</button>
          </router-link>


        </div>
      </div>
      <div class="p-5">
        <h2 class="text-white text-center">Partner With Zomato</h2>
        <h2 class="text-white text-center">at 0% commission for the 1st month!</h2>
        <p class="text-white text-center mt-3 fs-4">
          And get ads worth INR 1500. Valid for new restaurant partners in select cities.
        </p>
        <div class="row">
          <div class="col-12 col-md-6 d-flex justify-content-end">
            <button type="button" class="btn btn-primary btn-lg">Register Your restaurant</button>
          </div>
          <div class="col-12 col-md-6 d-flex justify-content-start">
            <button type="button" class="btn btn-light btn-lg">Login To view your existing restaurant</button>
          </div>
        </div>
      </div>

      <div class="position-relative d-flex justify-content-center mt-5">
        <div :style="{ top: '98%', zIndex: 10 }" class="position-absolute w-75 rounded border bg-light">
          <h2 class="text-center mt-4">Get started with online ordering</h2>
          <p class="text-center mt-4 fs-5">Please keep the documents ready for a smooth signup</p>
          <div class="row mt-3">
            <div class="col-12 col-md-6 p-5">
              <p><img style="width: 15px; height: 15px" class="mt-1" src="../assets/check.png" />
                <span class="fw-bold"> Regular GSTIN (apply now)</span>
              </p>
              <p><img style="width: 15px; height: 15px" class="mt-1" src="../assets/check.png" />
                <span class="fw-bold"> PAN card copy </span>
              </p>
              <p><img style="width: 15px; height: 15px" class="mt-1" src="../assets/check.png" />
                <span class="fw-bold"> Bank account details</span>
              </p>
            </div>
            <div class="col-12 col-md-6 p-5">
              <p><img style="width: 15px; height: 15px" class="mt-1" src="../assets/check.png" />
                <span class="fw-bold"> Dish images for top 5 items </span>
              </p>
              <p><img style="width: 15px; height: 15px" class="mt-1" src="../assets/check.png" />
                <span class="fw-bold"> Your restaurant menu </span>
              </p>
              <p><img style="width: 15px; height: 15px" class="mt-1" src="../assets/check.png" />
                <span class="fw-bold"> Your restaurant menu </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 h-100"></div>
      <div class="container-fluid bg-light">
        <div class="mt-5">
          <h2 class="text-center fs-4">Why should you partner with Zomato?</h2>
          <p class="text-center fs-4">Zomato enables you to get 60% more revenue, 10x new customers and boost your brand
            visibility by providing insights to improve your business.</p>
          <div class="d-flex justify-content-evenly mt-5 flex-wrap">
            <div class="border rounded border-2 p-3 m-2" style="width: 250px">
              <div class="row">
                <div class="col-4 d-flex justify-content-center">
                  <img style="width: 40px; height: 40px" class="mt-4" src="../assets/earth.webp" />
                </div>
                <div class="col-8">
                  <p class="fs-5 mt-3 text-primary text-center">1000+ cities</p>
                  <p class="text-center">in India</p>
                </div>
              </div>
            </div>
            <div class="border rounded border-2 p-3 m-2" style="width: 250px">
              <div class="row">
                <div class="col-4 d-flex justify-content-center">
                  <img style="width: 40px; height: 40px" class="mt-4" src="../assets/home.webp" />
                </div>
                <div class="col-8">
                  <p class="fs-5 mt-3 text-primary text-center">1000+ cities</p>
                  <p class="text-center">in India</p>
                </div>
              </div>
            </div>
            <div class="border rounded border-2 p-3 m-2" style="width: 250px">
              <div class="row">
                <div class="col-4 d-flex justify-content-center">
                  <img style="width: 40px; height: 40px" class="mt-4" src="../assets/calender.webp" />
                </div>
                <div class="col-8">
                  <p class="fs-5 mt-3 text-primary text-center">1000+ cities</p>
                  <p class="text-center">in India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div :style="backgroundStyle" class="bg-container mt-5">
        <div class="p-5">
          <h2 class="text-white text-center">How it works</h2>
        </div>
        <div :style="{ zIndex: 15 }" class="position-absolute w-100 mt-3">
          <div class="container mt-5">
            <div class="row">
              <div class="col-12 col-md-4 mb-3">
                <div class="card" style="width: 100%">
                  <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Order Online</h5>
                    <p class="card-text">Stay home and Order to Your Doorstep</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 mb-3">
                <div class="card" style="width: 100%">
                  <img src="../assets/dining.avif" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Dining</h5>
                    <p class="card-text">View the city favourite dining venue</p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 mb-3">
                <div class="card" style="width: 100%">
                  <img src="../assets/nightlife.webp" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Dining</h5>
                    <p class="card-text">View the city favourite dining venue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-100 h-50"></div>
      <div class="bg-light mt-5">
        <div class="p-5">
          <p class="mt-5 text-center fs-1 g-3 fw-bold">Already have your restaurant listed?</p>
          <p class="fs-4 text-center">Search here and claim the ownership of your restaurant</p>
          <nav class="navbar navbar-light mt-5 ">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <div class="mx-auto d-flex align-items-center search-container w-75 h-25 border border-1 rounded">
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
       
      </div>
    </nav>
        </div>
      </div>

      <div class="mt-5 p-5">
        <h2 class="text-center">Our Product</h2>
        <SwiperComponent />
      </div>

      <div class="bg-light p-5">
        <h2 class="text-center">Our Happy Customer</h2>
        <SecondComponent />
      </div>

      <Swiper />

      <!-- what do you get sign in end here -->
      <!-- Frequently asked questions start here -->
      <div class="mt-5 container">
        <div class="card text-white">
          <img src="../assets/start_journey.jpg" class="card-img" alt="..." />
          <div class="card-img-overlay p-5">
            <h2 class="card-title">Start your journey with Zomato</h2>
            <p class="card-text fs-4 mt-4">
              Create your restaurant page and register for online ordering
            </p>
            <button type="button" class="btn btn-primary mt-3">
              Start Now
            </button>
          </div>
        </div>
      </div>

      <div class="mt-5 container">
        <div class="p-5">
          <h1 class="mt-5">Frequently asked questions</h1>

          <div class="row mt-5 border border-2 rounded-3" @click="toggleText">
            <p v-if="isVisible" class="mt-3">
              What will Zomato charge me for creating a page on its platform?
            </p>
            <p v-else>
              Bakery food near me, Beverages food near me, Biryani food near
              me, Burger food near me, Cafe food near me, Chinese food near
              me, Coffee food near me, Desserts food near me, Ice Cream food
              near me, Momos food near me, Mughlai food near me, North Indian
              food near me, Pasta food near me, Pizza food near me, Rolls food
              near me, Sandwich food near me, Shake food near me, South Indian
              food near me, Street food near me, Tea food near me
            </p>
          </div>

          <div class="row mt-5 border border-2 rounded-3" @click="toggleTextsecond">
            <p v-if="isVisible2" class="mt-3">
              Popular restaurant types near me
            </p>
            <p v-else>
              Bakery food near me, Beverages food near me, Biryani food near
              me, Burger food near me, Cafe food near me, Chinese food near
              me, Coffee food near me, Desserts food near me, Ice Cream food
              near me, Momos food near me, Mughlai food near me, North Indian
              food near me, Pasta food near me, Pizza food near me, Rolls food
              near me, Sandwich food near me, Shake food near me, South Indian
              food near me, Street food near me, Tea food near me
            </p>
          </div>

          <div class="row mt-5 border border-2 rounded-3" @click="toggleTextthird">
            <p v-if="isVisible3" class="mt-3">
              Popular restaurant types near me
            </p>
            <p v-else>
              Bakery food near me, Beverages food near me, Biryani food near
              me, Burger food near me, Cafe food near me, Chinese food near
              me, Coffee food near me, Desserts food near me, Ice Cream food
              near me, Momos food near me, Mughlai food near me, North Indian
              food near me, Pasta food near me, Pizza food near me, Rolls food
              near me, Sandwich food near me, Shake food near me, South Indian
              food near me, Street food near me, Tea food near me
            </p>
          </div>

          <div class="row mt-5 border border-2 rounded-3" @click="toggleTextfour">
            <p v-if="isVisible4" class="mt-3">
              Popular restaurant types near me
            </p>
            <p v-else>
              Bakery food near me, Beverages food near me, Biryani food near
              me, Burger food near me, Cafe food near me, Chinese food near
              me, Coffee food near me, Desserts food near me, Ice Cream food
              near me, Momos food near me, Mughlai food near me, North Indian
              food near me, Pasta food near me, Pizza food near me, Rolls food
              near me, Sandwich food near me, Shake food near me, South Indian
              food near me, Street food near me, Tea food near me
            </p>
          </div>
        </div>
      </div>
      <!-- Frequently asked questions end here -->

      <!-- Cannot find favourite start here -->
      <div :style="backgroundStyle3" class="bg-container mt-5">
        <div class="row p-5">
          <div class="col-12 col-md-6 p-5">
            <h2>Cannot find your favourite restaurant on Zomato?</h2>
            <p class="fs-4">
              Submit the details and our team will get the restaurant onboard
            </p>
          </div>
          <div class="col-12 col-md-6">
            <div class="p-5 rounded" :style="{ backgroundColor: '#fff' }">
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default" placeholder="Restaurant Name" />
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default" placeholder="Restaurant Location" />
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default" placeholder="Restaurant Contact No" />
              </div>
              <div class="input-group">
                <textarea class="form-control" aria-label="With textarea"
                  placeholder="What do you like about Restaurant"></textarea>
              </div>
              <button type="button" class="btn btn-primary btn-lg mt-5 w-100">Submit</button>
              <p class="mt-4 d-flex justify-content-center">Restaurant owners can add restaurant from here</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Cannot find favourite end here -->

      <!-- The Footer part start here -->
      <div class="mt-5">
        <div>
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
              By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and
              Content Policies. All trademarks are properties of their respective owners. 2008-.
            </p>
          </div>
        </div>
      </div>
      <!-- The Footer part end here -->

      <!-- The Footer part end here -->
      <!-- cannot find favrouite start here -->
    </div>
  </div>
</template>

<style scoped>
.bg-container {
  width: 100%;
  height: 400px;
}
</style>
