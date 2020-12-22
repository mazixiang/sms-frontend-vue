<template>
  <div class="container-fluid">
    <StaffTable
      :staff-arr="staffArr"
      @update-staff="updateStaff($event)"
      @delete-staff="deleteStaff($event)"
      @refresh-table="refreshTable"
    ></StaffTable>
  </div>
</template>

<script>
import StaffTable from '@/components/StaffTable.vue';
import { deleteStaff, queryAllStaffs } from '@/api/staff';

export default {
  name: 'ListStaffs',
  components: {
    StaffTable,
  },
  data: function() {
    return {
      staffArr: [],
    };
  },
  methods: {
    refreshTable: async function() {
      await queryAllStaffs().then(staffs => {
        this.staffArr = staffs.slice();
      });
    },
    deleteStaff: async function(id) {
      await deleteStaff(id);
      await this.refreshTable();
    },
    updateStaff: async function(id) {
      await this.$router.push({
        name: 'UpdateStaff',
        params: { id },
      });
    },
  },
  created: async function() {
    await this.refreshTable();
  },
};
</script>

<style scoped></style>
