import { defineComponent, h, useSSRContext } from 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/vue@3.4.35_typescript@5.5.4/node_modules/vue/index.mjs';

const _sfc_main = defineComponent({
  name: "DocumentDrivenEmpty",
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  render({ value }) {
    return h("div", void 0, [
      h("p", "Document is empty"),
      h("p", `Add content to it by opening ${value._source}/${value._file} file.`)
    ]);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_nuxt@3.12.4_rollup@4.20.0_vue@3.4.35/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=DocumentDrivenEmpty-DwyWoblz.mjs.map
