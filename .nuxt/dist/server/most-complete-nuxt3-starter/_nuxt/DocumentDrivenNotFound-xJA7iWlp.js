import { defineComponent, h, useSSRContext } from "vue";
const _sfc_main = defineComponent({
  name: "DocumentDrivenNotFound",
  render() {
    return h("div", "Document not found");
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_nuxt@3.12.4_rollup@4.20.0_vue@3.4.35/node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=DocumentDrivenNotFound-xJA7iWlp.js.map
