export default {
  plugins: [
    'umi-plugin-dva',
    ['umi-plugin-routes', {
      exclude: [
        /model/,
        /service/,
        /(\w){0,}Modal/,
      ],
    }],
  ],
  loading: './PageLoadingComponent',
}
