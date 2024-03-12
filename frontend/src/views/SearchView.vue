<template>
  <main style="background-image: linear-gradient(gray, white)">
    <div class="container-fluid d-flex flex-column align-items-center" style="height: 100vh">
      <div :class="[formRow, center]">
        <label :class="label" for="phoneNumber">ค้นหาประวัติ </label>
        <div class="col-5">
          <input
            class="form-control"
            type="te"
            id="phoneNumber"
            name="phoneNumber"
            required
            placeholder="เบอร์โทรศัพท์"
            maxlength="10"
            pattern="[0-9]{10}"
            v-model="phoneNumber"
          />
        </div>
        <div class="col-3">
          <button @click="searchReport" class="btn btn-primary">ตรวจสอบ</button>
        </div>
      </div>

      <div
        class="bg-dark rounded-top text-white"
        :class="center"
        style="width: 80vw; min-height: 40px"
      >
        การโดนรายงาน
      </div>
      <div
        class="bg-light border border-dark rounded-bottom p-3 mb-5 overflow-x-auto"
        style="width: 80vw; min-height: 200px"
      >
        <table class="table table-striped">
          <thead>
            <tr>
              <th class="col-3">เบอร์โทร</th>
              <th class="col-3">บุคคลที่คาดว่าเป็นเจ้าของเบอร์</th>
              <th class="col-4">รายการที่แจ้ง</th>
              <th class="col-2">เวลาที่แจ้ง</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in phoneReport" :key="index">
              <td>{{ item.phoneNumber }}</td>
              <td>{{ item.targetName }}</td>
              <td>{{ item.notes }}</td>
              <td>{{ dayjs(item.createdAt).format('DD-MM-YYYY HH:MM') }}</td>
            </tr>
          </tbody>
        </table>
        <h1 class="text-center mt-3" v-if="phoneReport.length === 0">ไม่พบข้อมูล</h1>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { axiosInstance } from '../client/axios.js'
import dayjs from 'dayjs'
export default {
  name: 'SearchPage',
  data() {
    return {
      previousRoutes: [],
      phoneReport: [],
      phoneNumber: '',
      account: this.$cookies.get('account'),
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
        'col-4': true,
        'fw-bold': true,
        'm-0': true,
        'd-flex': true,
        'align-items-center': true,
        'justify-content-end': true
      }
    }
  },
  methods: {
    dayjs,
    searchReport() {
      axiosInstance
        .get('/contact/', {
          params: {
            phoneNumber: this.phoneNumber
          }
        })
        .then((res) => {
          this.phoneReport = res.data
          console.log(res.data)
        })
        .catch((err) => {
          alert(err)
          console.log(err)
        })
    }
  },
  mounted() {
    this.searchReport()
  }
}
</script>
