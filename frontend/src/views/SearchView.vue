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
        class="bg-light border border-dark rounded-bottom p-3"
        style="width: 80vw; min-height: 200px"
      >
        <table class="table">
          <thead>
            <tr>
              <th>เบอร์โทร</th>
              <th>บุคคลที่คาดว่าเป็นเจ้าของเบอร์</th>
              <th>รายการที่แจ้ง</th>
              <th>บุคคลที่แจ้ง</th>
              <th>เวลาที่แจ้ง</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="(item, index) in phoneReport" :key="index">
              <td>{{ item.phoneNumber }}</td>
              <td>{{ item.ownerPerson }}</td>
              <td>{{ item.reportType }}</td>
              <td>{{ item.reportPerson }}</td>
              <td>{{ item.reportTime }}</td>
            </tr> -->
            <!-- test -->
            <tr>
              <td>099999999</td>
              <td>Superman</td>
              <td>เก่งเกิน</td>
              <td>Batman</td>
              <td>now</td>
            </tr>
            <tr>
              <td>199999999</td>
              <td>Batman</td>
              <td>รวยเกิน</td>
              <td>Superman</td>
              <td>1 min</td>
            </tr>
            <!-- test -->
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
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
    searchReport() {
      axiosInstance
        .post('/contact/', data)
        .then(() => {
          alert('Report Success')
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
