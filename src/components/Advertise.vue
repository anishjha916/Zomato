<script>
import SecondComponent from "../Slider/SecondSlider.vue";
import imageUrl3 from "../assets/food.jpg";
import FooterView from "../footer/footer.vue"
export default {
    components: {
        FooterView,
        SecondComponent,
    },
    data() {
        return {
            imageUrl:
                "https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp",
            imageUrl2:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/World_map_with_points.svg/660px-World_map_with_points.svg.png?20180914124152",
            imageUrl3,
            imageWidth: 100,
            imageHeight: 50,
            imageWidth2: 120,
            imageHeight2: 60,
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
        backgroundStyle3() {
            return {
                backgroundImage: `url(${this.imageUrl3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "35rem",
            };
        },
    },
};
</script>

<template>
    <div>
        <!-- First bar start Here  -->
        <div :style="backgroundStyle" class="bg-container">
            <div class="row p-2">
                <div class="col-12 col-md-6 d-flex justify-content-center">
                    <h3 class="text-white fs-1 fw-bold">Zomato</h3>
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center gap gap-5">
                    <p class="fs-5 text-white">Zomato for work</p>
                    <p class="fs-5 text-white">Add Restaurant</p>
                    <router-link to="/contacts" class="fs-5 text-white text-decoration-none">
            Contact us
          </router-link>
                </div>
            </div>
            <div class="p-5">
                <div class="row mt-5">
                    <div class="col-12 col-md-6 px-md-5">
                        <div class="p-5 ms-md-5">
                            <h1 class="text-white">Advertise on Zomato</h1>
                            <p class="text-white">For every marketing dollar spent, </p>
                            <p class="text-white">Zomato returns over 8x the investment</p>
                            <button type="button" class="btn btn-danger">Ready To Start ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- First bar end here  -->

        <!-- Second Bar start here  -->
        <div>
            <p class="fs-2 fw-bold mt-5 text-center">12,000 restaurants already advertise on Zomato</p>
            <div>
                <img :src="imageUrl2" class="w-100 mt-3" alt="Description of the image" />
            </div>
        </div>
        <!-- Second bar end here  -->

        <!-- Third bar start here  -->
        <div>
            <h2 class="mt-5 text-center">Why advertise on Zomato?</h2>
            <div class="row mt-5">
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-6 d-flex justify-content-end">
                            <img src="../assets/searchicon.webp" class="img-fluid h-50" alt="Description of the image" />
                        </div>
                        <div class="col-6">
                            <p class="fs-5 fw-bold">Guaranteed Customer Growth</p>
                            <p style="font-size: 18px;">Increase visits to your page which will drive more footfall and
                                revenue for your restaurant.</p>
                        </div>
                    </div>

                    <!-- Second  -->
                    <div class="row mt-4">
                        <div class="col-6 d-flex justify-content-end">
                            <img src="../assets/archer.webp" class="img-fluid h-50" alt="Description of the image" />
                        </div>
                        <div class="col-6">
                            <p class="fs-5 fw-bold">Target the right Audience</p>
                            <p style="font-size: 18px;">Get showcased to customers searching for what you have to offer,
                                at the most relevant time and location.</p>
                        </div>
                    </div>

                    <!-- Third  -->
                    <div class="row mt-4">
                        <div class="col-6 d-flex justify-content-end">
                            <img src="../assets/tele.webp" class="img-fluid h-50"  alt="Description of the image" />
                        </div>
                        <div class="col-6">
                            <p class="fs-5 fw-bold">Track Performance</p>
                            <p style="font-size: 18px;">Get access to state-of-the-art analytics and follow your
                                campaign performance.</p>
                        </div>
                    </div>

                    <!-- Fourth  -->
                    <div class="row mt-4">
                        <div class="col-6 d-flex justify-content-end">
                            <img src="../assets/bars.png" class="img-fluid h-50" alt="Description of the image" />
                        </div>
                        <div class="col-6">
                            <p class="fs-5 fw-bold">Pay for Results</p>
                            <p style="font-size: 18px;">Take the guessing out of advertising and only pay for the
                                customers brought to your page.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 p-4">
                    <img src="../assets/eggimage.webp" class="img-fluid" alt="Description of the image" />
                </div>
            </div>
        </div>
        <!-- The third bar end here  -->

        <!-- Fourth bar start here  -->
        <div>
            <h2 class="mt-5 text-center">How to advertise on Zomato?</h2>
            <div class="row">
                <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                    <img src="../assets/screenbar.avif" class="img-fluid w-50 h-75 p-4" alt="Description of the image" />
                </div>
                <div class="col-12 col-md-6">
                    <div class="mt-5 pt-5">
                        <p class="fs-3 fw-bold text-md-start text-center mt-5">Drive Users to You</p>
                        <p class="fs-5 text-md-start text-center">Generate guaranteed visits to your page via dynamic search ads on our web and mobile platform.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="mt-5 pt-5 text-center text-md-center">
                        <p class="fs-3 fw-bold">Own Your Category</p>
                        <p class="fs-5">Boost your placement within relevant collections for your brand.</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex justify-content-center justify-content-md-start">
                    <img src="../assets/secondappbar.avif" class="img-fluid w-75 p-4" alt="Description of the image" />
                </div>
            </div>
        </div>
        <!-- Fourth bar end here  -->

        <!-- Fifth bar start here  -->
        <div class="bg-light p-5">
            <h2 class="text-center">Our Satisfied Customers Said</h2>
            <SecondComponent />
        </div>
        <!-- Fifth bar end here  -->

        <!-- Sixth bar start here -->
        <div :style="backgroundStyle3" class="bg-container mt-5">
            <div class="row p-5">
                <div class="col-12 col-md-6 p-5">
                    <h2 class="mt-5">Want To Know More</h2>
                    <p class="fs-5">Please leave your contact details here and we'll get back to you within 24 hours</p>
                </div>
                <div class="col-12 col-md-6">
                    <div class="p-5 rounded" :style="{ backgroundColor: '#fff', }">
                        <h4>Your Contact Detail</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="City">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Restaurant Name">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Full Name">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Email ID">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Mobile No.">
                        </div>
                        <button type="button" class="btn btn-danger w-25">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sixth bar end here  -->

        <!-- Seventh bar start here -->
        <FooterView />
        <!-- Seventh bar end here -->
    </div>
</template>

<style scoped>
.bg-container {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Custom media queries for responsiveness */
@media (max-width: 768px) {
    h1, h2, h3, h4, h5, h6 {
        font-size: 90%;
    }

    .p-5 {
        padding: 2rem !important;
    }

    .ms-md-5 {
        margin-left: 0 !important;
    }
}
</style>
