<template>
    <div class="flex flex-row">
        <div class="flex-1">Mission</div>
        <div class="flex-1">
            <!-- <ClinicalTabs /> -->
        </div>
        
        <!-- Add your template content here -->
    </div>
</template>

<script>
import ClinicalTabs from '../tabs/ClinicalTabs.vue';

export default {
    name: 'ClinicalDetail',
    data() {
        return {
            // Add your component data here
        };
    },
    methods: {
        // Add your component methods here
    },
    mounted() {
        // Add your mounted logic here
    },
    components: {
        ClinicalTabs
    }
};
</script>

<style scoped>
.clinical-detail {
    /* Add your styles here */
}
</style>