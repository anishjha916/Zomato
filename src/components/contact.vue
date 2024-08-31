<script>
import FooterView from "../footer/footer.vue";
export default {
  components: {
    FooterView,
  },
  data() {
    return {
      imageUrl:
        "https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp",
      imageUrl2:
        "https://www.zomato.com/partner-with-us/static/media/StartJourney.7cfaaf0a.jpg",
      helpOptions: [
        "Order Issue",
        "Account Issue",
        "Refund Request",
        "General Inquiry",
        "Feedback",
      ],
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    },
  },
};
</script>

<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <h2 class="mb-0">Zomato</h2>
        <div class="mx-auto d-flex align-items-center search-container h-25">
          <div class="input-group">
            <select class="form-select border-0 rounded-start">
              <option selected>All</option>
              <option value="1">Restaurants</option>
              <option value="2">Dishes</option>
              <option value="3">Cuisines</option>
            </select>
            <input
              class="form-control border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
        <div class="d-flex gap gap-4">
          <button class="btn btn-outline-dark me-2" type="button">Login</button>
          <button class="btn btn-dark" type="button">Sign Up</button>
        </div>
      </div>
    </nav>
    <div :style="backgroundStyle" style="padding: 10%;">
      <h1 class="text-white" style="padding-left: 15%">
        We would love to hear from you!
      </h1>
    </div>
  </div>

  <!-- Second Bar start here  -->
  <div class="row">
    <div class="col-8" style="padding-left:10%">
      <div class="input-group input-group-lg mt-5">
        <!-- Dropdown for "How can I help you?" -->
        <select class="form-select" aria-label="Help Options">
          <option selected disabled>How can I help you?</option>
          <option
            v-for="(option, index) in helpOptions"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>

      <div class="input-group input-group-lg mt-5">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          placeholder="Full Name"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>

      <div class="input-group input-group-lg mt-5">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          placeholder="Email Address"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>

      <div class="input-group input-group-lg mt-5">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          placeholder="Mobile Number"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>

      <div class="input-group input-group-lg mt-5">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          placeholder="Type Text"
          aria-describedby="inputGroup-sizing-lg"
        />
      </div>

      <button type="button" class="btn btn-danger mt-5">Submit FeedBack</button>
    </div>
    <div class="col-4 p-5">
      <div class="w-100 border border-1 bw-2 p-3 rounded">
        <h4>Report a Safety Emergency</h4>
        <p class="fs-5">
          We are committed to the safety of everyone using Zomato
        </p>
        <p class="text-danger fw-bold">Report here</p>
      </div>
      <div class="w-100 border border-1 bw-2 p-3 mt-3 rounded">
        <h4>Report a Safety Emergency</h4>
        <p class="fs-5">
          We are committed to the safety of everyone using Zomato
        </p>
      </div>
    </div>
  </div>
  <div>
    <FooterView />
  </div>
  <!-- Second Bar End Here  -->
</template>

<style scoped>
.search-container {
  max-width: 600px;
  flex-grow: 1;
}

.input-group-text {
  background-color: transparent;
  padding-left: 5px;
  padding-right: 5px;
}

.input-group-text::before {
  content: "|";
  color: #6c757d;
}
</style>
