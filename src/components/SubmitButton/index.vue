<template>
  <el-button
      :loading="isLoading"
      type="primary"
      :icon="icon"
      :disabled="isDisabled"
      @click="confirm">{{text}}
  </el-button>
</template>

<script>
  export default {
    name: "SubmitButton",
    props: {
      text: { // 按钮文字
        type: String,
        default: '确 定'
      },
      icon: { // 按钮图标
        type: String,
        default: ''
      }
    },
    data() {
      return {
        isLoading: false,
        isDisabled: false,
      }
    },
    methods: {
      ban() { // 禁用
        this.isDisabled = true
      },
      cancelBan() { // 取消禁用
        this.isDisabled = false
      },
      confirm() {
        this.$emit('submit');
      },
      start() {
        this.isLoading = true;
      },
      stop() {
        this.isLoading = false
      }
    }
  }
</script>
