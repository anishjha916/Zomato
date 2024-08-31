<script>
import Navbar from '../../components/investor_relation_navbar.vue';

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            imageUrl:
                "https://b.zmtcdn.com/data/file_assets/621862abf874a7c2be8fdd6d062ca67a1678705718.webp",
            currentSection: 'section1'
        };
    },
    computed: {
        backgroundStyle() {
            return {
                height: "500px",
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
    <div class="container-fluid">
        <Navbar />
        <div class="container p-5">
            <div :style="backgroundStyle" class="bg-container"></div>
            <nav class="navbar navbar-light bg-light ">
                <div class="container-fluid ">
                    <a class="navbar-brand" @click="currentSection = 'section1'">All Categories</a>
                    <a class="navbar-brand" @click="currentSection = 'section2'">Community</a>
                    <a class="navbar-brand" @click="currentSection = 'section3'">Company</a>
                    <a class="navbar-brand" @click="currentSection = 'section4'">Culture</a>
                    <a class="navbar-brand" @click="currentSection = 'section5'">Technology</a>
                </div>
            </nav>

            <div v-if="currentSection === 'section1'" class="content mt-4">
                <div class="row">
                    <router-link to="/blog_details" class="col-sm-12 col-md-6 mb-4" style="text-decoration-line: none">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/reselling04.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/blog_details2" class="col-sm-12 col-md-6 mb-4" style="text-decoration-line: none">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/Frame-7.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </router-link>
                </div>

                <!-- The Second Row -->
                <div class="row mt-5">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/Blog-15.jpg" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/Blog-cover-1.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Community Section -->
            <div v-if="currentSection === 'section2'" class="content mt-4">
                <div class="row">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/06/image4.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2023/11/FINAL-COVER.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2023/09/blog-header.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2023/08/1-2.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Company Section  -->

            <div v-if="currentSection === 'section3'" class="content mt-4">
                <div class="row">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/Blog-cover-1.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/05/Q4FY24-Blog-cover_321.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/Blog-cover-1.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/05/Q4FY24-Blog-cover_321.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Culture Section  -->

            <div v-if="currentSection === 'section4'" class="content mt-4">
                <div class="row">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2023/05/Blog-Header.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2023/02/IMG_6401-2-1-1.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Technology Section  -->
            <div v-if="currentSection === 'section5'" class="content mt-4">
                <div class="row">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/Blog-15.jpg" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/07/Go-Beyond_6.png" class="card-img-top" alt="Card image"
                                style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <p class="text-muted small">Zeenah Vilcassim | August 27, 2024 | 2 min read</p>
                                <h3 class="card-title">Book Now, Sell Anytime: Experience a seamless, secure and
                                    stress-free ticket booking experience</h3>
                                <p class="card-text text-muted">Read more about our latest ‘Book Now, Sell Anytime’ feature
                                    aimed to enhance your ticket booking experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom styles for responsiveness */
.bg-container {
    margin-bottom: 30px;
}

@media (max-width: 768px) {
    .bg-container {
        height: 300px;
    }
}

.navbar-brand {
    cursor: pointer;
}

.card-title {
    font-size: 1.25rem;
}

@media (max-width: 576px) {
    .card-title {
        font-size: 1rem;
    }

    .navbar .navbar-brand {
        font-size: 0.875rem;
    }

    .bg-container {
        height: 200px;
    }
}
</style>
