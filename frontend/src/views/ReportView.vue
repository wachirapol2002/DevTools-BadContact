<template>
  <main style="background-image: linear-gradient(gray, white)">
    <div
      class="container-fluid d-flex flex-column justify-content-center align-items-center p-3"
      style="height: 100vh"
    >
      <div
        class="bg-dark rounded-top text-white"
        :class="center"
        style="width: 650px; height: 40px"
      >
        รายงาน
      </div>
      <div
        class="bg-light border border-dark rounded-bottom p-3"
        style="width: 650px; height: 800px"
      >
        <form>
          <div class="was-validated" :class="formRow">
            <label :class="label" for="phoneNumber">หมายเลขโทรศัพท์: </label>
            <div class="col-9">
              <input
                class="form-control"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                placeholder="เบอร์โทรศัพท์"
                maxlength="10"
                pattern="[0-9]{10}"
                v-model="phoneNumber"
              />
            </div>
            <div class="invalid-feedback">กรอกหมายเลขโทรศัพท์ที่ต้องการแจ้ง</div>
          </div>

          <div :class="formRow">
            <label :class="label" for="name">ชื่อเจ้าของเบอร์: </label>
            <div class="col-9">
              <input
                class="form-control"
                type="text"
                id="name"
                name="name"
                placeholder="ไม่รู้ไม่ต้องกรอก"
                maxlength="25"
                v-model="name"
              />
            </div>
          </div>
          <div :class="formRow">
            <label :class="label" for="ReportType">หัวข้อรายงาน: </label>
            <div class="col-9">
              <select
                class="form-control"
                id="ReportType"
                name="ReportType"
                v-model="selectedReportType"
              >
                <option value="" disabled selected>กรุณาเลือก</option>
                <option value="ไม่ตอบกลับ">ไม่ตอบกลับ</option>
                <option value="telemarketer">telemarketer (ขายตรง)</option>
                <option value="หลอกลวง">หลอกลวง</option>
                <option value="โทรตาม">โทรตาม</option>
                <option value="other">อื่น ๆ</option>
              </select>
              <!-- แสดง input เพิ่มเติม ถ้าผู้ใช้เลือก "อื่นๆ" -->
              <input
                v-if="selectedReportType === 'other'"
                class="form-control mt-2"
                type="text"
                id="otherReportType"
                name="otherReportType"
                placeholder="กรุณาระบุหัวข้อรายงาน"
                maxlength="30"
                v-model="otherReportType"
              />
            </div>
          </div>
          <div class="text-center">
            <div class="btn btn-primary" @click="submit()">ส่งรายงาน</div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { axiosInstance } from '../client/axios.js'
export default {
  name: 'ReportPage',
  data() {
    return {
      previousRoutes: [],
      phoneNumber: '',
      name: '',
      selectedReportType: '',
      otherReportType: '',
      user: '',
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
      if (!this.phoneNumber) {
        alert('กรุณากรอก เบอร์โทรที่ต้องการแจ้ง')
        return
      }
      let reportReason: string
      if (this.selectedReportType == 'other') {
        if (this.otherReportType == '') {
          alert('กรุณาระบุหัวข้อรายงาน')
          return
        } else {
          reportReason = this.otherReportType
        }
      } else if (this.selectedReportType == '') {
        alert('กรุณาเลือกหัวข้อรายงาน')
        return
      } else {
        reportReason = this.selectedReportType
      }
      const data = {
        reporterId: this.$cookies.get('account').id,
        phoneNumber: this.phoneNumber,
        targetName: this.name,
        notes: reportReason
      }
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
    if (!this.$cookies.isKey('account')) {
      this.$router.push('/login')
    }
  }
}
</script>
