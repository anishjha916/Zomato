<script>
export default {
  data() {
    return {
      imageWidth: 100,
      imageHeight: 50,
      imageWidth2: 120,
      imageHeight2: 60,
    };
  },
};
</script>
<template>
  <!-- The Footer part start here -->
  <div class="mt-5">
    <div class="bg-light">
      <div class="container">
        <h1>Zomato</h1>
        <div class="float-end">
          <select v-model="selected" id="dropdown">
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
            <img
              src="../assets/google_play.png"
              :width="imageWidth"
              :height="imageHeight"
              alt="Google Play"
            />
            <img
              src="../assets/app_store.png"
              :width="imageWidth2"
              :height="imageHeight2"
              alt="App Store"
            />
          </div>
        </div>

        <p :style="{ textDecoration: 'underline' }">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy, and Content Policies. All trademarks
          are properties of their respective owners. 2008-.
        </p>
      </div>
    </div>
  </div>
  <!-- The Footer part end here -->
</template>
