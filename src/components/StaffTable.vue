<template>
  <div>
    <b-table :fields="fields" :items="staffArr" outlined striped>
      <template #cell(operations)="data">
        <b-button
          size="sm"
          variant="outline-info"
          @click="$emit('updateStaff', data.item.id)"
          >update</b-button
        >
        |
        <b-button
          size="sm"
          variant="outline-danger"
          @click="$emit('deleteStaff', data.item.id)"
          >delete</b-button
        >
      </template>
    </b-table>
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
        'id',
        { key: 'name', sortable: true },
        'password',
        'gender',
        { key: 'age', sortable: true },
        'contactInfo',
        'hobbies',
        'operations'
      ]
    };
  }
};
</script>

<style scoped></style>
