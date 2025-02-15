<template>
    <Tabs default-value="reviews" class="w-[600px]">
        <TabsList class="grid w-full grid-cols-3">
            <TabsTrigger value="reviews" @click="selectTab('reviews')">
                My Reviews
            </TabsTrigger>
            <TabsTrigger value="reviewed" @click="selectTab('reviewed')">
                Reviewed
            </TabsTrigger>
            <TabsTrigger value="required" @click="selectTab('required')">
                Required To Review
            </TabsTrigger>
        </TabsList>
    </Tabs>
</template>

<script>
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default {
    data() {
        return {
            selectedTab: 'reviews'
        };
    },
    methods: {
        selectTab(tab) {
            if(this.selectedTab === tab) return;
            this.selectedTab = tab;
        }
    },
    components: {
        Tabs, TabsList, TabsTrigger
    }
};
</script>

<style scoped>
.clinical-tabs {
    /* Add your styles here */
}
</style>