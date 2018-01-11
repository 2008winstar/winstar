<template>
    <div id="container">
        <square-header></square-header>
        <square-tab></square-tab>
    </div>
</template>

<script>
    import SquareHeader from './square/SquareHeader.vue';
    import SquareTab from './square/SquareTab.vue';
    import * as request from './lib/request';

    export default  {
        components: {
            SquareHeader,
            SquareTab
        },
        mounted() {

        }
    }
</script>