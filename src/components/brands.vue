<script>
import FooterList from '../footer/footer.vue';
import SimpleBar from 'simplebar-vue';

export default {
  components: {
    FooterList,
    SimpleBar
  },
  data() {
    return {
      currentSection: 'section1'
    };
  }
};
</script>
<template>
  <div class="container">
    <div class="mt-2">
      <div class="d-flex justify-content-start">
        <div class="p-2 ms-5">Home /</div>
        <div class="p-2">India /</div>
        <div class="p-2">Indore /</div>
        <div class="p-2">New Plasia Resturant</div>
      </div>
    </div>

    <div class="row">
      <div class="col-8">
        <img src="../assets/food.jpg" class="img-fluid" alt="Dining Out" />
      </div>
      <div class="col-4">
        <div class="row">
          <div>
            <img src="../assets/food.jpg" class="img-fluid" alt="Dining Out" />
          </div>
          <div class="mt-4">
            <img src="../assets/food.jpg" class="img-fluid" alt="Dining Out" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h2>Apna Sweets</h2>
        <p>Desserts, Ice Cream, Juices, Shake, Beverages</p>
        <p>Vijay Nagar, Indore</p>
        <p>Open now 8am – 10:30pm (Today)</p>
      </div>
      <div class="col-6">
        <div class="d-flex flex-row-reverse bd-highlight">
          <div class="p-2 bd-highlight">
            50.8k
            <p>Delivery rating</p>
          </div>
          <div class="p-2 bd-highlight">
            <button type="button" class="btn btn-success">42.2</button>
          </div>
          <div class="p-2 bd-highlight">
            187
            <p>dining rating</p>
          </div>
          <div class="p-2 bd-highlight">
            <button type="button" class="btn btn-success">3.7</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button> -->
    <div class="d-flex mt-2 gap-2">

      <button type="button" class="btn btn-light border border-2">
        Direction
      </button>
      <button type="button" class="btn btn-light border border-2">
        Book Mark
      </button>
      <button type="button" class="btn btn-light border border-2">
        Share
      </button>




    </div>
    <nav class="navbar navbar-light bg-light mt-4">
      <div class="container-fluid">
        <a class="navbar-brand" @click="currentSection = 'section1'">Order Online</a>
        <a class="navbar-brand" @click="currentSection = 'section2'">Overview</a>
        <a class="navbar-brand" @click="currentSection = 'section3'">Reviews</a>
        <a class="navbar-brand" @click="currentSection = 'section4'">photos</a>
        <a class="navbar-brand" @click="currentSection = 'section5'">Menu</a>
      </div>

    </nav>
    <div class="row mb-4">
      <div v-if="currentSection === 'section1'" class="content">
        <div class="row">

          <div class="col-4">
            <SimpleBar class="scroll-container">
              <div class="content">
                <!-- Your content here -->

                <p class="fs-5">Chaat Chapati (2)</p>
                <p class="fs-5">Meal (5)</p>
                <p class="fs-5">Soups (7)</p>
                <p class="fs-5">Starters (9)</p>
                <p class="fs-5">Main Course (39)</p>
                <p class="fs-5">Rice and Biryani (7)</p>
                <p class="fs-5">South Indian (16)</p>
                <p class="fs-5">Chinese Combos (2)</p>
                <p class="fs-5">Platters (2)</p>
                <p class="fs-5">Fried Rice and Noodles (7)</p>
              </div>
            </SimpleBar>
          </div>
          <div class="col-8">
            <SimpleBar class="scroll-container">
              <div class="content" id="section1">

                <h4>Fried Rice and Noodles</h4>
                <p>FRIED RICE</p>
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div class="bd-highlight">
                    <img src="../assets/food.jpg" class="image img-fluid rounded" alt="Dining Out" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <h5>Peanut Chaat</h5>
                    <p>₹108.57</p>
                    <p>Peanut chaat is a simple mixture of unsalted.</p>
                  </div>
                </div>
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div class="bd-highlight">
                    <img src="../assets/food.jpg" class="image img-fluid rounded" alt="Dining Out" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <h5>Peanut Chaat</h5>
                    <p>₹108.57</p>
                    <p>Peanut chaat is a simple mixture of unsalted.</p>
                  </div>
                </div>
                <hr>
              </div>
              <div class="content" id="section2">
                <h4>Fried Rice and Noodles</h4>
                <p>FRIED RICE</p>
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div class="bd-highlight">
                    <img src="../assets/food.jpg" class="image img-fluid rounded" alt="Dining Out" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <h5>Peanut Chaat</h5>
                    <p>₹108.57</p>
                    <p>Peanut chaat is a simple mixture of unsalted.</p>
                  </div>
                </div>
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div class="bd-highlight">
                    <img src="../assets/food.jpg" class="image img-fluid rounded" alt="Dining Out" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <h5>Peanut Chaat</h5>
                    <p>₹108.57</p>
                    <p>Peanut chaat is a simple mixture of unsalted.</p>
                  </div>
                </div>
                <hr>
              </div>
              <div class="content">
                <h4>Fried Rice and Noodles</h4>
                <p>FRIED RICE</p>
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div class="bd-highlight">
                    <img src="../assets/food.jpg" class="image img-fluid rounded" alt="Dining Out" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <h5>Peanut Chaat</h5>
                    <p>₹108.57</p>
                    <p>Peanut chaat is a simple mixture of unsalted.</p>
                  </div>
                </div>
                <div class="d-flex flex-row bd-highlight mb-3">
                  <div class="bd-highlight">
                    <img src="../assets/food.jpg" class="image img-fluid rounded" alt="Dining Out" />
                  </div>
                  <div class="p-2 bd-highlight">
                    <h5>Peanut Chaat</h5>
                    <p>₹108.57</p>
                    <p>Peanut chaat is a simple mixture of unsalted.</p>
                  </div>
                </div>
                <hr>
              </div>


            </SimpleBar>
          </div>
        </div>
      </div>
      <div v-if="currentSection === 'section2'" class="content">
        <div class="row">

          <div class="col-8">

            <h3>About These Place</h3>
            <div class="d-flex mt-4 justify-content-between">

              <button type="button" class="btn btn-light border border-2">
                <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1" style="width:30px;height:30px">
                <span>well Senatized Reaction</span>
              </button>
              <button type="button" class="btn btn-light border border-2">
                <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1" style="width:30px;height:30px">
                <span>well Senatized Reaction</span>
              </button>
              <button type="button" class="btn btn-light border border-2">
                <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1" style="width:30px;height:30px">
                <span>well Senatized Reaction</span>
              </button>


            </div>
            <div class="mt-4">
              <h4>Apna Sweet Menu</h4>
              <div class="row">

                <div class="col-12 col-md-4 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Beverages</p>
                  <p>4 pages</p>
                </div>
              </div>
            </div>
            <div>
              <h4>Cuisenes</h4>
              <div class="d-flex mt-4 gap-2">

                <button type="button" class="btn btn-light border border-2">
                  Filters
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Offers
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Rating
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Pet Friendly
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Outdoor Seating
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Alcohol
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Open Now
                </button>
              </div>
            </div>

            <div class="mt-4">
              <p class="fs-4">Popular Dish</p>
              <p class="fs-5">Paneer 65, Rasgulla, Lassi, Thali</p>
            </div>

            <div class="mt-4">
              <p class="fs-4">People Say This Place Is Known For</p>
              <p class="fs-5">Loved it, Delicious, Breakfast, Cutlery, Fast Delivery, Tasty
              </p>

            </div>

            <div class="mt-4">
              <p class="fs-4">Popular Dish</p>
              <p class="fs-5">₹350 for two people (approx.) </p>
              <p class="fs-5">₹350 for two people (approx.) </p>
              <p class="fs-5">₹350 for two people (approx.) </p>
            </div>

            <div class="mt-4">
              <div class="row">

                <div class="col-6">
                  <div class="mt-2"> <img src="../assets/check.png" class="img-fluid" alt="Food Image 1"
                      style="width:20px;height:20px">
                    <span class="ms-2">well Senatized Reaction</span>
                  </div>

                  <div class="mt-2"> <img src="../assets/check.png" class="img-fluid" alt="Food Image 1"
                      style="width:20px;height:20px">
                    <span class="ms-2">well Senatized Reaction</span>
                  </div>
                  <div class="mt-2"> <img src="../assets/check.png" class="img-fluid" alt="Food Image 1"
                      style="width:20px;height:20px">
                    <span class="ms-2">well Senatized Reaction</span>
                  </div>
                </div>
                <div class="col-6 ">
                  <div class="mt-2"> <img src="../assets/check.png" class="img-fluid" alt="Food Image 1"
                      style="width:20px;height:20px">
                    <span class="ms-2">well Senatized Reaction</span>
                  </div>

                  <div class="mt-2"> <img src="../assets/check.png" class="img-fluid" alt="Food Image 1"
                      style="width:20px;height:20px">
                    <span class="ms-2">well Senatized Reaction</span>
                  </div>
                  <div class="mt-2"> <img src="../assets/check.png" class="img-fluid" alt="Food Image 1"
                      style="width:20px;height:20px">
                    <span class="ms-2">well Senatized Reaction</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4">
              <h4>Our Sponsors</h4>
              <div class="row">

                <div class="col-12 col-md-6 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Drix Exchange</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes Food</p>

                </div>
                <div class="col-12 col-md-6 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Drix Exchange</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes Food</p>

                </div>
              </div>
            </div>

            <div class="mt-4">
              <h4>Our Sponsors</h4>
              <div class="row">

                <div class="col-12 col-md-4 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Sharma Namkeen</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes</p>
                  <p>Vijay nagar</p>

                </div>
                <div class="col-12 col-md-4 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Sharma Namkeen</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes</p>
                  <p>Vijay nagar</p>

                </div>
                <div class="col-12 col-md-4 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Sharma Namkeen</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes</p>
                  <p>Vijay nagar</p>

                </div>
              </div>
            </div>
            <hr>
            <div class="mt-4">
              <h4>Review Highlights</h4>
              <div class="d-flex mt-4 gap-2">

                <button type="button" class="btn btn-light border border-2">
                  Panner 65
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Rasgulla
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Chowmin
                </button>
                <button type="button" class="btn btn-light border border-2">
                  pasta
                </button>
                <button type="button" class="btn btn-light border border-2">
                  checken 65
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Alcohol
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Open Now
                </button>

              </div>
              <div class="d-flex mt-4 gap-2">

                <button type="button" class="btn btn-light border border-2">
                  Panner 65
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Rasgulla
                </button>
                <button type="button" class="btn btn-light border border-2">
                  Chowmin
                </button>
                <button type="button" class="btn btn-light border border-2">
                  pasta
                </button>


              </div>
            </div>
            <hr>
            <div>
              <h4>Apna Sweet Rewiew</h4>
              <div class="row">
                <div class="col-10">
                  <div class="mt-4"><img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1"
                      style="width:50px;height:40px"> <span class="ms-3">The New Cafe Indore</span></div>
                  <div class="mt-4"><button class="btn btn-success" type="button">4.6</button> <span>Delivery</span>
                    <span>11
                      Hours Ago</span>
                  </div>
                  <p>test and very child packaging quality is very poor poha test is very poor and packing is leaking
                  </p>
                  <p>0 Votes for helpful, 0 Comments</p>
                  <div class="mt-2"><img src="../assets/like.png" class="img-fluid" alt="Food Image 1"
                      style="width:30px;height:30px">helpful <span class="ms-4"> <img src="../assets/comment.png"
                        class="img-fluid" alt="Food Image 1" style="width:30px;height:30px">Comment</span> <span
                      class="ms-4">
                      <img src="../assets/share.png" class="img-fluid" alt="Food Image 1"
                        style="width:30px;height:30px">Share</span> </div>
                </div>
                <div class="col-2">
                  <div class="d-flex justify-content-end"> <button type="button"
                      class="btn btn-outline-danger">Follow</button></div>

                </div>
              </div>
            </div>
            <hr>
            <div class="mt-4">
              <h4>Our Sponsors</h4>
              <div class="row">

                <div class="col-12 col-md-6 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Drix Exchange</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes Food</p>

                </div>
                <div class="col-12 col-md-6 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Drix Exchange</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes Food</p>

                </div>
              </div>
            </div>
            <div>
              <div class="row">

                <div class="col-12 col-md-6 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Drix Exchange</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes Food</p>

                </div>
                <div class="col-12 col-md-6 mb-3">
                  <div class="card  text-white mt-4">
                    <img src="../assets/food.jpg" class="card-img" alt="..." />
                  </div>
                  <p class="fs-5">Drix Exchange</p>
                  <button class="btn btn-success btn-sm" type="button">4.6 </button><span class="ms-2">Dinning</span> |
                  <button class="btn btn-success ms-2 btn-sm" type="button">4.6 </button><span
                    class="ms-2">Delivery</span>
                  <p>Best Food, North Indian, Chienes Food</p>

                </div>
              </div>
            </div>
            <hr>
            <div>
              <h5>Help Us Make Zomato Better</h5>
              <p>Report an error in this listing</p>
              <p>Help us make Zomato more updated and relevant for everyone</p>
              <button type="button" class="btn btn-outline-danger btn-sm">Report Now</button>
            </div>
          </div>
          <div class="col-4"></div>
        </div>
        <hr>
      </div>
      <div v-if="currentSection === 'section3'" class="content">
        <h4>Apna Sweet Rewiew</h4>
        <div class="row">
          <div class="col-10">
            <div class="mt-4"><img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1"
                style="width:50px;height:40px"> <span class="ms-3">The New Cafe Indore</span></div>
            <div class="mt-4"><button class="btn btn-success" type="button">4.6</button> <span>Delivery</span> <span>11
                Hours Ago</span> </div>
            <p>test and very child packaging quality is very poor poha test is very poor and packing is leaking</p>
            <p>0 Votes for helpful, 0 Comments</p>
            <div class="mt-2"><img src="../assets/like.png" class="img-fluid" alt="Food Image 1"
                style="width:50px;height:40px">helpful <span class="ms-4"> <img src="../assets/comment.png"
                  class="img-fluid" alt="Food Image 1" style="width:50px;height:40px">Comment</span> <span class="ms-4">
                <img src="../assets/share.png" class="img-fluid" alt="Food Image 1"
                  style="width:50px;height:40px">Share</span> </div>
          </div>
          <div class="col-2">
            <div class="d-flex justify-content-end"> <button type="button"
                class="btn btn-outline-danger">Follow</button></div>

          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-10">
            <div class="mt-4"><img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1"
                style="width:50px;height:40px"> <span class="ms-3">The New Cafe Indore</span></div>
            <div class="mt-4"><button class="btn btn-success" type="button">4.6</button> <span>Delivery</span> <span>11
                Hours Ago</span> </div>
            <p>test and very child packaging quality is very poor poha test is very poor and packing is leaking</p>
            <p>0 Votes for helpful, 0 Comments</p>
            <div class="mt-2"><img src="../assets/like.png" class="img-fluid" alt="Food Image 1"
                style="width:50px;height:40px">helpful <span class="ms-4"> <img src="../assets/comment.png"
                  class="img-fluid" alt="Food Image 1" style="width:50px;height:40px">Comment</span> <span class="ms-4">
                <img src="../assets/share.png" class="img-fluid" alt="Food Image 1"
                  style="width:50px;height:40px">Share</span> </div>
          </div>
          <div class="col-2">
            <div class="d-flex justify-content-end"> <button type="button"
                class="btn btn-outline-danger">Follow</button></div>

          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-10">
            <div class="mt-4"><img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1"
                style="width:50px;height:40px"> <span class="ms-3">The New Cafe Indore</span></div>
            <div class="mt-4"><button class="btn btn-success" type="button">4.6</button> <span>Delivery</span> <span>11
                Hours Ago</span> </div>
            <p>test and very child packaging quality is very poor poha test is very poor and packing is leaking</p>
            <p>0 Votes for helpful, 0 Comments</p>
            <div class="mt-2"><img src="../assets/like.png" class="img-fluid" alt="Food Image 1"
                style="width:50px;height:40px">helpful <span class="ms-4"> <img src="../assets/comment.png"
                  class="img-fluid" alt="Food Image 1" style="width:50px;height:40px">Comment</span> <span class="ms-4">
                <img src="../assets/share.png" class="img-fluid" alt="Food Image 1"
                  style="width:50px;height:40px">Share</span> </div>
          </div>
          <div class="col-2">
            <div class="d-flex justify-content-end"> <button type="button"
                class="btn btn-outline-danger">Follow</button></div>

          </div>
        </div>
        <hr>
      </div>
      <div v-if="currentSection === 'section4'" class="content">
        <div class="row g-3">
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 2">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 3">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 4">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 5">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 5">
          </div>


        </div>
        <div class="row g-3 mt-2">
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 2">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 3">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 4">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 5">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 5">
          </div>


        </div>
        <div class="row g-3 mt-2">
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 1">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 2">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 3">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 4">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 5">
          </div>
          <div class="col-6 col-md-4 col-lg-2">
            <img src="../assets/food.jpg" class="img-fluid" alt="Food Image 5">
          </div>


        </div>
      </div>
      <div v-if="currentSection === 'section5'" class="content">
        <h4>Apna Sweet Menu</h4>
        <div class="row">

          <div class="col-12 col-md-4 mb-3">
            <div class="card  text-white mt-4">
              <img src="../assets/food.jpg" class="card-img" alt="..." />
            </div>
            <p class="fs-5">Beverages</p>
            <p>4 pages</p>
          </div>
        </div>
      </div>

    </div>
    <div class=" mt-2">
      <div class="mt-2">
        <p class="fs-5">RELATED TO APNA SWEETS, VIJAY NAGAR</p>
        <p :style="{ fontSize: '18px' }">Restaurants in Indore, Indore Restaurants, Vijay Nagar restaurants, Best Vijay
          Nagar restaurants, North Indore restaurants, Sweet Shop in Indore, Sweet Shop near me, Sweet Shop in Vijay
          Nagar, Quick Bites in Indore, Quick Bites near me, Quick Bites in Vijay Nagar, in Indore, near me, in Vijay
          Nagar, Apna Sweets Menu, Order food online in Vijay Nagar, Order food online in Indore</p>
      </div>
      <div class="mt-2">
        <p class="fs-5">RESTAURANTS AROUND VIJAY NAGAR</p>
        <p :style="{ fontSize: '18px' }">Press Complex restaurants, HIG-LIG restaurants, Nipania restaurants, Old
          Palasia restaurants</p>
      </div>

      <div class="mt-2">
        <p class="fs-5">FREQUENT SEARCHES LEADING TO THIS PAGE</p>
        <p :style="{ fontSize: '18px' }">apna sweets menu, apna sweets vijay nagar menu, apna sweets indore, apna
          sweets indore menu, apna sweets restaurant</p>
      </div>

      <div class="mt-2">
        <p class="fs-5">TOP STORES</p>
        <p :style="{ fontSize: '18px' }">Old Palasia, Sapna Sangeeta, Malharganj</p>
      </div>
    </div>
  </div>
  <!-- The Footer part start here -->
  <FooterList />
  <!-- The Footer part end here -->

</template>
<style scoped>
.scroll-container {
  max-height: 400px;
  /* Set a max height for the scroll area */
  overflow-y: auto;
}

.content {
  padding: 10px;
}

.image {
  width: 150px;
  height: 100px;
}

.d-flex {
  display: flex;
}
</style>
