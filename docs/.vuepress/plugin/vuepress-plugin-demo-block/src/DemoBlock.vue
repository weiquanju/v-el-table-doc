<template>
  <div class="demo-block">
    <div class="demo-content">
      <component :is="componentName" v-if="componentName" v-bind="$attrs" />
    </div>

    <!-- <div class="description" v-html="decode(description)" v-if="description"></div> -->
    <div :class="['tool', state.showCode ? 'showCode' : '']">
      <Github />
      <Copy @click="copyHandler" />
      <Code @click="state.showCode = !state.showCode" />
    </div>
    <div :class="['code-content', state.showCode ? 'showCode' : '']">
      <pre v-pre><code ref="refCode"></code></pre>
    </div>
    <div v-show="state.showCode" class="hidden-button" @click="state.showCode = !state.showCode">
      <div class="hidden-button-text">
        <CaretTop style="margin-right: 0.618em" />隐藏
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { writeToClipboard } from './copy';
import defaultLang from './i18n/default_lang.json';
import { getCurrentInstance, reactive, ref, onMounted } from "vue";
import {
  Code,
  Copy,
  Github,
  CaretTop,
} from './icon';
import { ElMessage } from 'element-plus'

const props = defineProps<{
  description: string;
  source: string;
  code: string;
  lang: string;
  componentName: string;
  options: any;
}>();

const decode = (str: string) => decodeURIComponent(str);
const state = reactive({
  showCode: false,
});

const refCode = ref<HTMLDivElement>(null)

const copyHandler = async () => {
  const msg:string|undefined = await writeToClipboard(decode(props.source))
  if (typeof msg !== 'undefined') {
    ElMessage.error('复制失败:' + msg)
  } else {
    ElMessage.success('复制成功')
  }
}

onMounted(() => {
  refCode.value.innerHTML = decode(props.code);
  if (!document.body.dataset.copyListener) {
    document.body.dataset.copyListener = 'true'
    document.addEventListener('copy', function (e) {
      if (clipboard.value) {
        e.clipboardData.setData('text/html', clipboard.value.toString());
      }
    });
  }

})

</script>
<style scoped lang="scss">
.demo-block {
  --br: 6px;
  box-sizing: border-box;
  margin: 1em auto;
  border: 1px solid var(--c-border);
  border-radius: var(--br);
  overflow: hidden;

  .demo-content {
    padding: 2em 2em 2em 2em;
  }

  .tool {
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    padding: 0 1em;
    border-top: 1px solid var(--c-border);
    transition: all .3s;

    :deep(svg) {
      padding: 1em 0.618em;
      cursor: pointer;
      color: var(--c-text-lightest)
    }

    &.showCode {
      border-radius: var(--br) var(--br) 0 0;
      border-bottom: 1px solid var(--code-hl-bg-color);
      background-color: var(--code-bg-color);

      :deep(svg) {
        color: var(--c-text-lightest)
      }
    }
  }

  .code-content {
    background-color: var(--code-bg-color);
    font-size: 14px;
    line-height: 1.5;
    overflow: hidden;
    max-height: 0;
    transition: all .3s;

    &.showCode {
      max-height: 100vh;
    }
  }

  .hidden-button {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding: 1em;
    cursor: pointer;
    border-top: 1px solid var(--code-hl-bg-color);
    background-color: var(--code-bg-color);
    color: var(--c-text-lightest);

    &>.hidden-button-text {
      width: 100%;
      text-align: center;
    }
  }
}
</style>