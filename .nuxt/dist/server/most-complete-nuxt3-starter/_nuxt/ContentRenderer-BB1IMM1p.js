import { defineComponent, watch, useSlots, h, useSSRContext } from "vue";
import _sfc_main$1 from "./ContentRendererMarkdown-5GewgL-c.js";
import "../../server.mjs";
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
import "vue/server-renderer";
import "./index-FGi92GG-.js";
import "./node-04k6j4dz.js";
import "./preview-CnUVFxMb.js";
const _sfc_main = defineComponent({
  name: "ContentRenderer",
  props: {
    /**
     * The document to render.
     */
    value: {
      type: Object,
      required: false,
      default: () => ({})
    },
    /**
     * Whether or not to render the excerpt.
     * @default false
     */
    excerpt: {
      type: Boolean,
      default: false
    },
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props) {
    watch(
      () => props.excerpt,
      (newExcerpt) => {
        var _a, _b, _c;
        if (newExcerpt && !((_a = props.value) == null ? void 0 : _a.excerpt)) {
          console.warn(`No excerpt found for document content/${(_b = props == null ? void 0 : props.value) == null ? void 0 : _b._path}.${(_c = props == null ? void 0 : props.value) == null ? void 0 : _c._extension}!`);
          console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature.");
        }
      },
      {
        immediate: true
      }
    );
  },
  /**
   * Content empty fallback
   * @slot empty
   */
  render(ctx) {
    var _a, _b;
    const slots = useSlots();
    const { value, excerpt, tag } = ctx;
    const markdownAST = excerpt ? value == null ? void 0 : value.excerpt : value == null ? void 0 : value.body;
    if (!((_a = markdownAST == null ? void 0 : markdownAST.children) == null ? void 0 : _a.length) && (slots == null ? void 0 : slots.empty)) {
      return slots.empty({ value, excerpt, tag, ...this.$attrs });
    }
    if (slots == null ? void 0 : slots.default) {
      return slots.default({ value, excerpt, tag, ...this.$attrs });
    }
    if ((markdownAST == null ? void 0 : markdownAST.type) === "root" && ((_b = markdownAST == null ? void 0 : markdownAST.children) == null ? void 0 : _b.length)) {
      return h(
        _sfc_main$1,
        {
          value,
          excerpt,
          tag,
          ...this.$attrs
        }
      );
    }
    return h(
      "pre",
      null,
      JSON.stringify({ message: "You should use slots with <ContentRenderer>", value, excerpt, tag }, null, 2)
    );
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_nuxt@3.12.4_rollup@4.20.0_vue@3.4.35/node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContentRenderer-BB1IMM1p.js.map
