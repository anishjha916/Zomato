<script>
import Navbar from '../../components/investor_relation_navbar.vue';
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
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/4154eeb8da5257705f62d7d39fee2e791711643644.png', caption: 'Sustainability’s Highlights and Goals' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/25ad94ab98474a781cdbb8f5f84ce0e41695122352.png', caption: 'ESG Factsheet | FY 23' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/1ae5d8cfb1e520f39a07b3a101d172841654418692.png', caption: 'ESG Update | June 2022' },

                // Add more items as needed
            ],

            chunkedItems2: [
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/f5aa3f7318568772aba405ea22098f7d1626097429.png', header: 'Offsetting Our Carbon Footprint', caption: 'We fund global environmental projects to offset the carbon footprint of delivery and packaging' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/8f451ba395e422e85adc6bb768d19aad1626098489.png', header: '100% EV Adoption For Delivery by 2030', caption: 'We have joined the EV100 initiative by The Climate Group and are committing to 100% adoption of electric vehicles by 2030.' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/ef206250ed13384ed66741342f1152471626097456.png', header: 'Bicycle Deliveries', caption: '20% of our deliveries are made on bicycles.' },

                // Add more items as needed
            ],
            chunkedItems3: [
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/0d22a48209201243f8e87aa4a0bfd7bd1626068049.png', header: 'Oxygen For India', caption: 'In a public private partnership, Feeding India raised money for and procured ~9,000 oxygen concentrators to send to COVID hit areas across the country.' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/8f451ba395e422e85adc6bb768d19aad1626098489.png', header: 'Vaccinating Delivery Partners', caption: 'Zomato launched a free vaccination drive for our delivery partners in India along with the introduction of COVID insurance. A COVID relief fund was also setup for restaurant workers hit by the pandemi' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/c3d8e9012ac2b0e5ed034d0225f1f5601626068139.png', header: 'Feed The Daily Wager', caption: 'During the COVID-19 pandemic, Zomato Feeding India provided food support to daily wage earners who lost their livelihood due to lockdown. A total of 78 million meals were distributed within a few weeks.' },
                { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/dbf0a99afec8c89830fcabbfca8f93c31626068179.png', header: 'Feeding India By Zomato', caption: 'Feeding India has also partnered with a third-party in 2021 to support up to 10,000 orphaned children with education and food support​.' },
                // Add more items as needed
            ],
        };
    },
};
</script>

<template>
    <div class="container-fluid">
        <Navbar />
        <div class="container">
            <p class="mt-5 fw-bold display-1">ESG Initiatives</p>
            <button type="button" class="btn btn-outline-danger mt-4">ESG Microsite</button>
            <p class="fs-1 fw-8 mt-5">Our Sustainability Journey</p>
            <div class="mt-5">
                <div class="row">
                    <div v-for="(chunk, index) in chunkedItems" :key="index" class="col-12 col-md-6 col-lg-3 mb-3 px-2">
                        <div class="card bg-dark text-white h-75"
                            style="border: 2px solid #ffffff; border-radius: 1rem;">
                            <img :src="chunk.imgSrc" class="card-img h-100" alt="collection-img"
                                style="object-fit: cover;" />
                        </div>
                        <p class="text-center mt-3 fs-5 fw-8">{{ chunk.caption }}</p>
                    </div>
                </div>
            </div>
            <hr class="mt-3" style="border-top: 3px solid black;">
            <p class="fs-2 mt-4">Environmental</p>
            <div class="row mt-3">
                <div class="col-12 col-md-6 mb-4" v-for="(chunk, index) in chunkedItems2" :key="index">
                    <div class="card mb-3" style="max-width: 540px; border: none;">
                        <div class="row g-0">
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title text-secondary">{{ chunk.header }}</h5>
                                    <p class="card-text">{{ chunk.caption }}</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <img :src="chunk.imgSrc" class="img-fluid" alt="...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Social Part Start here  -->
            <p class="fs-2 mt-5">Social</p>
            <div class="row mt-3">
                <div class="col-12 col-md-6 mb-4" v-for="(chunk, index) in chunkedItems3" :key="index">
                    <div class="card mb-3 bg-light" style="max-width: 540px; border: none;">
                        <div class="row g-0">
                            <div class="col-8">
                                <div class="card-body">
                                    <h5 class="card-title text-secondary">{{ chunk.header }}</h5>
                                    <hr class="w-25" style="border:3px solid red">
                                    <p class="card-text">{{ chunk.caption }}</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <img :src="chunk.imgSrc" class="img-fluid" alt="...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Inclusion And Diversity part start here  -->
            <div class="bg-light mt-5 p-4">
                <h5>Inclusion And Diversity</h5>
                <hr style="border:3px solid red;width:5rem;">
                <div class="row">
                    <div class="col-12 col-md-6 mb-4">
                        <h5 class="text-secondary">Period Leave</h5>
                        <p class="mt-3" style="font-size: 18px;">We introduced up to 10 days of period leaves in a year, for all women (including transgender people).</p>
                        <div class="mt-5">
                            <h5 class="text-secondary">Cognitive and Gender Diversity on Our Board</h5>
                            <p class="mt-3" style="font-size: 18px;">In the eight member board, we have four women independent directors.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4">
                        <h5 class="text-secondary">Paternal Leaves</h5>
                        <p class="mt-3" style="font-size: 18px;">Introduced up to 26 weeks of paid paternal leave.</p>
                    </div>
                </div>
            </div>

            <!-- Governance part start here  -->
            <div class="mt-5">
                <h5 class="display-4 ms-4">Governance</h5>
                <div class="row mt-5">
                    <div class="col-12 col-md-6 mb-4">
                        <h5 class="text-secondary">Transparency</h5>
                        <p class="mt-3" style="font-size: 18px;">We have been publishing our annual performance reports on our website for the last three years in spite of being a private company.</p>
                        <div class="mt-5">
                            <h5 class="text-secondary">Equal Voting Rights</h5>
                            <p class="mt-3" style="font-size: 18px;">No differential voting rights are available to the Founder or any other shareholder.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 mb-4">
                        <h5 class="text-secondary">Whistleblower Policy</h5>
                        <p class="mt-3" style="font-size: 18px;">The policy has been developed to cover any concerns about unethical conduct or any wrongful act whether financial or non-financial.</p>
                        <div class="mt-5">
                            <h5 class="text-secondary">Highest Standards of Disclosure</h5>
                            <p class="mt-3" style="font-size: 18px;">Even though we are a private company, we provide full disclosure of all significant transactions and expenditures in our annual reports.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
