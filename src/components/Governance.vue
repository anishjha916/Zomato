<script>
import Navbar from '../components/investor_relation_navbar.vue';
import Footer from '@/footer/footer.vue';

export default {
    components: {
        Navbar,
        Footer
    },
    data() {
        return {
            currentSection: 'section1',
            chunkedItems: [
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/e00c9ffc045f944fa8213a59d77405f51626098024.png', caption: 'Kaushik Dutta' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/ba60624fc166ef68bf8a7a11965a43741625837484.png', caption: 'Deepinder Goyal' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/38582dd607ea128ae26cd7de5d2e75f21626065392.png', caption: 'Sanjeev Bikhchandani' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/a52f2d3b63a44288dc933ddb2ead75b91626327278.png', caption: 'Sutapa Banerjee' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/093408d3c8c1a915bdd0b6c50443d0981626098545.png', caption: 'Namita Gupta' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/69832fb933c9779db0673da94f24cade1626065565.png', caption: 'Gunjan Tilak Raj Soni' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/7e0e0fb28570cb7a86b8ef7a4810f5d61625837432.png', caption: 'Aparna Popat Ved' },
                // Add more items as needed
            ],

            chunkedItems2: [
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/19ea8d1ea1620040f34f109c44f6c8b71684236627.png', caption: 'Anti Bribery and Anti Corruption Policy' },
                { imgSrc: 'https://b.zmtcdn.com/investor-relations/0ba3ca10894d73a50a6ffd84bd2a00ca_1684915788.jpeg', caption: 'Business Partner Code of Conduct' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/2d281138c1f244623cd67888852c7e0a1684236999.png', caption: 'Code of Conduct for Board of Directors and Senior Management Personnel' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/a096132025d6ee5f4339bbd9a4ca9e401684238733.png', caption: 'Code of Conduct for Employees' },
                { imgSrc: 'https://b.zmtcdn.com/investor-relations/74f33ced0e97e0422516fbf4c2939e5f_1716914987.png', caption: 'Code of Practices and Procedures for Disclosure of Unpublished Price Sensitive Information' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/e8f459c162eb46aaad2f6fe59451a70a1684236719.png', caption: 'Conflict of Interest Policy' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/0dd0e74b0fdd0a45000af0e7093c304f1684237038.png', caption: 'Dividend Distribution Policy' },
                // Add more items as needed
            ]

        };
    },
};
</script>

