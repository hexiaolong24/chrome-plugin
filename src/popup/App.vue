<template>
  <div
    id="app"
    class="app"
  >
    <el-tabs
      v-model="activeTabName"
      type="border-card"
    >
      <!-- 常用推荐 -->
      <el-tab-pane
        label="常用推荐"
        name="tab-tools"
      >
        <h3
          slot="label"
          class="app__target"
        >
          <i class="el-icon-setting" /> 常用推荐
        </h3>

        <ul class="tools">
          <li
            v-for="(group, groupIndex) in tools"
            :key="groupIndex"
            class="tools__item"
            :class="group.key"
            :data-index="groupIndex"
            @click="handleOpenDevelopPage"
          >
            <span
              class="tools__item__icon"
              :style="{ backgroundImage:`url(${group.icon})` }"
            />
            {{ group.title }}
          </li>
        </ul>
      </el-tab-pane>

      <!-- 前端学院 -->
      <el-tab-pane
        lazy
        label="耿显子"
        name="tab-recommend"
      >
        <el-row>
            <el-col @click.native="handleTabClick">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="@/assets/icons/xianzi.jpg" class="image">
                    <div style="padding: 14px;">
                        <div class="bottom clearfix">
                            <el-button type="text" class="button">愿你走出半生，归来仍是少年</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
            </el-row>

      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import ajax from '@fdaciuk/ajax';
import developData from '../config/develop.json';
import {
  BASE_URL, STATIC_URL, IMG_STATIC_URL, otherBlogs, links,
} from '../config';
import { showTips } from '../utils';

export default {
  data() {
    return {
      userName: '',
      activeTabName: 'tab-tools',
      tools: [],
      otherBlogs,
      recommendationLink: links.recommendationLink,
      originData: {
        articleCategories: [],
        reporterOptions: [],
      },
      weekly: {
        data: [],
        cats: [],
        activeName: 'weekly',
      },
      article: {
        title: '',
        link: '',
        description: '',
        category: '',
        reporter: '',

      },
    };
  },
  created() {
    this.tools = developData;
  },
  methods: {
    handleOpenDevelopPage(ev) {
      if(ev.target.dataset.index == 11) {
        window.open(chrome.extension.getURL('books.html'));
      }else {
        window.open(chrome.extension.getURL(`${'develop.html?tabIndex='}${ev.target.dataset.index}`));
      }
    },

    handleTabClick() {
        window.open('http://kobeforever24.cn/');
    },
  },
};
</script>

<style>
    .image {
        width: 100%;
        display: block;
        cursor: pointer;
    }

    .app {
        width: 400px;
        margin: 10px;
    }

    .app__target {
        font-size: 16px;
    }

    /* 工具入口 */
    .tools {
        overflow: hidden;

        width: 360px;
        margin: 0 auto;
        padding-top: 10px;
    }

    .tools__item {
        font-size: 14px;
        line-height: 50px;

        float: left;

        width: 108px;
        height: 50px;
        margin: 0 5px 10px;

        cursor: pointer;
        transition: transform .2s linear;
        text-align: center;

        color: #333;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        background: #f9f9f9;
    }

    .tools__item:hover {
        font-weight: bold;

        -webkit-transform: translate3d(0, -3px, 0);
                transform: translate3d(0, -3px, 0);

        color: #1296db;
        border-color: #1296db;
        box-shadow: 0 0 6px rgba(0, 0, 0, .1), 0 4px 6px rgba(0, 0, 0, .1);
    }

    .tools__item__icon {
        line-height: 18px;

        display: inline-block;

        width: 18px;
        height: 18px;

        vertical-align: middle;

        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: cover;
    }

    .tools__item:hover .tools__item__icon {
        background-position: 100% 0;
    }

    /* 文章推荐 */
    .article-recommend__item {
        margin-bottom: 20px;
    }

    .article-recommend h4 {
        font-size: 15px;
        line-height: 40px;
    }
    .article-recommend__item__reporter {
        width: 194px;
    }

    .article-recommend__button--submit {
        float: right;
        margin: 0 auto;
    }

    .el-tabs__item {
        padding: 0 15px;
    }
</style>
