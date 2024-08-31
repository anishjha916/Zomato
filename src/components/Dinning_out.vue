<script>
export default {
  data() {
    return {
      isVisible: true,
      isVisible2: true,
      isVisible3: true,
      isVisible4: true,
      imageWidth: 100,
      imageHeight: 50,
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
};
</script>

<template>
  <div class="mt-2">
    <div class="d-flex justify-content-start ms-5">
      <div class="p-2 ms-5">Home /</div>
      <div class="p-2">India /</div>
      <div class="p-2">Indore /</div>
      <div class="p-2">New Plasia Resturant</div>
    </div>
  </div>

  <div class="mt-2">
    <div class="d-flex justify-content-start ms-5">
      <div class="p-2 ms-5">
        <router-link
          to="/dinning_out"
          class="d-block text-decoration-none text-dark"
        >
          <img src="../assets/dining_out.png" width="100px" alt="..." />
          Dining Out
        </router-link>
      </div>
      <div class="p-2">
        <img src="../assets/dining_out.png" width="100px" alt="..." /> Delivery
      </div>
      <div class="p-2">
        <img src="../assets/dining_out.png" width="100px" alt="..." /> Nighlife
      </div>
    </div>
  </div>

  <!-- The collection start here -->
  <div class="bg-light">
    <div class="container mt-5">
      <h1>Collections</h1>
      <h4 class="mt-5">
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Indore, based on trends
      </h4>
      <div class="row gap">
        <!--  The First Row  -->
        <div class="col-3">
          <div class="card" style="width: 16rem">
            <img src="../assets/dining.avif" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dinning</h5>
              <p class="card-text">View The Sitting favrouite dinning View</p>
            </div>
          </div>
        </div>

        <!--  The Second Row  -->
        <div class="col-3">
          <div class="card" style="width: 16rem">
            <img src="../assets/dining.avif" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Dinning</h5>
              <p class="card-text">View The Sitting favrouite dinning View</p>
            </div>
          </div>
        </div>

        <!--  The Third Row  -->
        <div class="col-3">
          <div class="card" style="width: 16rem">
            <img
              src="../assets/nightlife.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Nightlife And clubs</h5>
              <p class="card-text">Explore The cities Nightlife</p>
            </div>
          </div>
        </div>

        <!-- The fourth row -->
        <div class="col-3">
          <div class="card" style="width: 16rem">
            <img
              src="../assets/nightlife.webp"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Nightlife And clubs</h5>
              <p class="card-text">Explore The cities Nightlife</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- The collection end here -->

  <!-- The get up off start -->
  <div class="container">
    <div class="d-flex mt-4 d-block gap-4">
      <button type="button" class="btn btn-light border border-2">
        Filters
      </button>
      <button type="button" class="btn btn-light border border-2">
        offers
      </button>
      <button type="button" class="btn btn-light border border-2">
        Rating
      </button>
      <button type="button" class="btn btn-light border border-2">
        pet Friendly
      </button>
      <button type="button" class="btn btn-light border border-2">
        outdoor wseating
      </button>
      <button type="button" class="btn btn-light border border-2">
        Alcohol
      </button>
      <button type="button" class="btn btn-light border border-2">
        open now
      </button>
    </div>

    <div class="card bg-dark text-white mt-5">
      <img src="../assets/get50.avif" class="card-img" height="300" alt="..." />
    </div>

       <h4 class="mt-5">
        Explore curated lists of top restaurants, cafes, pubs, and bars in
        Indore, based on trends
      </h4>

<!-- The menu bar -->
 <div class="container mt-5">
    <div class="row">
      <!--  The First Row  -->

      <div class="col-4">
       
          <div class="card" style="width: 20rem">
            <img
              src="../assets/order_online.avif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Cozmo kitchen</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>

      <!--  The Second Row  -->
   
      <div class="col-4">
       
          <div class="card" style="width: 20rem">
           <img src="../assets/dining.avif" class="card-img-top" alt="..." />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Bon Bon cafe</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>

      <!--  The Third Row  -->
          <div class="col-4">
       
          <div class="card" style="width: 20rem">
             <img src="../assets/nightlife.webp" class="card-img-top" alt="..." />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Cozmo kitchen</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>
    </div>
  </div>


 <div class="container mt-5">
    <div class="row">
      <!--  The First Row  -->

      <div class="col-4">
       
          <div class="card" style="width: 20rem">
            <img
              src="../assets/order_online.avif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Cozmo kitchen</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>

      <!--  The Second Row  -->
   
      <div class="col-4">
       
          <div class="card" style="width: 20rem">
           <img src="../assets/dining.avif" class="card-img-top" alt="..." />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Bon Bon cafe</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>

      <!--  The Third Row  -->
          <div class="col-4">
       
          <div class="card" style="width: 20rem">
             <img src="../assets/nightlife.webp" class="card-img-top" alt="..." />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Cozmo kitchen</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>
    </div>
  </div>



 <div class="container mt-5">
    <div class="row">
      <!--  The First Row  -->

      <div class="col-4">
       
          <div class="card" style="width: 20rem">
            <img
              src="../assets/order_online.avif"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Cozmo kitchen</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>

      <!--  The Second Row  -->
   
      <div class="col-4">
       
          <div class="card" style="width: 20rem">
           <img src="../assets/dining.avif" class="card-img-top" alt="..." />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Bon Bon cafe</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>

      <!--  The Third Row  -->
          <div class="col-4">
       
          <div class="card" style="width: 20rem">
             <img src="../assets/nightlife.webp" class="card-img-top" alt="..." />
            <div class="card-body">
            <div class="row">
<div class="col-6"> 
<h6>Cozmo kitchen</h6>
<div>Nort India</div>
<div>By pass road</div>
</div>
<div class="col-6">
<div class="d-grid gap-2 d-md-flex justify-content-md-end">

  <button class="btn btn-success" type="button ">4.6</button>
</div>
<div class="text-sm-end">1000&#x20B9 for you</div>
<div class="text-sm-end">By pass road</div>
</div>
            </div>
            </div>
          </div>
      
      </div>
    </div>
  </div>


  
<!-- the menu bar end -->

  </div>


  <!-- get up off end -->

<!-- Explore near start here -->
  <div class="mt-5 bg-light">
    <div class="container p-5">
      <h1 class="mt-5">Explore options near me</h1>

      <div class="row mt-5 border border-2 rounded-3">
        <div @click="toggleText">
          <p v-if="isVisible" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near meBeverages food near meBiryani food near meBurger
            food near meCafe food near meChinese food near meCoffee food near
            meDesserts food near meIce Cream food near meMomos food near
            meMughlai food near meNorth Indian food near mePasta food near
            mePizza food near meRolls food near meSandwich food near meShake
            food near meSouth Indian food near meStreet food near meTea food
            near me
          </p>
        </div>
      </div>

      <div class="row mt-5 border border-2 rounded-3">
        <div @click="toggleTextsecond">
          <p v-if="isVisible2" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near meBeverages food near meBiryani food near meBurger
            food near meCafe food near meChinese food near meCoffee food near
            meDesserts food near meIce Cream food near meMomos food near
            meMughlai food near meNorth Indian food near mePasta food near
            mePizza food near meRolls food near meSandwich food near meShake
            food near meSouth Indian food near meStreet food near meTea food
            near me
          </p>
        </div>
      </div>

      <div class="row mt-5 border border-2 rounded-3">
        <div @click="toggleTextthird">
          <p v-if="isVisible3" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near meBeverages food near meBiryani food near meBurger
            food near meCafe food near meChinese food near meCoffee food near
            meDesserts food near meIce Cream food near meMomos food near
            meMughlai food near meNorth Indian food near mePasta food near
            mePizza food near meRolls food near meSandwich food near meShake
            food near meSouth Indian food near meStreet food near meTea food
            near me
          </p>
        </div>
      </div>

      <div class="row mt-5 border border-2 rounded-3">
        <div @click="toggleTextfour">
          <p v-if="isVisible4" class="mt-3">Popular restaurant types near me</p>
          <p v-else>
            Bakery food near meBeverages food near meBiryani food near meBurger
            food near meCafe food near meChinese food near meCoffee food near
            meDesserts food near meIce Cream food near meMomos food near
            meMughlai food near meNorth Indian food near mePasta food near
            mePizza food near meRolls food near meSandwich food near meShake
            food near meSouth Indian food near meStreet food near meTea food
            near me
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Explore near end here -->

  <!-- footer start here -->
 <div class="mt-5">
    <div class="bg-light">
      <div class="container">
        <h1>Zamato</h1>
        <div class="float-end">
          <select v-model="selected" id="dropdown">
            the
            <option
              v-for="option in options"
              :key="option.value"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
          <p>Selected: {{ selected }}</p>
        </div>

        <div class="row mt-5">
          <div class="col-3">
            <p>About Me</p>
            <p>Who we Are</p>
            <p>Blog</p>
            <p>Work with us</p>
            <p>Report Fraud</p>
            <p>press kit</p>
            <p>Contact Us</p>
          </div>
          <div class="col-3">
            <p>ZOMAVERSE</p>
            <p>Zamato</p>
            <p>Blinkit</p>
            <p>Feeding India</p>
            <p>HyperPure</p>
          </div>
          <div class="col-3">
            <p>For Resturant</p>
            <p>Partner with us</p>
            <p>Apps for you</p>
          </div>
          <div class="col-3">
            <p>Social Links</p>
            <p>
              <img
                src="../assets/google_play.png"
                :width="imageWidth"
                :height="imageHeight"
                alt="Example Image"
              />
            </p>
            <p class="d-flex justify-content-start">
              <img
                src="../assets/app_store.png"
                :width="imageWidth2"
                :height="imageHeight2"
                alt="Example Image"
              />
            </p>
          </div>
        </div>

        <p :style="{ textDecoration: 'underline' }">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-.
        </p>
      </div>
    </div>
  </div>
  <!-- footer end here -->
</template>

<style scoped></style>
