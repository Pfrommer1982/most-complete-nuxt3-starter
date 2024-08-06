import { defineComponent, useSSRContext } from 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/vue@3.4.35_typescript@5.5.4/node_modules/vue/index.mjs';
import { ssrRenderSlot } from 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/vue@3.4.35_typescript@5.5.4/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_nuxt@3.12.4_rollup@4.20.0_vue@3.4.35/node_modules/@nuxt/content/dist/runtime/components/Prose/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseCode-fI4xiqOM.mjs.map
