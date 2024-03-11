<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/login">ระบบรายงาน</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/report" class="nav-link">รายงานเบอร์</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/search" class="nav-link">ตรวจสอบประวัติการโดนรายงาน</router-link>
            </li>
          </ul>
        </div>
        <div v-if="this.$cookies.isKey('account')">
          <button @click="logout" class="btn btn-danger">Logout</button>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="bg-dark" style="height: 10vh"></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      showPassword: false,
      center: {
        'd-flex': true,
        'justify-content-center': true,
        'align-items-center': true
      }
    }
  },
  methods: {
    logout() {
      this.$cookies.keys().forEach((cookie) => this.$cookies.remove(cookie))
      this.$router.push({ path: '/login' })
      alert('Logout')
      setTimeout(() => {
        window.location.reload()
      }, 100)
    }
  }
}
</script>
