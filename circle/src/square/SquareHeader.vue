<template>
    <div class="mod-banner mod-banner-circle fixed">
        <div class="banner-ctrl green">
            <i class="G-ico-circle ico-logo"></i>
            <div class="title">话题圈</div>
            <a href="javascript:;" class="fr">
                <i class="G-ico-circle ico-search"></i>
                <i class="G-ico-circle ico-usr">
                    <span class="red-round"></span>
                </i>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
    .mod-banner-circle {
        &.fixed {
            position: fixed;
            width: 100%;
            z-index: 99;
            height: 48px;
            top: 0;
            left: 0;
            background: #fafafa;
        }

        .banner-ctrl {
            &.green {
                width: 100%;
                top: 0;
                left: 0;
                z-index: 10;
                box-sizing: border-box;
                height: 48px;
                line-height: 48px;
                position: absolute;
                background: #36b70a;

                .ico-logo {
                    top: -2px;
                    font-size: 40px;
                    opacity: 0.9;
                }

                .G-ico-circle {
                    color: #fff;
                    &:before {
                        display: block;
                        box-sizing: border-box;
                        width: 100%;
                        height: 100%;
                    }
                    &.ico-logo:before {
                        content: '\00C0';
                    }
                }

                .title {
                    left: 0;
                    padding-left: 45px;
                    text-align: left;
                    color: #fff;
                }

                a {
                    color: #fff;
                    font-size: 16px;
                    display: block;
                    min-width: 44px;
                    height: 100%;
                    box-sizing: border-box;
                    width: 30%;
                    z-index: 2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 49px;
                }
            }

            .fr i:last-child {
                padding: 0 16px 0 0;
                margin: 0 -16px 0 0;
            }
            .G-ico-circle {
                position: relative;
                top: 0;
                font-size: 36px;
                margin: 0 -12px;
                padding: 0 24px;
            }
            .ico-usr {
                position: relative;
                top: 0;
                font-size: 36px;
            }

            .title {
                position: absolute;
                font-size: 16px;
                overflow: hidden;
                top: 0;
                width: 50%;
                padding-right: 20px;
                box-sizing: border-box;
                height: 100%;
                z-index: 1;
            }

            .fr {
                position: absolute;
                top: 0;
                right: 0;
                text-align: right;
                padding-right: 16px;
            }
        }
    }

    .G-ico-circle {
        &.ico-search:before {
            content: 'M';
        }
        &.ico-usr:before {
            content: "\004E";
        }
    }
</style>
