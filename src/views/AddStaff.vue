<template>
  <div>
    <b-container>
      <StaffForm
        :form-data="formData"
        :show-reset-button="true"
        @submit-staff="submitInsert"
      ></StaffForm>
    </b-container>
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
        age: '',
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
          console.log(response);
        })
        .catch(() => {
          this.$router.push('/serverError');
        });

      await this.$router.push('/list');
    }
  },
  computed: {
    hobbiesString: function() {
      return this.formData.hobbies.toString();
    }
  }
};
</script>
