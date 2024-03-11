<template>
  <main style="background-image: linear-gradient(gray, white)">
    <div
      class="container-fluid d-flex flex-column justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="fw-bold text-center mb-5" style="font-size: 40px" :class="center">Login</div>
      <div class="login bg-light rounded" style="width: 650px">
        <form class="needs-validation" name="login">
          <div
            class="form-group was-validated"
            style="padding-left: 30px; padding-right: 30px; padding-top: 20px"
          >
            <label class="form-label" for="email">Email</label>
            <input
              class="form-control"
              type="อีเมล"
              id="email"
              name="email"
              required
              placeholder="อีเมล"
              maxlength="30"
              v-model="email"
            />
            <div class="invalid-feedback">Please enter your email</div>
          </div>

          <div class="form-group was-validated" style="padding-left: 30px; padding-right: 30px">
            <label class="form-label" for="password">Password</label>
            <input
              class="form-control"
              :type="showPassword ? 'text' : 'password'"
              id="password"
              name="password"
              required
              placeholder="รหัสผ่าน"
              maxlength="20"
              v-model="password"
            />
            <div class="invalid-feedback">Please enter your password</div>
          </div>

          <div class="form-check" style="padding-left: 50px; padding-right: 30px">
            <input class="form-check-input" type="checkbox" id="check" v-model="showPassword" />
            <label class="form-check-label" style="font-size: 17px" for="showpass"
              >Show Password</label
            >
          </div>

          <div class="form-group d-flex justify-content-center">
            <div class="btn btn-primary" @click="submit()">Sign In</div>
          </div>

          <div class="form-group justify-content-center text-center">
            <label style="font-size: 17px">Create an account</label>
            <router-link to="/register" class="btn btn-link">Sign Up Now</router-link>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { axiosInstance } from '../client/axios'
export default {
  name: 'LoginPage',
  data() {
    return {
      previousRoutes: [],
      email: '',
      password: '',
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
      const data = {
        email: this.email,
        password: this.password
      }
      axiosInstance
        .post('/auth/login', data)
        .then(() => {
          this.$cookies.set('account', data)
          this.$router.push({ path: '/report' })
          alert('Sign In Success')
          setTimeout(() => {
            window.location.reload()
          }, 100)
        })
        .catch((err) => {
          alert(err)
          console.log(err)
        })

      // const data = {
      //   email: this.email,
      //   password: this.password
      // }
      // axiosInstance
      //   .post('/auth/login/', data)
      //   .then((res) => {
      //     const account = {
      //       displayName: res.data.account.displayName,
      //       permission: res.data.account.permission,
      //       firstname: res.data.account.firstname,
      //       lastname: res.data.account.lastname,
      //       email: res.data.account.email,
      //       phone: res.data.account.phone
      //     }
      //     this.$cookies.set('account', account)
      //     alert('Login Success')
      //     this.$router.push({ path: '/' })
      //   })
      //   .catch((error) => {
      //     this.error = error.response.data
      //   })
    }
  }
}
</script>
