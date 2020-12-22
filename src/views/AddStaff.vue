<template>
  <div class="container">
    <StaffForm
      :father-form-data.sync="formData"
      @submit-staff="submitInsert"
    ></StaffForm>
  </div>
</template>

<script>
import StaffForm from '@/components/StaffForm';
import { updateStaff } from '@/api/staff';

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
        department: 'market',
      },
    };
  },
  methods: {
    submitInsert: async function() {
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
