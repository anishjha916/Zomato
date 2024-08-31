<!-- src/components/Investorrelation Component.vue -->
<script>
export default {
 
  data() {
    return {
      helpOptions: ["esg_iniative", "esg_microsite"],
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

      navigateToOption(event) {
      const selectedOption = event.target.value;
      if (selectedOption) {
        this.$router.push(`/${selectedOption}`);
      }
    },
    handleMouseOver(event) {
      event.target.style.cursor = 'pointer';
    },
    handleMouseOut(event) {
      event.target.style.cursor = 'default';
    },

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
 <div class="container-fluid ">
  
  <div class="row bg-danger text-white">
    <nav class="navbar navbar-expand-lg navbar-light text-white justify-content-center">
  <div class="container-fluid text-white" style="padding-left:15%;padding-right: 10%">
    <a class="navbar-brand text-white" href="#"> <span class="fs-3 fw-bold"> Zomato </span>| Investor Relation</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul class="navbar-nav gap gap-3">
        <li class="nav-item ">
          <a class="nav-link active text-white fs-5 fw-8" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
                        <router-link class="nav-link text-white fs-5 fw-8" to="/financial">Financial</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white fs-5 fw-8" to="/announcement">Announcements</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white fs-5 fw-8" to="/blogs">Blogs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white fs-5 fw-8" to="/governence">Governance</router-link>
                    </li>
                    
                    <!-- ESG Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link  text-white fs-5 fw-8" href="#" id="esgDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ESG
                        </a>
                      
                    </li>
                    
                    <li class="nav-item">
                        <select class="form-select" aria-label="Help Options" @change="navigateToOption" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
                            <option selected disabled>All</option>
                            <option v-for="(option, index) in helpOptions" :key="index" :value="option">
                                {{ option }}
                            </option>
                        </select>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white fs-5 fw-8" to="/resources">Resources</router-link>
                    </li>
      </ul>
    </div>
  </div>
</nav>

    <div class="col-12 col-lg-6">
      <div class="mt-5 p-5">
        <h1 class="text-center">Better Food For More</h1>
        <h3 class="text-center">
          Zomato <span class="ms-4">HyperPure</span>
        </h3>
        <div class="mt-5">
          <h4 class="text-center">Instant commerce indistinguishable from magic</h4>
          <h3 class="text-center">
            Zomato <span class="ms-4">Blinkit</span>
          </h3>
        </div>
        <div class="mt-5">
          <h4 class="text-center">Make India malnutrition free</h4>
          <h3 class="text-center">
            Zomato <span class="ms-4">Feeding India</span>
          </h3>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-6 p-5">
      <div class="p-4 bg-light rounded-5 border">
        <h4 class="fs-4 fw-bold text-dark">Company Overview</h4>
        <div class="input-group mb-3 mt-4" style="height: 70px">
          <span class="input-group-text" id="basic-addon1">
            <img style="width: 25px; height: 25px" class="mt-1" src="../assets/presentation.webp" />
          </span>
          <input type="text"     class="form-control custom-placeholder" placeholder="Presentation" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <h4 class="text-dark mt-4">Q4FY24 results</h4>
        <div class="input-group mb-3 mt-4" style="height: 70px">
          <span class="input-group-text" id="basic-addon1">
            <img style="width: 25px; height: 25px" class="mt-1" src="../assets/shareholderletter.webp" />
          </span>
          <input type="text"     class="form-control custom-placeholder" placeholder="Shareholder's letter" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3" style="height: 70px">
          <span class="input-group-text" id="basic-addon1">
            <img style="width: 25px; height: 25px" class="mt-1" src="../assets/sound.webp" />
          </span>
          <input type="text"     class="form-control custom-placeholder" placeholder="Earning Call reply" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3" style="height: 70px">
    <span class="input-group-text" id="basic-addon1">
      <img
        style="width: 25px; height: 25px"
        class="mt-1"
        src="../assets/callscript.webp"
      />
    </span>
    <input
      type="text"
      class="form-control custom-placeholder"
      placeholder="Earnings Call Scripts"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </div>
      </div>
    </div>
  </div>

  <div class="bg-light p-5">
    <h2>Our Core Offering</h2>
    <div class="row mt-5">
      <div class="col-12 col-lg-6 mb-4">
        <div class="border border-2 rounded-5 p-4">
          <div class="row">
            <div class="col-8 mt-4">
              <h3>Food Delivery</h3>
              <p class="fs-5 fw-bold">Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly</p>
              <h4>Q4FY24</h4>
            </div>
            <div class="col-4 d-flex justify-content-end">
              <img style="width: 80px; height: 70px" class="mt-1" src="../assets/zomato.avif" />
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <h4>INR 8,439 crore</h4>
              <p>Food delivery GOV</p>
            </div>
            <div class="col-6">
              <h4>19.0 million</h4>
              <p>Avg. monthly transacting customers</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 mb-4">
        <div class="border border-2 rounded-5 p-4">
          <div class="row">
            <div class="col-8 mt-4">
              <h3>Food Delivery</h3>
              <p class="fs-5 fw-bold">Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly</p>
              <h4>Q4FY24</h4>
            </div>
            <div class="col-4 d-flex justify-content-end">
              <img style="width: 80px; height: 70px" class="mt-1" src="../assets/zomato.avif" />
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <h4>INR 8,439 crore</h4>
              <p>Food delivery GOV</p>
            </div>
            <div class="col-6">
              <h4>19.0 million</h4>
              <p>Avg. monthly transacting customers</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 mb-4">
        <div class="border border-2 rounded-5 p-4">
          <div class="row">
            <div class="col-8 mt-4">
              <h3>Food Delivery</h3>
              <p class="fs-5 fw-bold">Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly</p>
              <h4>Q4FY24</h4>
            </div>
            <div class="col-4 d-flex justify-content-end">
              <img style="width: 80px; height: 70px" class="mt-1" src="../assets/zomato.avif" />
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <h4>INR 8,439 crore</h4>
              <p>Food delivery GOV</p>
            </div>
            <div class="col-6">
              <h4>19.0 million</h4>
              <p>Avg. monthly transacting customers</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-lg-6 mb-4">
        <div class="border border-2 rounded-5 p-4">
          <div class="row">
            <div class="col-8 mt-4">
              <h3>Food Delivery</h3>
              <p class="fs-5 fw-bold">Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly</p>
              <h4>Q4FY24</h4>
            </div>
            <div class="col-4 d-flex justify-content-end">
              <img style="width: 80px; height: 70px" class="mt-1" src="../assets/zomato.avif" />
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-6">
              <h4>INR 8,439 crore</h4>
              <p>Food delivery GOV</p>
            </div>
            <div class="col-6">
              <h4>19.0 million</h4>
              <p>Avg. monthly transacting customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <h2>Beyond Business</h2>
      <p class="fs-4">At Zomato, our business approach is guided by our commitment to responsible and sustainable growth. Our ESG update outlines the many ways in which we make the impact of our business more sustainable and help make the world a better place for everyone. Some of our key sustainability initiatives include:</p>
      <div class="row">
        <div class="col-12 col-md-4 mb-4">
          <div class="card border border-2 rounded-4 h-100">
            <img src="../assets/zomato1.avif" class="card-img-top" alt="Feeding India" />
            <div class="card-body">
              <h5 class="card-title">Feeding India</h5>
              <p class="card-text">A not-for-profit organisation, designing interventions to reduce hunger and malnutrition among underserved communities in India</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card border border-2 rounded-4 h-100">
            <img src="../assets/zomato2.avif" class="card-img-top" alt="Net zero emissions" />
            <div class="card-body">
              <h5 class="card-title">Net Zero Emissions</h5>
              <p class="card-text">Starting FY24, we have taken on a goal to achieve Net Zero emissions across Zomato’s food delivery value chain by 2033</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <div class="card border border-2 rounded-4 h-100">
            <img src="../assets/zomato3.avif" class="card-img-top" alt="Reducing plastic waste" />
            <div class="card-body">
              <h5 class="card-title">Reducing Plastic Waste</h5>
              <p class="card-text">Trying to reduce Zomato’s plastic waste by ensuring completely plastic neutral deliveries since April 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h5 class="ms-5 text-danger">See the latest ESG update</h5>
  </div>


  <!-- core offering end here -->

  <!-- Coreparate Announcment part start here -->

  <div class="container">
  <div class="p-4 mt-4">
    <h2>Corporate Announcements</h2>
    <hr />
    <div class="mb-4">
      <p class="mb-1">11 July 2024</p>
      <h4>Zomato - General update (Grant of Options)</h4>
      <p class="text-danger">Read More</p>
    </div>
    <hr />
    <div class="mb-4">
      <p class="mb-1">2 July 2024</p>
      <h4>Zomato - Disclosure under Regulation 30 (Withdraw the application submitted with RBI by Zomato Financial Services Limited, for getting certificate of registration for undertaking the business of Non-Banking Financial Company)</h4>
      <p class="text-danger">Read More</p>
    </div>
    <button type="button" class="btn btn-danger">See all Announcements</button>
  </div>
</div>

  <!-- Coreparate Announcment part end here -->

  <!-- The Announcment Part start here -->

  <div class="bg-light">
  <div class="container p-5">
    <h2>From Our Blogs</h2>
    <div class="row">
      <!-- Blog Card 1 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="../assets/order_online.avif" class="card-img-top" alt="Order Online" />
          <div class="card-body">
            <h5 class="card-title">Order Online</h5>
            <p class="card-text">Stay home and order to your doorstep</p>
          </div>
        </div>
      </div>

      <!-- Blog Card 2 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="../assets/dining.avif" class="card-img-top" alt="Dining" />
          <div class="card-body">
            <h5 class="card-title">Dining</h5>
            <p class="card-text">View the city's favorite dining venues</p>
          </div>
        </div>
      </div>

      <!-- Blog Card 3 -->
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="../assets/nightlife.webp" class="card-img-top" alt="Nightlife" />
          <div class="card-body">
            <h5 class="card-title">Nightlife</h5>
            <p class="card-text">Explore the city's vibrant nightlife</p>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-danger mt-4">See Our Blogs</button>
  </div>
</div>


  <!-- The Announcment Part end here -->

  <!-- the part of suscrib and question -->
  <div class="container-fluid">
  <div class="p-5">
    <div class="row">
      <!-- Subscribe Section -->
      <div class="col-md-6 mb-4">
        <h2>Subscribe to Our Email Alerts</h2>
        <p>Get regular updates through email.</p>
        <div class="input-group mb-3 w-75">
        
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            aria-label="Email address"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button type="button" class="btn btn-danger btn-lg">Subscribe</button>
      </div>

      <!-- Contact Section -->
      <div class="col-md-6 mb-4">
        <h2>Have Questions?</h2>
        <p>Reach out to us by emailing at <a href="mailto:shareholders@zomato.com">shareholders@zomato.com</a>, and we’ll get back to you.</p>
        <button type="button" class="btn btn-danger btn-lg">Contact Us</button>
      </div>
    </div>
  </div>
</div>


  <!-- The part of suscrib and question end here -->
  <!-- the Footer part is start here -->
  <div class="mt-5 bg-light">
  <div class="container py-5">
    <h1>Zomato</h1>
    <div class="row mt-4">
      <!-- Footer Links -->
      <div class="col-md-3 mb-3">
        <p>About Us</p>
        <p>Who We Are</p>
        <p>Blog</p>
        <p>Work With Us</p>
        <p>Report Fraud</p>
        <p>Press Kit</p>
        <p>Contact Us</p>
      </div>
      <div class="col-md-3 mb-3">
        <p>Zomaverse</p>
        <p>Zomato</p>
        <p>Blinkit</p>
        <p>Feeding India</p>
        <p>HyperPure</p>
      </div>
      <div class="col-md-3 mb-3">
        <p>For Restaurants</p>
        <p>Partner With Us</p>
        <p>Apps for You</p>
      </div>
      <div class="col-md-3 mb-3">
        <p>Social Links</p>
        <p>
          <img src="../assets/google_play.png" width="120" height="40" alt="Google Play" />
        </p>
        <p>
          <img src="../assets/app_store.png" width="120" height="40" alt="App Store" />
        </p>
      </div>
    </div>
    <p class="text-center" style="text-decoration: underline;">
      By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy, and Content Policies. All trademarks are properties of their respective owners. © 2008-
    </p>
  </div>
</div>

  <!-- The Footer part is end here -->
</div>
</template>

  
<style scoped>
/* Styles for AboutComponent */
.custom-placeholder::placeholder {
  font-size: 18px; /* Adjust the font size as needed */
  font-weight: 600; /* Adjust the font weight as needed */
}
</style>
