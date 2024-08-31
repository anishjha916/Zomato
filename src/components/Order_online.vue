<script>
export default {
  data() {
    return {
        oos: [],
    };
  },
  mounted() {
    this.fetchorderonline();
  },
  methods: {
    async fetchorderonline() {
      try {
        const response = await fetch('http://localhost:3000/oos');
        if (!response.ok) {
          throw new Error('Failed to fetch oo');
        }
        this.oos = await response.json();
      } catch (error) {
        console.error('Error fetching orderonline collection:', error);
      }
    },

 
  },
};
</script>

<template>
  <div>
   
    <nav class="navbar navbar-light bg-light" style="padding-left: 10%;padding-right: 10%">
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
<div class="container-fluid">
  <div class="mt-2">
    <div class="d-flex justify-content-start ms-5">
     <p class="mt-2" style="padding-left: 5rem"> Home / India / Indore / Vijay Nagar Restaurants</p>
    </div>
  </div>

  <div class="mt-4">
    <div class="d-flex justify-content-start ms-5">
      <div class="p-2 ms-5">
        <router-link
          to="/dining_out"
          class="d-block text-decoration-none text-dark"
        >
          <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp" class="img-fluid" width="40px" alt="Dining Out" />
          <span class="fs-5 mt-2">  Dining Out</span> 
        </router-link>
      </div>
      <div class="p-2 ms-3">
        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp" width="40px" class="img-fluid" alt="Delivery" />
      <span class="fs-5"> Delivery</span> 
      </div>
      <div class="p-2 ms-3">
        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" width="40px" class="img-fluid" alt="Nightlife" />
        <span class="fs-5">  Nightlife</span> 
      </div>
    </div>
  </div>

  <div class="container">
    <div class="d-flex mt-4 gap-4">
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

  <!-- The collection starts here -->
  <div class="bg-light">
    <div class="container mt-5" v-if="oos.length">
      <h2 class="mt-5">Inspiration for your first order</h2>
      <div class="row mt-5" >
        <div class="col-2" v-for="oo in oos" :key="oo._id">
          <img
            :src="oo.photo"
            width="100px"
            height="100px"
            class="img-fluid"
            alt="image"
          />
          <p class="ms-4 mt-1">{{ oo.header }}</p>
        </div>
    
      
      </div>
    </div>
  </div>
  <!-- The collection ends here -->

  <!-- The get up off starts -->
  <div class="container">
    <h2 class="mt-5">Top Brands for you</h2>
    <div class="row mt-5">
      <div class="col-2">
       <router-link to="/brands" class="card-link" tag="div">
        <img
          src="../assets/domino_pizza.png"
          width="100rem"
          class="img-fluid"
          height="100rem"
          alt="Domino Pizza"
        />
        <p class="ms-4 mt-1">Mc Donald</p>
        </router-link>
      </div>
      <div class="col-2">
        <img
          src="../assets/pizza.png"
          width="100rem"
          class="img-fluid"
          height="100rem"
          alt="Pizza"
        />
        <p class="ms-4 mt-1">Pizza</p>
      </div>
      <div class="col-2">
        <img
          src="../assets/pizza.png"
          width="100rem"
          class="img-fluid"
          height="100rem"
          alt="Pizza"
        />
        <p class="ms-4 mt-1">Pizza</p>
      </div>
      <div class="col-2">
        <img
          src="../assets/pizza.png"
          width="100rem"
          class="img-fluid"
          height="100rem"
          alt="Pizza"
        />
        <p class="ms-4 mt-1">Pizza</p>
      </div>
      <div class="col-2">
        <img
          src="../assets/pizza.png"
          width="100rem"
          class="img-fluid"
          height="100rem"
          alt="Pizza"
        />
        <p class="ms-4 mt-1">Pizza</p>
      </div>
      <div class="col-2">
        <img
          src="../assets/pizza.png"
          width="100rem"
          class="img-fluid"
          height="100rem"
          alt="Pizza"
        />
        <p class="ms-4 mt-1">Pizza</p>
      </div>
    </div>

    <h4 class="mt-5">Order food online in New Palasia</h4>

    <!-- The menu
bar -->

    <div class="container mt-5">
      <div class="row">
        <!-- The First Row -->

        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/order_online.avif"
              class="card-img-top img-fluid"
              
              alt="Order Online"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Cozmo Kitchen</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Second Row -->
        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/dining.avif"
              class="card-img-top img-fluid"
              alt="Dining"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Bon Bon Cafe</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Third Row -->
        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/nightlife.webp"
              class="card-img-top img-fluid"
              alt="Nightlife"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Cozmo Kitchen</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <!-- The First Row -->

        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/order_online.avif"
              class="card-img-top"
              alt="Order Online"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Cozmo Kitchen</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Second Row -->
        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/dining.avif"
              class="card-img-top img-fluid"
              alt="Dining"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Bon Bon Cafe</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Third Row -->
        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/nightlife.webp"
              class="card-img-top img-fluid"
              alt="Nightlife"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Cozmo Kitchen</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mt-5">
      <div class="row">
        <!-- The First Row -->

        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/order_online.avif"
              class="card-img-top img-fluid"
              alt="Order Online"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Cozmo Kitchen</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Second Row -->
        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/dining.avif"
              class="card-img-top img-fluid"
              alt="Dining"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Bon Bon Cafe</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Third Row -->
        <div class="col-12 col-md-4 mb-3">
          <div class="card" style="width: 20rem">
            <img
              src="../assets/nightlife.webp"
              class="card-img-top img-fluid"
              alt="Nightlife"
            />
            <div class="card-body">
              <div class="row">
                <div class="col-6">
                  <h6>Cozmo Kitchen</h6>
                  <div>North India</div>
                  <div>Bypass Road</div>
                </div>
                <div class="col-6">
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-success" type="button">4.6</button>
                  </div>
                  <div class="text-sm-end">₹1000 for you</div>
                  <div class="text-sm-end">Bypass Road</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
  <!-- The menu bar ends -->
</template>
<style scoped>
.card-link {
  text-decoration: none; /* Remove any underline from the link */
  color: inherit; /* Inherit text color */
}
</style>

