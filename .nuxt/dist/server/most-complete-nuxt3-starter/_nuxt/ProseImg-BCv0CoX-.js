import { Y as createError, R as useRuntimeConfig, a0 as withLeadingSlash, O as withTrailingSlash, N as joinURL } from "../../server.mjs";
import { defineComponent, computed, createVNode, resolveDynamicComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderVNode } from "vue/server-renderer";
import "node:http";
import "node:https";
import "node:zlib";
import "node:stream";
import "node:buffer";
import "node:util";
import "node:url";
import "node:net";
import "node:fs";
import "node:path";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "vue-router";
import "radix3";
import "devalue";
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "gsap";
import "gsap/ScrollTrigger.js";
import "gsap/ScrollToPlugin.js";
function renderStubMessage(name) {
  throw createError({
    fatal: true,
    statusCode: 500,
    statusMessage: `${name} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`
  });
}
const NuxtImg = {
  setup: () => renderStubMessage("<NuxtImg>")
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const imgComponent = useRuntimeConfig().public.mdc.useNuxtImage ? NuxtImg : "img";
    const props = __props;
    const refinedSrc = computed(() => {
      var _a;
      if (((_a = props.src) == null ? void 0 : _a.startsWith("/")) && !props.src.startsWith("//")) {
        const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL));
        if (_base !== "/" && !props.src.startsWith(_base)) {
          return joinURL(_base, props.src);
        }
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(imgComponent)), mergeProps({
        src: unref(refinedSrc),
        alt: __props.alt,
        width: __props.width,
        height: __props.height
      }, _attrs), null), _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+mdc@0.8.3_rollup@4.20.0/node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProseImg-BCv0CoX-.js.map
