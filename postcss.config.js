module.exports = {
  plugins: {
    autoprefixer: {
      /* browsers: ["Android >= 4.0", "iOS >= 7"] */
    },
    'postcss-pxtorem': {
      rootValue: 16, // 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
      unitPrecision: 5, // 精确到小数点后几位
      propList: ['*'], // 指定转换的属性
      selectorBlackList: [], // 指定不转换的属性
      replace: true,
      mediaQuery: true, // 媒体查询内是否转换
      minPixelValue: 0 // 小于指定数值不转换
    }
  }
}
