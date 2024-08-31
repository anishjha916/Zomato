
    <script>


export default {
   
    data() {
        return {
            imageUrl:
                "https://zomatoblog.com/wp-content/uploads/2024/08/Frame-7.png",
                imageUrl1:
                "https://i0.wp.com/zomatoblog.com/wp-content/uploads/2023/05/What-makes-Bharat-exciting-for-us-3-768x1336-1.png?resize=589%2C1024&ssl=1",
            
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

        backgroundStyle1() {
            return {
                height: "500px",
                backgroundImage: `url(${this.imageUrl1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            };
        },
    },
};
</script>
<template>
    <div class="container-fluid" style="padding-left: 20%;padding-right: 20%">
        <div :style="backgroundStyle" class="bg-container"></div>
        <p class="mt-3" style="color: grey; font-size: 15px;">Shuvra Saha | August 14, 2024 | 3 min read</p>
        <p class="fs-3 bw-bold">The Big Brand Theory | How this Brand Set on a Mission to Samosa-fy the World!</p>
        <p class="fs-5">India’s food culture is more than just a taste of the diverse cuisines that our nation has to offer. It’s a way of life that brings people together, celebrates our traditions, and creates memories that last for a lifetime. As someone born and raised in Meerut, I remember the times when my father would take me on the back of his scooter to Pinki Chole Bhature, one of the town’s most sought-after eateries. The aroma of the spices, the sizzling of the chole and the crispy texture of the bhature made my mouth water with anticipation. And then there was the Sonu bhaiya ka Badam sherbet. Even though it didn’t have any actual badam, it was perfect in every way – just like the moments we share with our loved ones over food.</p>

        <p class="fs-5">Brought together by a similar love for food and a vision to paint our country red, in a period of just nine months, starting August 2021, Zomato launched its services in over 700 cities. This growth initiative is internally referred to as “Bharat”. Our journey in these markets has been a special one, primarily because of the unique challenges we have faced, both in terms of operations and customer behaviour.</p>

        <p class="fs-5">Through it all, we have managed to hire rock-solid talent to run operations in these cities, ensuring that we continue to deliver on our promise of providing the best possible experience to our customers and bring the joy of good food to every corner of the country.</p>
        <div class="d-flex justify-content-center">
            <img src="https://i0.wp.com/zomatoblog.com/wp-content/uploads/2024/08/image2-2.png?resize=768%2C705&ssl=1"/>
        </div>

        
        <p class="fs-5 mt-4">Our journey is a testament to the capabilities and brilliance of our team, who work tirelessly to ensure growth and success for our restaurant partners and delivery partners – including account management, leading local marketing efforts, driving profitability initiatives, and so much more! Once battle-hardened, often managing 2-3 cities at a time, they transition seamlessly to manage top cities in key positions.</p>

        <p class="fs-5">Without further ado, let us introduce you to some of the incredible individuals who make the impossible possible on a daily basis.</p>

        <div class="d-flex justify-content-center">
            <img src="https://i0.wp.com/zomatoblog.com/wp-content/uploads/2024/08/aloo-bucket-and-chai-1.png?resize=768%2C576&ssl=1"/>
        </div>

        
        <p class="fs-5">The best part – this is just the beginning. </p>

        <p class="fs-5">If what you’ve read here excites you, join us and join the “Bharat” revolution. We’re seeking talented individuals who share our passion for food and commitment to customer satisfaction as we continue to paint our country red. Fill out the form here to show interest. Together, let’s make better food accessible to more people and make a positive impact on communities across India. </p>

        <hr >
        <div class="">
<img src="https://b.zmtcdn.com/data/o2_assets/c4dce8025c459a69a43df95798e63e4a1678707854.png" style="width:2rem;height:2rem"/>
<img  class="ms-2" src="https://b.zmtcdn.com/data/o2_assets/1ea610c82e4a382383eb82dfa593116a1678707876.png" style="width:2rem;height:2rem"/>
<img class="ms-2" src="https://b.zmtcdn.com/data/o2_assets/23f13512c7d699da1dde9133d5e306581700155067.png" style="width:2rem;height:2rem"/>
</div>
        <hr>

        <h2>More For You Read</h2>
        <div class="row mt-5">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/Blog-15.jpg" class="card-img-top" alt="Card image"
                                style="height: 250px; object-fit: cover;">
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
                                style="height: 250px; object-fit: cover;">
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
                <div class="row mt-5">
                    <div class="col-sm-12 col-md-6 mb-4">
                        <div class="card h-100" style="border-radius: 0rem;">
                            <img src="https://zomatoblog.com/wp-content/uploads/2024/08/Blog-15.jpg" class="card-img-top" alt="Card image"
                                style="height: 250px; object-fit: cover;">
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
                                style="height: 250px; object-fit: cover;">
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

</template>