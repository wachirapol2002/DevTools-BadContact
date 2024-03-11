<template>
  <main style="background-image: linear-gradient(gray, white)">
    <div
      class="container-fluid d-flex flex-column justify-content-center align-items-center"
      style="height: 100vh"
    >
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">แอพรายงานหมายเลขโทรศัพท์</h1>
          <p class="lead">รายงานหมายเลขโทรศัพท์ที่ไม่พึงประสงค์</p>
          <a class="btn btn-primary btn-lg" href="#" role="button">ลงทะเบียน</a>
        </div>
      </div>
      <div class="container-fluid pt-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">ค้นหารายการหมายเลขโทรศัพท์</h5>
                <p class="card-text">
                  ดูรายการหมายเลขโทรศัพท์ที่ไม่พึงประสงค์ตามที่ผู้ใช้คนอื่น ๆ ที่ได้รายงาน
                </p>
                <router-link to="/search" class="btn btn-primary">คลิกเพื่อค้นดู</router-link>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">รายงาน</h5>
                <p class="card-text">รายงานหมายเลขโทรศัพท์ที่ไม่พึงประสงค์</p>
                <router-link to="/report" class="btn btn-primary"
                  >ลงทะเบียนเพื่อสร้างรายงาน</router-link
                >
              </div>
            </div>
          </div>
        </div>
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
  methods: {}
}
</script>
