<template>
    <nav class="navbar navbar-expand-lg navbar-light text-dark justify-content-center">
        <div class="container-fluid text-dark" style="padding-left:10%;padding-right: 10%">
            <a class="navbar-brand text-dark mb-2" href="#">
                <span class="fs-2 fw-bold"> Zomato </span> | Investor Relation
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav gap gap-3">
                    <li class="nav-item">
                        <router-link class="nav-link text-dark fs-5 fw-8" to="/investor_relation">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-dark fs-5 fw-8" to="/financial">Financial</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-dark fs-5 fw-8" to="/announcement">Announcements</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-dark fs-5 fw-8" to="/blogs">Blogs</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-dark fs-5 fw-8" to="/governence">Governance</router-link>
                    </li>
                    
                    <!-- ESG Dropdown -->
                    <li class="nav-item dropdown">
                        <a class="nav-link  text-dark fs-5 fw-8" href="#" id="esgDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ESG
                        </a>
                      
                    </li>
                    
                    <li class="nav-item">
                        <select class="form-select" aria-label="Help Options" @change="navigateToOption" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
                            <option selected disabled>All</option>
                            <option v-for="(option, index) in helpOptions" :key="index" :value="option">
                                {{ option }}
                            </option>
                        </select>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-dark fs-5 fw-8" to="/resources">Resources</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      helpOptions: ["esg_iniative", "esg_microsite"],
    };
  },
  methods: {
    navigateToOption(event) {
      const selectedOption = event.target.value;
      if (selectedOption) {
        this.$router.push(`/${selectedOption}`);
      }
    },
    handleMouseOver(event) {
      event.target.style.cursor = 'pointer';
    },
    handleMouseOut(event) {
      event.target.style.cursor = 'default';
    }
  },
};
</script>

<style scoped>
/* Dropdown menu styling */
.dropdown-menu {
    background-color: #f8f9fa;
}

.dropdown-menu .dropdown-item:hover {
    background-color: #e9ecef;
    color: #000;
}

/* Style for the select options */
.form-select option:hover {
    background-color: #e9ecef;
    color: #000;
}
</style>
