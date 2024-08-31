<template>
    <div class="container-fluid">
       <Navbar/>
        <div class="container p-4">
            <p class="fs-1 fw-bold mt-4">Financials</p>
            <hr class="mt-5 fw-bold">
            <div class="row">
                <div class="col-10"> <p class="fs-1 fw-8 mt-4">Shareholders' Letter and Results</p></div>
                <div class=" col-2 ">
                    <div class="mt-5">
                        <img src="../assets/left.png" width="50px" data-bs-target="#carouselExampleControls" data-bs-slide="prev"> 
                    <img src="../assets/right.png" class="mx-4" width="40px"  data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    </div>
                    
                </div>
            </div>
           
            <!-- The Collection Part start here -->
            
            <div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(chunk, index) in chunkedItems" :key="index" class="carousel-item" :class="{ active: index === 0 }">
          <div class="row">
            <div v-for="item in chunk" :key="item.caption" class="col-12 col-md-3 mb-3 px-2">
              <div class="card bg-dark text-white" style="height: 400px; border: 2px solid #ffffff; border-radius: 1rem;">
                <img :src="item.imgSrc" class="card-img h-100" alt="collection-img" style="object-fit: cover;" />
              </div>
              <p class="text-center mt-3 fs-5 fw-8">{{ item.caption }}</p>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  

            <!-- The collection part end here -->
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import FooterComponent from "@/footer/footer.vue";
import Navbar from "./investor_relation_navbar.vue";
export default {
    components: {
    FooterComponent,
    Navbar
  },
  data() {
    return {
      items: [
        { imgSrc: 'https://b.zmtcdn.com/investor-relations/c0dcc908c857e346b5b2ece74be31792_1722505954.jpeg', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/investor-relations/907d46d6c4565f639483f239566bd84f_1715593017.png', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/investor-relations/254790073164218ac21893a8046c0a05_1707385481.png', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/investor-relations/95a8d5cf4822d1033c500bf9c9e530ac_1699003796.jpeg', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/investor-relations/95a8d5cf4822d1033c500bf9c9e530ac_1699003796.jpeg', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/investor-relations/6285797e3c57f990bf5c836eebf9a132_1691057093.png', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/investor-relations/166d3711fab032cd18077f51d6b3b91a_1684492871.png', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/investor-relations/da22670bb573774c8c2331bbca77eb171675950923.png', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/1c7d466ee6624fd1d50cee0c02bbaa1b1659356792.png', caption: 'Q2 FY24' },
        { imgSrc: 'https://b.zmtcdn.com/data/o2_assets/d3fbfd09b1e5b8de138da76cce7fb1b91654679122.png', caption: 'Q2 FY24' },
        // Add more items if needed
      ]
    };
  },
  computed: {
    chunkedItems() {
      const chunkSize = 4; // Number of items per slide
      let result = [];
      for (let i = 0; i < this.items.length; i += chunkSize) {
        result.push(this.items.slice(i, i + chunkSize));
      }
      return result;
    }
  }
};
</script>

<style>
.carousel-inner {
  display: flex;
}

.carousel-item {
  flex: 0 0 auto;
  width: 100%;
}

.carousel-inner .row {
  display: flex;
  flex-wrap: nowrap;
}

.carousel-item .col-12 {
  flex: 0 0 25%; /* Each item should take 25% of the width */
}

.carousel-control-prev,
.carousel-control-next {
  top: 50%; /* Center vertically */
  height: 100%; /* Make sure the buttons cover the height of the carousel */
  background-color: rgba(0, 0, 0, 0.5); /* Optional: Add a semi-transparent background */
  border: none; /* Remove border if any */
  transform: translateY(-55%); /* Adjust vertical positioning */
}



.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5); /* Dark background for arrows */
  border-radius: 50%; /* Round arrow icons */
}

.carousel-control-prev {
  left: 10px; /* Position the previous button */
}

.carousel-control-next {
  right: 10px; /* Position the next button */
}
</style>
