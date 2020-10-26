<template>
  <div class="container">
    <StaffForm :form-data="formData" @submit-staff="submitInsert"></StaffForm>
  </div>
</template>

<script>
import StaffForm from '@/components/StaffForm';
import axios from 'axios';
import globalVariant from '@/components/GlobalVariant';

export default {
  name: 'AddStaff',
  components: { StaffForm },
  data: function() {
    return {
      formData: {
        id: '',
        name: '',
        password: '',
        gender: 'male',
        age: null,
        contactInfo: '',
        hobbies: [],
        department: 'market'
      }
    };
  },
  methods: {
    submitInsert: async function() {
      let submitData = {};
      Object.assign(submitData, this.formData);
      delete submitData.hobbies;
      submitData.hobbies = this.hobbiesString;
      console.log(submitData.hobbies);
      await axios
        .post(
          `${globalVariant.baseUrl}/${globalVariant.paths.updateStaff}`,
          submitData,
          {
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .then(response => {
          this.$router.push('/list');
          console.log(response);
        })
        .catch(() => {
          this.$router.push('/serverError');
        });
    }
  },
  computed: {
    hobbiesString: function() {
      return this.formData.hobbies.toString();
    }
  }
};
</script>
