<template>
  <div class="container">
    <div class="home">
      <p>
        Staff Management System is a system to manage staffs' information.<br />
        Touch or click <router-link to="/add">Add Staff</router-link> to add a
        staff, or <router-link to="/list">List Staffs</router-link> to view all
        staffs.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
