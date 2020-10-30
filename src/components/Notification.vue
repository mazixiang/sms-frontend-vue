<template>
  <div class="container">
    <div :class="`alert alert-${this.type}`">
      <h1>{{ title }}</h1>
      <hr />
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type', 'title', 'message']
};
</script>
