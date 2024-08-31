<template>
    <div class="container-fluid">
        <Navbar />
        <div class="container">
            <p class="fs-1 fw-bold mt-5">Corporate Announcements</p>
            <div class="row mt-4">
                <div class="col-4">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><img src="../assets/searchicon.webp"
                                style="width:20px;height:20px" /></span>
                        <input type="text" class="form-control" placeholder="Search" aria-label="Search"
                            aria-describedby="basic-addon1">
                    </div>
                </div>
                <div class="col-8">

                    <div class="input-group mb-3 gap gap-4">

                        <select class="form-select" aria-label="Help Options">
                            <option selected disabled>All</option>
                            <option v-for="(option, index) in helpOptions" :key="index" :value="option">
                                {{ option }}
                            </option>
                        </select>
                        <select class="form-select rounded" aria-label="Help Options">
                            <option selected disabled>Filling Period : All</option>
                            <option v-for="(option, index) in helpOptions" :key="index" :value="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>


                </div>
            </div>

            <hr class="mt-4" style="height:10px">
            <div>
                <p class="fs-4">21 August, 2024</p>
                <p class="fs-1">Zomato - Proposed acquisition of Paytm's entertainment ticketing business</p>
                <p class="text-danger fs-5">Read More ></p>
                <hr class="mt-4" style="height:10px">
            </div>
            <div>
                <p class="fs-4">21 August, 2024</p>
                <p class="fs-1">Zomato - Proposed acquisition of Paytm's entertainment ticketing business</p>
                <p class="text-danger fs-5">Read More ></p>
                <hr class="mt-4" style="height:10px">
            </div>
            <div>
                <p class="fs-4">21 August, 2024</p>
                <p class="fs-1">Zomato - Proposed acquisition of Paytm's entertainment ticketing business</p>
                <p class="text-danger fs-5">Read More ></p>
                <hr class="mt-4" style="height:10px">
            </div>
            <div>
                <p class="fs-4">21 August, 2024</p>
                <p class="fs-1">Zomato - Proposed acquisition of Paytm's entertainment ticketing business</p>
                <p class="text-danger fs-5">Read More ></p>
                <hr class="mt-4" style="height:10px">
            </div>
            <div>
                <p class="fs-4">21 August, 2024</p>
                <p class="fs-1">Zomato - Proposed acquisition of Paytm's entertainment ticketing business</p>
                <p class="text-danger fs-5">Read More ></p>
                <hr class="mt-4" style="height:10px">
            </div>
            <div>
                <p class="fs-4">21 August, 2024</p>
                <p class="fs-1">Zomato - Proposed acquisition of Paytm's entertainment ticketing business</p>
                <p class="text-danger fs-5">Read More ></p>
                <hr class="mt-4" style="height:10px">
            </div>

        </div>
        <Footer />
    </div>
</template>
<script>
import Navbar from "@/components/investor_relation_navbar.vue";
import Footer from "@/footer/footer.vue";
export default {
    components: {
        Navbar,
        Footer
    },
    data() {
        return {

            helpOptions: [
                "Order Issue",
                "Account Issue",
                "Refund Request",
                "General Inquiry",
                "Feedback",
            ],
        };
    },

};
</script>