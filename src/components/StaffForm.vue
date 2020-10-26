<template>
  <div>
    <b-form @submit="$emit('submit-staff')">
      <b-form-group v-show="false" label="id">
        <b-form-input v-model="formData.id"></b-form-input>
      </b-form-group>
      <b-form-group label="Name" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="formData.name"
          placeholder="Enter name"
          required
          type="text"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Password" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="formData.password"
          placeholder="Enter password"
          required
          type="password"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Gender" label-for="radio-gender">
        <b-form-radio-group
          id="radio-gender"
          v-model="formData.gender"
          :options="options.genders"
          label="Gender"
          required
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group label="Age" label-for="input-age">
        <b-form-input
          id="input-age"
          v-model.number="formData.age"
          placeholder="Enter age"
          required
          type="text"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Contact Info" label-for="input-contactInfo">
        <b-form-input
          id="input-contactInfo"
          v-model="formData.contactInfo"
          placeholder="Enter Contact Information"
          required
          type="text"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Hobby/Hobbies" label-for="checkbox-hobby">
        <b-form-checkbox-group
          id="checkbox-hobby"
          v-model="formData.hobbies"
          :options="options.hobbies"
        ></b-form-checkbox-group>
      </b-form-group>

      <b-form-group labe-for="select-department" label="department">
        <b-form-select
          id="select-department"
          v-model="formData.department"
          :options="options.departments"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-row>
        <div>
          <b-button type="submit" variant="primary">Submit</b-button>
        </div>
        <div v-show="showResetButton">
          |
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form-row>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'StaffForm',
  props: {
    formData: Object,
    showResetButton: Boolean
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
      }
    };
  }
};
</script>

<style scoped></style>
