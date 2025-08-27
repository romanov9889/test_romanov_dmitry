<template>
  <UserCardWrapper>
    <template #avatar><UserProfileIcon /></template>
    <template #name><UserName /></template>
    <template #social><UserSocial /> </template>
    <template #status><UserStatus /></template>
    <template #contacts><UserContacts /></template>
    <template #actions><UserActions /></template>
  </UserCardWrapper>
</template>

<script setup lang="ts">
  import UserContacts from './UserContacts.vue';
  import UserCardWrapper from './UserCardWrapper.vue';
  import UserProfileIcon from './UserProfileAvatar.vue';
  import UserActions from './UserActions.vue';
  import UserStatus from './UserStatus.vue';
  import UserSocial from './UserSocial.vue';
  import UserName from './UserName.vue';
</script>

<style lang="scss" scoped></style>

