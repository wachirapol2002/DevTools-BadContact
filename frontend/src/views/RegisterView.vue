<template>
  <main style="background-image: linear-gradient(gray, white)">
    <div
      class="container-fluid d-flex flex-column justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="fw-bold text-center mb-5" style="font-size: 40px" :class="center">Register</div>
      <div class="login bg-light rounded" style="width: 650px">
        <form class="needs-validation" name="register" action="/register" onsubmit="" method="POST">
          <div
            class="form-group was-validated"
            style="padding-left: 30px; padding-right: 30px; padding-top: 20px"
          >
            <label class="form-label" for="email">Email</label>
            <input
              class="form-control"
              type="email"
              id="email"
              name="email"
              required
              placeholder="อีเมล"
              maxlength="50"
              v-model="email"
            />
            <div class="invalid-feedback">Please enter your email</div>
          </div>

          <div class="form-group was-validated" style="padding-left: 30px; padding-right: 30px">
            <label class="form-label" for="displayName">DisplayName</label>
            <input
              class="form-control"
              type="text"
              id="displayName"
              required
              placeholder="ชื่อผู้ใช้"
              maxlength="30"
              v-model="displayName"
            />
            <div class="invalid-feedback">Please enter your DisplayName</div>
          </div>

          <div class="form-group was-validated" style="padding-left: 30px; padding-right: 30px">
            <label class="form-label" for="password">Password</label>
            <input
              class="form-control"
              :type="showPassword ? 'text' : 'password'"
              id="password"
              required
              placeholder="รหัสผ่าน"
              maxlength="20"
              v-model="password"
            />
            <div class="invalid-feedback">Please enter your password</div>
          </div>

          <div class="form-group was-validated" style="padding-left: 30px; padding-right: 30px">
            <label class="form-label" for="password">Confirm Password</label>
            <input
              class="form-control"
              :type="showPassword ? 'text' : 'password'"
              id="confirmPassword"
              name="password"
              required
              placeholder="ยืนยันรหัสผ่าน"
              maxlength="20"
              v-model="confirmPassword"
            />
            <div class="invalid-feedback">Please enter your password</div>
          </div>

          <div class="form-group form-check" style="padding-left: 50px; padding-right: 30px">
            <input class="form-check-input" type="checkbox" id="check" v-model="showPassword" />
            <label class="form-check-label" style="font-size: 17px" for="showpass"
              >Show Password</label
            >
          </div>
          <div class="form-group d-flex justify-content-center">
            <div class="btn btn-primary" @click="submit()">Sign Up</div>
          </div>

          <div class="form-group justify-content-center text-center">
            <label style="font-size: 17px">Already Have an account?</label>
            <router-link to="/login" class="btn btn-link">Sign In</router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { axiosInstance } from '../client/axios'
export default {
  name: 'RegisterPage',
  data() {
    return {
      previousRoutes: [],
      email: '',
      displayName: '',
      password: '',
      confirmPassword: '',
      showPassword: false,

      error: '',
      center: {
        'd-flex': true,
        'justify-content-center': true,
        'align-items-center': true
      },
      formRow: {
        'form-group': true,
        row: true,
        'my-3': true
      },
      label: {
        'form-label': true,
        'col-3': true,
        'fw-bold': true,
        'm-0': true,
        'd-flex': true,
        'align-items-center': true,
        'justify-content-end': true
      }
    }
  },
  methods: {
    submit() {
      if (!this.email || !this.displayName || !this.password || !this.confirmPassword) {
        alert('Please fill in all fields.')
        return
      }
      if (this.password !== this.confirmPassword) {
        alert('Password and Confirm Password do not match.')
        return
      }
      const data = {
        email: this.email,
        password: this.password,
        displayName: this.displayName
      }
      axiosInstance
        .post('/user/', data)
        .then(() => {
          this.$router.push({ path: '/login' })
          alert('Sign up Success')
          setTimeout(() => {
            window.location.reload()
          }, 100)
        })
        .catch((err) => {
          alert(err)
          console.log(err)
        })
    }
  },
  mounted() {
    if (this.$cookies.isKey('account')) {
      this.$router.push('/')
    }
  }
}
</script>
