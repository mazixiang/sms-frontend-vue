<template>
  <div class="container-fluid">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col" v-for="(field, index) in fields" :key="index">
            {{ field }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(staff, index) in staffArr" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ staff.id }}</td>
          <td>{{ staff.name }}</td>
          <td>{{ staff.password }}</td>
          <td>{{ staff.gender }}</td>
          <td>{{ staff.age }}</td>
          <td>{{ staff.contactInfo }}</td>
          <td>{{ staff.hobbies }}</td>
          <td>
            <button
              class="btn btn-outline-info btn-sm"
              @click="$emit('update-staff', staff.id)"
            >
              update
            </button>
            |
            <button
              class="btn btn-outline-danger btn-sm"
              @click="$emit('delete-staff', staff.id)"
            >
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button
      class="btn btn-outline-primary btn-block"
      @click="$emit('refresh-table')"
    >
      refresh this table
    </button>
  </div>
</template>

<script>
export default {
  name: 'StaffTable',
  props: {
    staffArr: Array
  },
  data: function() {
    return {
      fields: [
        'Index',
        'ID',
        'Name',
        'Password',
        'Gender',
        'Age',
        'Contact Info',
        'Hobbies',
        'Operations'
      ]
    };
  }
};
</script>

<style scoped></style>
