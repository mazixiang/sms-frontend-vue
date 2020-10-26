<template>
  <div class="container">
    <div v-if="enterFromOtherEntrance">
      <div class="alert alert-danger">
        <h1>Error</h1>
        <hr />
        <p>
          You seem to be entering through some other entrance, enter from the
          <router-link to="/list">staff table</router-link> please.
        </p>
      </div>
    </div>
    <div v-else>
      <StaffForm :form-data="formData" @submit-staff="submitUpdate"></StaffForm>
    </div>
  </div>
</template>

<script>
import StaffForm from '@/components/StaffForm';
import axios from 'axios';
import globalVariant from '@/components/GlobalVariant';

export default {
  name: 'UpdateStaff',
  components: { StaffForm },
  data: function() {
    return {
      formData: {},
      enterFromOtherEntrance: false
    };
  },
  created() {
    if (this.$route.params.targetStaffObject === undefined) {
      this.enterFromOtherEntrance = true;
    } else {
      this.formData = this.$route.params.targetStaffObject;
    }
  },
  methods: {
    submitUpdate: async function() {
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
          this.$router.push('/list');
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

<style scoped></style>
