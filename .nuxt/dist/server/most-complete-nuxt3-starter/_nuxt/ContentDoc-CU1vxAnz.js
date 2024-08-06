import { M as useRoute, N as joinURL, O as withTrailingSlash, P as withoutTrailingSlash, Q as hasProtocol, R as useRuntimeConfig } from "../../server.mjs";
import { unref, watch, defineComponent, useSlots, h, useSSRContext } from "vue";
import { u as useHead } from "./vue.f36acd1f-kFyfOrLL.js";
import _sfc_main$2 from "./ContentRenderer-BB1IMM1p.js";
import _sfc_main$1 from "./ContentQuery-IRRXof1D.js";
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
import "./ContentRendererMarkdown-5GewgL-c.js";
import "./index-FGi92GG-.js";
import "./node-04k6j4dz.js";
import "./preview-CnUVFxMb.js";
import "./query-DGjaTtaU.js";
const useContentHead = (_content, to = useRoute()) => {
  const content = unref(_content);
  const config = useRuntimeConfig();
  const refreshHead = (data = content) => {
    if (!to.path || !data) {
      return;
    }
    const head = Object.assign({}, (data == null ? void 0 : data.head) || {});
    head.meta = [...head.meta || []];
    head.link = [...head.link || []];
    const title = head.title || (data == null ? void 0 : data.title);
    if (title) {
      head.title = title;
      if (!head.meta.some((m) => m.property === "og:title")) {
        head.meta.push({
          property: "og:title",
          content: title
        });
      }
    }
    const host = config.public.content.host;
    if (host) {
      const _url = joinURL(host ?? "/", config.app.baseURL, to.fullPath);
      const url = config.public.content.trailingSlash ? withTrailingSlash(_url) : withoutTrailingSlash(_url);
      if (!head.meta.some((m) => m.property === "og:url")) {
        head.meta.push({
          property: "og:url",
          content: url
        });
      }
      if (!head.link.some((m) => m.rel === "canonical")) {
        head.link.push({
          rel: "canonical",
          href: url
        });
      }
    }
    const description = (head == null ? void 0 : head.description) || (data == null ? void 0 : data.description);
    if (description && head.meta.filter((m) => m.name === "description").length === 0) {
      head.meta.push({
        name: "description",
        content: description
      });
    }
    if (description && !head.meta.some((m) => m.property === "og:description")) {
      head.meta.push({
        property: "og:description",
        content: description
      });
    }
    const image = (head == null ? void 0 : head.image) || (data == null ? void 0 : data.image);
    if (image && head.meta.filter((m) => m.property === "og:image").length === 0) {
      if (typeof image === "string") {
        head.meta.push({
          property: "og:image",
          content: host && !hasProtocol(image) ? new URL(joinURL(config.app.baseURL, image), host).href : image
        });
      }
      if (typeof image === "object") {
        const imageKeys = [
          "src",
          "secure_url",
          "type",
          "width",
          "height",
          "alt"
        ];
        for (const key of imageKeys) {
          if (key === "src" && image.src) {
            const isAbsoluteURL = hasProtocol(image.src);
            const imageURL = isAbsoluteURL ? image.src : joinURL(config.app.baseURL, image.src ?? "/");
            head.meta.push({
              property: "og:image",
              content: host && !isAbsoluteURL ? new URL(imageURL, host).href : imageURL
            });
          } else if (image[key]) {
            head.meta.push({
              property: `og:image:${key}`,
              content: image[key]
            });
          }
        }
      }
    }
    {
      useHead(head);
    }
  };
  watch(() => unref(_content), refreshHead, { immediate: true });
};
const ContentDoc = defineComponent({
  name: "ContentDoc",
  props: {
    /**
     * Renderer props
     */
    /**
     * The tag to use for the renderer element if it is used.
     * @default 'div'
     */
    tag: {
      type: String,
      required: false,
      default: "div"
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
     * Query props
     */
    /**
     * The path of the content to load from content source.
     * @default useRoute().path
     */
    path: {
      type: String,
      required: false,
      default: void 0
    },
    /**
     * A query builder params object to be passed to <ContentQuery /> component.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    },
    /**
     * Whether or not to map the document data to the `head` property.
     */
    head: {
      type: Boolean,
      required: false,
      default: void 0
    }
  },
  /**
   * Document empty fallback
   * @slot empty
   */
  /**
   * Document not found fallback
   * @slot not-found
   */
  render(ctx) {
    const { contentHead } = useRuntimeConfig().public.content;
    const slots = useSlots();
    const { tag, excerpt, path, query, head } = ctx;
    const shouldInjectContentHead = head === void 0 ? contentHead : head;
    const contentQueryProps = {
      ...query || {},
      path: path || (query == null ? void 0 : query.path) || withTrailingSlash(useRoute().path),
      find: "one"
    };
    const emptyNode = (slot, data) => h("pre", null, JSON.stringify({ message: "You should use slots with <ContentDoc>", slot, data }, null, 2));
    return h(
      _sfc_main$1,
      contentQueryProps,
      {
        // Default slot
        default: (slots == null ? void 0 : slots.default) ? ({ data, refresh, isPartial }) => {
          var _a;
          if (shouldInjectContentHead) {
            useContentHead(data);
          }
          return (_a = slots.default) == null ? void 0 : _a.call(slots, { doc: data, refresh, isPartial, excerpt, ...this.$attrs });
        } : ({ data }) => {
          if (shouldInjectContentHead) {
            useContentHead(data);
          }
          return h(
            _sfc_main$2,
            { value: data, excerpt, tag, ...this.$attrs },
            // Forward local `empty` slots to ContentRenderer if it is used.
            { empty: (bindings) => (slots == null ? void 0 : slots.empty) ? slots.empty(bindings) : emptyNode("default", data) }
          );
        },
        // Empty slot
        empty: (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots.empty) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document is empty, overwrite this content with #empty slot in <ContentDoc>.");
        },
        // Not Found slot
        "not-found": (bindings) => {
          var _a;
          return ((_a = slots == null ? void 0 : slots["not-found"]) == null ? void 0 : _a.call(slots, bindings)) || h("p", null, "Document not found, overwrite this content with #not-found slot in <ContentDoc>.");
        }
      }
    );
  }
});
const _sfc_main = ContentDoc;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_nuxt@3.12.4_rollup@4.20.0_vue@3.4.35/node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ContentDoc-CU1vxAnz.js.map
