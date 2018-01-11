<template>
    <div class="mod-circle-square">
        <div class="mod-nav">
            <SquareTabItem v-for="(item, index) in tabList" :key="index" :text="item" :curTab="curTab" v-on:TAB_CHANGE="tabChange"/>
        </div>
        <div>
            <div v-show="isShowDiscovery">
                <CircleItem v-for="(item, index) in circleList" :key="index" :circle="item" />
            </div>
            <ul v-show="isShowCircleList">
                <CircleItem v-for="(item, index) in circleList" :key="index" :circle="item" />
            </ul>
        </div>
    </div>
</template>

<script>
    import SquareTabItem from './SquareTabItem.vue';
    import CircleItem from '../components/CircleItem.vue'
    import * as request from '../lib/request';

    export default {
        components: {
            SquareTabItem,
            CircleItem
        },
        methods: {
            tabChange: function (data) {
                this.curTab = data;
            }
        },
        data () {
            return {
                tabList: ['动态', '发现', '圈子'],
                curTab: '发现',
                circleList: []
            }
        },
        computed: {
            isShowCircleList: function () {
                return this.curTab === '圈子';
            },
            isShowDiscovery: function () {
                return this.curTab === '发现';
            }
        },
        mounted() {
            request.getCircleList().then((res) => {
                let vCircleList = res && res.data && res.data.vCircleList;
                this.circleList.push(...vCircleList);
                console.log(res);
            }).catch((res) => {
                console.log(res);
            });
        }
    }
</script>

<style lang="scss">
    .mod-circle-square {
        position: relative;
        box-sizing: border-box;
        padding-top: 88px;
    }

    .mod-nav {
        position: fixed;
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #fff;
        top: 48px;
        z-index: 3;
    }
</style>