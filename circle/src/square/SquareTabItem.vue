<template>
    <div :class="itemClass" @click="clickTab">
        <span>
            {{text}}
            <b class="G-red-dot" style="display: none;"></b>
        </span>
    </div>
</template>

<script>
    export default {
        props: ['text', 'curTab'],
        methods: {
            clickTab: function () {
                this.$emit('TAB_CHANGE', this.text);
            }
        },
        computed: {
            itemClass: function () {
                return this.text === this.curTab ? 'nav-item on' : 'nav-item';
            }
        }
    }
</script>

<style lang="scss">
    .nav-item {
        display: block;
        flex: 1;
        text-align: center;
        -webkit-box-flex: 1;
        color: #8f8f8f;

        &.on {
            color: #36b70a;
            position: relative;

            &:after {
                content: '';
                width: 64px;
                height: 2px;
                background: #36b70a;
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
            }
        }
    }
</style>