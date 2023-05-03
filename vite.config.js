import vue from '@vitejs/plugin-vue'
// import usePluginImport from 'vite-plugin-importer';
import * as path from 'path'
// @see https://cn.vitejs.dev/config/
export default ({}) => {



  // const rollupOptions = {
  //   output: {
  //     entryFileNames: `gva/gin-vue-admin-[name].${timestamp}.js`,
  //     chunkFileNames: `js/gin-vue-admin-[name].${timestamp}.js`,
  //     assetFileNames: `assets/gin-vue-admin-[name].${timestamp}.[ext]`
  //   }
  // }

  const optimizeDeps = {}

  const alias = {
    '@': path.resolve(__dirname, './src'),
    'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
  }

  const esbuild = {}

  return {
    base: './', // index.html文件所在位置
    root: './', // js导入的资源路径，src
    resolve: {
      alias,
    },
    define: {
      'process.env': {}
    },
    build: {
      target: 'es2017',
      minify: 'terser', // 是否进行压缩,boolean | 'terser' | 'esbuild',默认使用terser
      manifest: false, // 是否产出manifest.json
      sourcemap: false, // 是否产出sourcemap.json
      outDir: 'dist', // 产出目录
      // rollupOptions,
    },
    esbuild,
    optimizeDeps,
    plugins: [
      vue()
    ],
    css: {
      preprocessorOptions: {
        less: {
          // 支持内联 JavaScript
          javascriptEnabled: true,
        }
      }
    },
  }
}
