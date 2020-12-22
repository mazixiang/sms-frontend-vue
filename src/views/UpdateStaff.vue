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
      <StaffForm
        :father-form-data.sync="formData"
        @submit-staff="submitUpdate"
      ></StaffForm>
    </div>
  </div>
</template>

<script>
import StaffForm from '@/components/StaffForm';
import { queryStaffById, updateStaff } from '@/api/staff';

export default {
  name: 'UpdateStaff',
  components: { StaffForm },
  data: function() {
    return {
      formData: {},
      enterFromOtherEntrance: false,
    };
  },
  async created() {
    if (this.$route.params.id === undefined) {
      this.enterFromOtherEntrance = true;
    } else {
      let id = this.$route.params.id;
      await queryStaffById(id).then(target => {
        this.formData = target;
      });
    }
  },
  methods: {
    submitUpdate: async function() {
      await updateStaff(this.formData);
    },
  },
  computed: {
    hobbiesString: function() {
      return this.formData.hobbies.toString();
    },
  },
};
</script>

<style scoped></style>
