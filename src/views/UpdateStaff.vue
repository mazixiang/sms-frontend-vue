<template>
  <div>
    <b-container>
      <div v-if="enterFromOtherEntrance">
        <b-alert show variant="danger">
          <h1>Error</h1>
          <hr />
          <p>
            You seem to be entering through some other entrance, enter from the
            <router-link to="/list">table</router-link> please.
          </p>
        </b-alert>
      </div>
      <div v-else>
        <StaffForm
          :form-data="formData"
          :show-reset-button="false"
          @submit-staff="submitUpdate"
        ></StaffForm>
      </div>
    </b-container>
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
        .post(`${globalVariant.baseUrl}/${globalVariant.urls.updateStaff}`, submitData, {
          headers: {
            'content-type': 'application/x-www-form-urlencoded'
          }
        })
        .then(response => {
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

<style scoped></style>
