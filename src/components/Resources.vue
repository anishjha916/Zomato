<script>
import Navbar from '../components/investor_relation_navbar.vue';
import Footer from '@/footer/footer.vue';

export default {
    components: {
        Navbar,
        Footer
    },
};
</script>
<template>
    <div class="container-fluid">
        <Navbar />
        <div class="container">
            <h1 class="mt-5" style="font-size: 5rem">Resources</h1>
            <hr class="mt-4" style="border-top: 3px solid black;">
            <h4 class="mt-5 fs-2" style="">Contact Us</h4>
            <div class="row">
                <div class="col-6">
                    <p class="fs-5 mt-4">For Investor Queries and Grievance Redressal</p>
                    <div class="mt-5">
                        <h5>Sandhya Sethia
                        </h5>
                        Company Secretary and Compliance Officer
                        <p class="mb-5">Zomato Limited</p>
                    </div>
                    <div class="mt-4">
                        <h6>Ground Floor, 12A
                        </h6>
                        94 Meghdoot, Nehru Place
                        <p class="mb-5">New Delhi - 110019</p>
                    </div>
                    <div class="mt-4">
                        <h6>Phone
                        </h6>
                        +91 124 426 8565, +91 11 40592373
                        
                    </div>
                    <div class="mt-4">
                   <p>Email</p>
                   <p class="text-danger">companysecretary@zomato.com</p>
                    </div>
                    <div class="mt-5">
<h2 class="fw-bold">Have Question?</h2>
<p style="font-size: 18px;">Reach out to us by emailing at <span class="text-danger">companysecretary@zomato.com, </span>  and we’ll get back to you.</p>
<button type="button" class="btn btn-danger mt-4">Contact Us</button>
                    </div>
                    <p class="mt-5 text-danger">ommunication to holders of shares in physical form</p>
                </div>
                <div class="col-6">
                    <p class="fs-5 mt-4">Authorized person to determine materiality of events or information</p>
                    <div class="mt-4">
                        <h5>Akshant Goyal
                        </h5>
                        Chief Financial Officer
                        <p class="mb-5">Zomato Limited</p>
                    </div>
                    <div class="mt-4">
                        <h6>Ground Floor, 12A
                        </h6>
                        94 Meghdoot, Nehru Place
                        <p class="mb-5">New Delhi - 110019</p>
                    </div>
                    <div class="mt-4">
                        <h6>Phone
                        </h6>
                        +91 124 426 8565, +91 11 40592373
                        
                    </div>
                    <div class="mt-4">
                   <p>Email</p>
                   <p class="text-danger">cfo@zomato.com</p>
                    </div>
               
                </div>
            </div>

        </div>
        <Footer/>
    </div>
</template>