<script setup lang="ts">
import { ref } from 'vue';
import Mock from '../../src';

const getInterval = () => [
  {
    title: '生成随机字符串',
    content: Mock.Random.getString(),
  },
  {
    title: '生成随机数字',
    content: Mock.Random.getFloat(),
  },
  {
    title: '生成随机日期',
    content: Mock.Random.getDate(),
  },
  {
    title: '生成随机布尔值',
    content: Mock.Random.getBool(),
  },
  {
    title: '生成随机身份证',
    content: Mock.Person.id(),
  },
  {
    title: '生成随机手机号',
    content: Mock.Person.phone(),
  },
  {
    title: '生成随机中文名',
    content: Mock.Person.cName(),
  },
  {
    title: '生成随机英文名',
    content: Mock.Person.name(),
  },
  {
    title: '生成随机列表',
    content: Mock.list(() => Mock.Random.getInteger(1, 200), 3, 6),
  },
  {
    title: '生成随机对象',
    content: Mock.schema({
      name: ['mockString', { minLen: 2, maxLen: 5 }, [3, 6]],
      obj: ['personSleep', void 0],
    }),
  },
];

const examples = ref(getInterval());

setInterval(() => {
  examples.value = getInterval();
}, 500);
</script>

<template>
  <div>
    <div v-for="(example, index) in examples" :key="index" class="example">
      <h4>{{ example.title }}</h4>
      ：
      <h5>{{ example.content }}</h5>
    </div>
  </div>
</template>

<style scoped>
.example {
  width: 1300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
