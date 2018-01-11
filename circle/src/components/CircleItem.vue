<template>
    <li>
        <div class="thumb">
            <img :src="circle.stCircleInfo.sImage" alt=""/>
            <b></b>
        </div>
        <div class="main">
            <div class="content">
                <h3>{{circle.stCircleInfo.sCircleName}}</h3>
                <p>
                    <span>{{circle.stCircleInfo.iFollowCount}}圈友</span>
                    <span>{{circle.iTotalPostNum}}帖子</span>
                </p>
            </div>
        </div>
        <a href="javascript:;" class="num"></a>
    </li>
</template>

<script>
    export default {
        props: ['circle']
    }
</script>

<style lang="scss">
    ul {
        padding: 0 16px;
    }

    li {
        list-style: none;
        position: relative;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-align: center;

        &:first-child {
            margin-top: 0;
        }

        .thumb {
            width: 64px;
            height: 64px;
            margin: 16px 0;

            img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
                float: left;
            }
        }

        .main {
            position: relative;
            -webkit-box-flex: 1;
            margin: 16px 0 10px 12px;

            h3 {
                font-size: 16px;
                margin-bottom: 6px;
                line-height: 20px;
                color: #242424;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            &>div {
                font-size: 12px;
                color: #8f8f8f;
                line-height: 14px;
                margin-bottom: 6px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
</style>