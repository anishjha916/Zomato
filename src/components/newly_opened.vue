<script>
import FooterList from '../footer/footer.vue';
export default {
    components: {
        FooterList,
    },
    data() {

        return {
            //    items: [],
            //   menus: [],
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
    //   mounted() {
    //     this.fetchitem();
    //     this.fetchmenu();
    //   },
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
        // async fetchitem() {
        //   try {
        //     const response = await fetch('http://localhost:3000/items');
        //     if (!response.ok) {
        //       throw new Error('Failed to fetch tasks');
        //     }
        //     this.items = await response.json();
        //   } catch (error) {
        //     console.error('Error fetching tasks:', error);
        //   }
        // },
        // async fetchmenu() {
        //   try {
        //     const response = await fetch('http://localhost:3000/menus');
        //     if (!response.ok) {
        //       throw new Error('Failed to fetch menu');
        //     }
        //     this.menus = await response.json();
        //   } catch (error) {
        //     console.error('Error fetching menus:', error);
        //   }
        // },


    },

};
</script>
<template>
    <div class="container">
        <div class="mt-2">
    <div class="d-flex flex-wrap justify-content-start ms-2">
        <div class="p-2">Home /</div>
        <div class="p-2">India /</div>
        <div class="p-2">Indore /</div>
        <div class="p-2">New Plasia Restaurant</div>
    </div>
</div>
<div class="mt-1">
    <div class="container mt-5">
    <div class="card text-white">
        <img src="../assets/start_journey.jpg" class="card-img" alt="..." />
        <div class="card-img-overlay p-3 p-md-5">
            <h2 class="card-title">Start your journey with Zomato</h2>
            <p class="card-text fs-5 mt-4">
                Create your restaurant page and register for online ordering
            </p>
            <button type="button" class="btn btn-primary mt-3">
                Start Now
            </button>
        </div>
    </div>
</div>

</div>


        <!-- The get up off start -->
        <div class="container mt-5">
    <div class="row">
        <!-- First Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Cozmo kitchen</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Second Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/dining.avif" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Bon Bon cafe</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Third Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/nightlife.webp" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Cozmo kitchen</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container mt-5">
    <div class="row">
        <!-- First Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Cozmo kitchen</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Second Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/dining.avif" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Bon Bon cafe</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Third Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/nightlife.webp" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Cozmo kitchen</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="container mt-5">
    <div class="row">
        <!-- First Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/order_online.avif" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Cozmo kitchen</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Second Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/dining.avif" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Bon Bon cafe</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Third Card -->
        <div class="col-12 col-md-4 mb-3">
            <div class="card" style="width: 100%">
                <img src="../assets/nightlife.webp" class="card-img-top" alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-6">
                            <h6>Cozmo kitchen</h6>
                            <div>North India</div>
                            <div>By pass road</div>
                        </div>
                        <div class="col-6 text-end">
                            <button class="btn btn-success" type="button">4.6</button>
                            <div>1000&#x20B9 for you</div>
                            <div>By pass road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



        <!-- get up off end -->

        <!-- The Collection Part start here -->
        <div class="container mt-5">
            <div class="row p-2">
                <div class="col-12 col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="../assets/food.jpg" class="card-img" alt="collection-img" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="../assets/food.jpg" class="card-img" alt="..." />
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="../assets/food.jpg" class="card-img" alt="..." />
                    </div>
                </div>
            </div>
            <div class="row p-2">
                <div class="col-12 col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="../assets/food.jpg" class="card-img" alt="collection-img" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="../assets/food.jpg" class="card-img" alt="..." />
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="../assets/food.jpg" class="card-img" alt="..." />
                    </div>
                </div>
            </div>
            <div class="row p-2">
                <div class="col-12 col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="../assets/food.jpg" class="card-img" alt="collection-img" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">
                                This is a wider card with supporting text below as a natural lead-in to additional
                                content. This content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 mb-3">
                    <div class="card bg-dark text-white">
                        <img src="../assets/food.jpg" class="card-img" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        <!-- The collection part end here -->

        <!-- explore near me start here  -->
        <div class="mt-5 bg-light">
            <div class="container p-5">
                <h1 class="mt-5">Explore options near me</h1>

                <div class="row mt-5 border border-2 rounded-3">
                    <div @click="toggleText">
                        <p v-if="isVisible" class="mt-3">Popular restaurant types near me</p>
                        <p v-else>
                            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe
                            food near me, Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream
                            food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta
                            food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near
                            me, South Indian food near me, Street food near me, Tea food near me
                        </p>
                    </div>
                </div>

                <div class="row mt-5 border border-2 rounded-3">
                    <div @click="toggleTextsecond">
                        <p v-if="isVisible2" class="mt-3">Popular restaurant types near me</p>
                        <p v-else>
                            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe
                            food near me, Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream
                            food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta
                            food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near
                            me, South Indian food near me, Street food near me, Tea food near me
                        </p>
                    </div>
                </div>

                <div class="row mt-5 border border-2 rounded-3">
                    <div @click="toggleTextthird">
                        <p v-if="isVisible3" class="mt-3">Popular restaurant types near me</p>
                        <p v-else>
                            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe
                            food near me, Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream
                            food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta
                            food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near
                            me, South Indian food near me, Street food near me, Tea food near me
                        </p>
                    </div>
                </div>

                <div class="row mt-5 border border-2 rounded-3">
                    <div @click="toggleTextfour">
                        <p v-if="isVisible4" class="mt-3">Popular restaurant types near me</p>
                        <p v-else>
                            Bakery food near me, Beverages food near me, Biryani food near me, Burger food near me, Cafe
                            food near me, Chinese food near me, Coffee food near me, Desserts food near me, Ice Cream
                            food near me, Momos food near me, Mughlai food near me, North Indian food near me, Pasta
                            food near me, Pizza food near me, Rolls food near me, Sandwich food near me, Shake food near
                            me, South Indian food near me, Street food near me, Tea food near me
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- explore newr me end here  -->

        <!-- The Footer part start here -->
        <FooterList />
        <!-- The Footer part end here -->
    </div>
</template>