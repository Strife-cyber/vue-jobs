<script setup>
    import hero from '../components/hero.vue';
    import home_cards from '../components/home_cards.vue';
    import job_listings from '../components/job_listings.vue';
</script>

<template>
    <hero/>
    <home_cards/>
    <job_listings limit="3" :showButton="true"/>
</template>