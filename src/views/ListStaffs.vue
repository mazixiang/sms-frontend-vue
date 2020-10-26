<template>
  <div>
    <b-container fluid>
      <StaffTable
        :staff-arr="staffArr"
        @deleteStaff="deleteStaff($event)"
        @updateStaff="updateStaff($event)"
      ></StaffTable>
      <b-button variant="outline-primary" @click="refreshTable">fresh</b-button>
    </b-container>
  </div>
</template>

<script>
import StaffTable from '@/components/StaffTable.vue';
import axios from 'axios';
import globalVariant from '@/components/GlobalVariant.vue';

export default {
  name: 'ListStaffs',
  components: {
    StaffTable
  },
  data: function() {
    return {
      staffArr: []
    };
  },
  methods: {
    refreshTable: async function() {
      let staffArrTemp;

      await axios
        .get(`${globalVariant.baseUrl}/${globalVariant.paths.queryAllStaffs}`)
        .then(response => {
          staffArrTemp = response.data.staffs.slice();
        })
        .catch(error => {
          console.log(error);
          this.$router.push('/serverError');
        });

      this.staffArr = staffArrTemp;
    },
    deleteStaff: async function(id) {
      await axios
        .get(`${globalVariant.baseUrl}/${globalVariant.paths.deleteStaff}`, {
          params: {
            id
          }
        })
        .catch(error => {
          console.log(error);
          this.$router.push('/serverError');
        });

      await this.refreshTable();
    },
    updateStaff: async function(id) {
      let targetStaffObject = {};
      let updateResult = false;

      await axios
        .get(`${globalVariant.baseUrl}/${globalVariant.paths.modifyStaff}`, {
          params: {
            id
          }
        })
        .then(response => {
          targetStaffObject = response.data.target;
          updateResult = true;
        })
        .catch(error => {
          console.log(error);
          this.$router.push('/serverError');
        });

      if (updateResult) {
        targetStaffObject.hobbies = targetStaffObject.hobbies.split(',');
        console.log(JSON.stringify(targetStaffObject));
        await this.$router.push({
          name: 'UpdateStaff',
          params: { targetStaffObject }
        });
      }
    }
  },
  created: async function() {
    await this.refreshTable();
  }
};
</script>

<style scoped></style>
