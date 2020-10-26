<template>
  <div
    class="container"
    @submit="
      $event.preventDefault();
      $emit('submit-staff');
    "
  >
    <form>
      <div class="form-group" v-show="false">
        <label for="input-id">id</label>
        <input
          type="text"
          id="input-id"
          class="form-control"
          v-model="formData.id"
          readonly
          required
        />
      </div>

      <div class="form-group">
        <label for="input-name">Name</label>
        <input
          type="text"
          id="input-name"
          class="form-control"
          v-model="formData.name"
          placeholder="Enter name here"
          required
        />
      </div>

      <div class="form-group">
        <label for="input-password">Password</label>
        <input
          type="password"
          id="input-password"
          class="form-control"
          v-model="formData.password"
          placeholder="Enter password here"
          required
        />
      </div>

      <div class="form-group">
        <label for="radio-gender">Gender</label>
        <div class="bv-no-focus-ring">
          <div id="radio-gender">
            <div
              v-for="(gender, index) in options.genders"
              :key="index"
              class="custom-control custom-radio custom-control-inline"
            >
              <input
                type="radio"
                :id="`radio-gender-${gender}`"
                :value="gender"
                class="custom-control-input"
                v-model="formData.gender"
                required
              />
              <label
                :for="`radio-gender-${gender}`"
                class="custom-control-label"
                >{{ gender }}</label
              >
            </div>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="input-age">Age</label>
        <input
          type="text"
          id="input-age"
          class="form-control"
          v-model="ageText"
          placeholder="Enter age here"
          required
        />
      </div>

      <div class="form-group">
        <label for="input-contactInfo">Contact Info</label>
        <input
          type="text"
          id="input-contactInfo"
          class="form-control"
          v-model="formData.contactInfo"
          placeholder="Enter contact information here"
          required
        />
      </div>

      <div class="form-group">
        <label for="checkbox-hobby">Hobby</label>
        <div id="checkbox-hobby">
          <div
            v-for="(hobby, index) in options.hobbies"
            :key="index"
            class="custom-control custom-control-inline custom-checkbox"
          >
            <input
              type="checkbox"
              :id="hobby"
              class="custom-control-input"
              v-model="formData.hobbies"
              :value="hobby"
            />
            <label :for="hobby" class="custom-control-label">{{ hobby }}</label>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label for="select-department">Department</label>
        <select
          id="select-department"
          class="custom-select"
          v-model="formData.department"
          required
        >
          <option
            v-for="(department, index) in options.departments"
            :key="index"
            >{{ department }}</option
          >
        </select>
      </div>

      <button type="submit" class="btn btn-outline-primary btn-block">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'StaffForm',
  props: {
    formData: Object
  },
  data: function() {
    return {
      options: {
        genders: ['male', 'female'],
        hobbies: [
          'sport',
          'reading books',
          'movies',
          'programming',
          'cooking',
          'listening music',
          'photography',
          'writing'
        ],
        departments: [
          'market',
          'development',
          'customer-service',
          'administrative'
        ]
      },
      ageText: ''
    };
  },
  watch: {
    ageText: function(newText) {
      this.ageText = newText.replace(/[^\d]/g, '');
      this.formData.age = parseInt(newText);
    }
  },
  created: function() {
    if (this.formData.age !== null) {
      this.ageText = this.formData.age.toString();
    }
  }
};
</script>
