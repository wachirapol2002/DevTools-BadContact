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
          <button @click="checkHistory" class="btn btn-primary">ตรวจสอบ</button>
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
        <button @click="checkHistory" class="btn btn-primary">ตรวจสอบ</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SearchPage',
  data() {
    return {
      previousRoutes: [],
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
  methods: {}
}
</script>
