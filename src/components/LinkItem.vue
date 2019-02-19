// This is a simple VueJS component that expects a 
// link in its props and renders the link’s description and url.

<template>
  <div>{{link.description}} ({{link.url}})</div>
</template>

<script>
  export default {
    name: 'LinkItem',
    props: ['link']
  }
</script>