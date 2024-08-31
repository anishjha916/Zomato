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

   <div class="mt-5 container">
        <div class="card text-white">
          <img src="../assets/start_journey.jpg" class="card-img" alt="..." />
          <div class="card-img-overlay p-5">
          <h5>Zomato Collection </h5>
            <h2 class="card-title">18 Best Bars & Pubs</h2>
            <p class="card-text fs-4 mt-4">
              Bringing exciting flavours and oomph, these pubs and bars have got <br> some really refreshing sips waiting for you.
            </p>
            <p>16 Places</p>
          </div>
        </div>
      </div>

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
 <!-- The collection start here -->
  <div>
    <div class="container mt-5">
      
      <h4 class="mt-5">
        More Collections
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
       <div class="row gap mt-4">
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
      
       <div class="row gap mt-4">
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

     
      </div>
    </div>
  </div>
  <!-- The collection end here -->
<!-- The Explore Option start here -->
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
  <!-- The Exlore option end here -->

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