<template>
    <div class="container-fluid">
        <Navbar />
        <div class="container p-5">
            <h1 class="" style="font-size: 5rem">Governance</h1>

            <nav class="navbar navbar-light bg-light mt-5">
                <div class="container-fluid ">
                    <a class="navbar-brand" @click="currentSection = 'section1'">Board</a>
                    <a class="navbar-brand" @click="currentSection = 'section2'">Committee Composition</a>
                    <a class="navbar-brand" @click="currentSection = 'section3'">Policies</a>
                    <a class="navbar-brand" @click="currentSection = 'section4'">Shareholding Pattern</a>

                </div>
            </nav>

            <div v-if="currentSection === 'section1'" class="content mt-4">
                <div class="mt-5">
                    <div class="row">
                        <div v-for="(chunk, index) in chunkedItems" :key="index" class="col-12 col-md-3 mb-3 px-2">
                            <div class="card bg-dark text-white"
                                style="height: 300px; border: 2px solid #ffffff; border-radius: 1rem;">
                                <img :src="chunk.imgSrc" class="card-img h-100" alt="collection-img"
                                    style="object-fit: cover;" />
                            </div>
                            <p class="text-center mt-3 fs-5 fw-8">{{ chunk.caption }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Community Section -->
            <div v-if="currentSection === 'section2'" class="content mt-4">
                <div class="mt-5">
                    <h4>Audit Committee</h4>
                    <hr style="height:10px">
                    <div class="row">
                        <div class="col-3">Sutapa Banerjee
                            <p class="">Chairman</p>
                        </div>
                        <div class="col-3">Namita Gupta</div>
                        <div class="col-3">
                            Kaushik Dutta</div>
                        <div class="col-3">
                            Sanjeev Bikhchandani
                        </div>
                    </div>
                </div>

                <div class="mt-5">
                    <h4>Audit Committee</h4>
                    <hr style="height:10px">
                    <div class="row">
                        <div class="col-3">Sutapa Banerjee
                            <p class="">Chairman</p>
                        </div>
                        <div class="col-3">Namita Gupta</div>
                        <div class="col-3">
                            Kaushik Dutta</div>
                        <div class="col-3">
                            Sanjeev Bikhchandani
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <h4>Audit Committee</h4>
                    <hr class="fw-bold">
                    <div class="row">
                        <div class="col-3">Sutapa Banerjee
                            <p class="">Chairman</p>
                        </div>
                        <div class="col-3">Namita Gupta</div>
                        <div class="col-3">
                            Kaushik Dutta</div>
                        <div class="col-3">
                            Sanjeev Bikhchandani
                        </div>
                    </div>
                </div>
                <div class="mt-5">
                    <h4>Audit Committee</h4>
                    <hr style="height:10px">
                    <div class="row">
                        <div class="col-3">Sutapa Banerjee
                            <p class="">Chairman</p>
                        </div>
                        <div class="col-3">Namita Gupta</div>
                        <div class="col-3">
                            Kaushik Dutta</div>
                        <div class="col-3">
                            Sanjeev Bikhchandani
                        </div>
                    </div>
                </div>
            </div>

            <!-- Company Section  -->

            <div v-if="currentSection === 'section3'" class="content mt-4">
                <div class="mt-5">
                    <div class="row">
                        <div v-for="(chunk, index) in chunkedItems2" :key="index" class="col-12 col-md-3 mb-3 px-2">
                            <div class="card bg-dark text-white"
                                style="height: 300px; border: 2px solid #ffffff; border-radius: 1rem;">
                                <img :src="chunk.imgSrc" class="card-img h-100" alt="collection-img"
                                    style="object-fit: cover;" />
                                <!-- <p class="text-center card-text mt-3 fs-5 fw-8">{{ chunk.caption }}</p> -->
                                <div class="card-img-overlay">
                                    <h5 class="card-text  text-center" style="margin-top:12rem">{{ chunk.caption }}</h5>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <!-- Culture Section  -->

            <div v-if="currentSection === 'section4'" class="content mt-4">
             <div class="row mt-5">
                <div class="col-8 fs-4 fw-8"> Document</div>
                <div class="col-4 text-center fs-5" style="color:grey"> View</div>
                <hr class="mt-4" style="border-top: 3px solid black;">
             </div>
             <div class="row mt-4">
                <div class="col-8 fs-5 fw-8">Zomato Shareholding Pattern as on June 30, 2024</div>
                <div class="col-4 text-center fs-5" style="color:red"> PDF</div>
                <hr class="mt-4">
             </div>
             <div class="row mt-4">
                <div class="col-8 fs-5 fw-8">Zomato Shareholding Pattern as on June 30, 2024</div>
                <div class="col-4 text-center fs-5" style="color:red"> PDF</div>
                <hr class="mt-4">
             </div>
             <div class="row mt-4">
                <div class="col-8 fs-5 fw-8">Zomato Shareholding Pattern as on June 30, 2024</div>
                <div class="col-4 text-center fs-5" style="color:red"> PDF</div>
                <hr class="mt-4">
             </div>
             <div class="row mt-4">
                <div class="col-8 fs-5 fw-8">Zomato Shareholding Pattern as on June 30, 2024</div>
                <div class="col-4 text-center fs-5" style="color:red"> PDF</div>
                <hr class="mt-4">
             </div>
             <div class="row mt-4">
                <div class="col-8 fs-5 fw-8">Zomato Shareholding Pattern as on June 30, 2024</div>
                <div class="col-4 text-center fs-5" style="color:red"> PDF</div>
                <hr class="mt-4">
             </div>
            </div>


        </div>
        <Footer />
    </div>
</template>

<style scoped>
/* Custom styles for responsiveness */




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


}
</style>