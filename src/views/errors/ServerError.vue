<template>
  <div class="container">
    <Notification
      type="danger"
      title="Server Error"
      message="An error occured! Please contact the administrator"
    ></Notification>
  </div>
</template>

<script>
import Notification from '@/components/Notification';
export default {
  name: 'ServerError',
  components: {
    Notification
  }
};
</script>

<style scoped></style>
