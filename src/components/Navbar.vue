<!-- src/App.vue -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/investor_relation">Investor
                Relation</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/add_resturant">Add Resturant</router-link>
            </li>
            <li class="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Sign up


            </li>
            <li class="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
              Login


            </li>


          </ul>

        </div>
      </div>
    </nav>
  </div>




  <!-- the Signup modal part start here -->



  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true" ref="myModalRef">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">
            Sign Up
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="signup">
            <div class="row p-2 gap-4">
              <input type="text" placeholder="Full name" v-model="name" class="form-control"
                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

              <input type="text" placeholder="Email" v-model="email" class="form-control"
                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />

              <input type="password" placeholder="Password" v-model="password" class="form-control"
                aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>

            <div class="mt-2">
              <input type="checkbox" /><span class="ms-2">
                I agree to Zomato Terms and Service, Privacy Policy, and
                Content Policies
              </span>
            </div>
            <div class="mt-2 d-flex justify-content-center">
              <button type="submit" class="btn btn-danger w-100">
                Create An Account
              </button>
            </div>
          </form>
          <p class="mt-3 d-flex justify-content-center">or</p>
          <button type="button" class="btn btn-outline-success w-100 d-flex justify-content-center">
            <img style="width: 20px; height: 20px" class="mt-1" src="../assets/google.png" />
            <span class="ms-2">Sign In with Google</span>
          </button>
          <p class="mt-3">Already have an account? <span data-bs-toggle="modal" data-bs-target="#staticBackdrop2" class="text-danger">Log In</span></p>
        </div>
      </div>
    </div>
  </div>
  <!-- the Signup modal part end here -->

  <!-- The Login part start here  -->
  <div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel2" aria-hidden="true" ref="myModalRef2">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel2">
            Login
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="login">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">Default</span>
              <input type="number" class="form-control" aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default">
            </div>
            <button type="button" class="btn btn-danger w-100 mt-4 btn-lg">Set One Time Password</button>
            <p class="mt-2 d-flex justify-content-center fs-5">or</p>
            <button type="button" class="btn btn-outline-secondary w-100 d-flex justify-content-center">
            <img style="width: 20px; height: 20px" class="mt-1" src="data:image/png;base64,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" />
            <span class="ms-2">continue with email</span>
          </button>
          <button type="button" class="mt-4 btn btn-outline-secondary w-100 d-flex justify-content-center">
            <img style="width: 20px; height: 20px" class="mt-1" src="../assets/google.png" />
            <span class="ms-2">Sign In with Google</span>
          </button>
          <hr class="mt-5">
          <p class="">New To Zomato ? <span class="text-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Create Account</span></p>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- The Login part end here  -->

  <router-view></router-view>
</template>

<script>
import AuthService from '../Services/AuthService';


import { Modal } from 'bootstrap';
export default {



  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async signup() {
      if (!this.name || !this.email || !this.password) {
        alert('Please fill in all fields.');
        return;
      }
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      try {
        await AuthService.register({ name: this.name, email: this.email, password: this.email });
        this.$router.push('/');
        alert('The Sign up success');
        // Get the modal element
        const modalElement = this.$refs.myModalRef;

        // Create a new modal instance
        const modal = Modal.getInstance(modalElement) || new Modal(modalElement);

        // Hide the modal
        modal.hide();
        window.location.reload();
      } catch (error) {
        console.error(error);
        alert('The Sign up not success');
        window.location.reload();
      }
    },
  },
};
</script>

<style scoped>
/* Styles for App component */
nav {
  margin-bottom: 10px;
}

nav a {
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}

.modal-header {
  border-bottom: none;
}
</style>