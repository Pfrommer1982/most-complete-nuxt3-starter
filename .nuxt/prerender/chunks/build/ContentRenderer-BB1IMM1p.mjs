import { defineComponent, watch, useSlots, h, useSSRContext } from 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/vue@3.4.35_typescript@5.5.4/node_modules/vue/index.mjs';
import _sfc_main$1 from './ContentRendererMarkdown-5GewgL-c.mjs';
import './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/renderer.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/vue-bundle-renderer@2.1.0/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/h3@1.12.0/node_modules/h3/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/devalue@5.0.0/node_modules/devalue/index.js';
import '../runtime.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/ofetch@1.3.4/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/destr@2.0.3/node_modules/destr/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unenv@1.10.0/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/scule@1.3.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/defu@6.1.4/node_modules/defu/dist/defu.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unstorage@1.10.2_ioredis@5.4.1/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/radix3@1.1.2/node_modules/radix3/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/pathe@1.1.2/node_modules/pathe/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unified@11.0.5/node_modules/unified/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/mdast-util-to-string@4.0.0/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/micromark@4.0.0/node_modules/micromark/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/micromark-util-character@2.1.0/node_modules/micromark-util-character/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/micromark-util-chunked@2.0.0/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/micromark-util-resolve-all@2.0.0/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/micromark-util-sanitize-uri@2.0.0/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/slugify@1.6.6/node_modules/slugify/slugify.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/remark-rehype@11.1.0/node_modules/remark-rehype/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/remark-mdc@3.2.1/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/remark-emoji@5.0.1/node_modules/remark-emoji/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/remark-gfm@4.0.0/node_modules/remark-gfm/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/rehype-sort-attribute-values@5.0.0/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/rehype-sort-attributes@5.0.0/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/detab@3.0.2/node_modules/detab/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/hast-util-to-string@3.0.0/node_modules/hast-util-to-string/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/github-slugger@2.0.0/node_modules/github-slugger/index.js';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/vue@3.4.35_typescript@5.5.4/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/@unhead+ssr@1.9.16/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unhead@1.9.16/node_modules/unhead/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/@unhead+shared@1.9.16/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/vue-router@4.4.2_vue@3.4.35/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/firebase@10.12.5/node_modules/firebase/app/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/firebase@10.12.5/node_modules/firebase/auth/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/firebase@10.12.5/node_modules/firebase/firestore/dist/index.mjs';
import 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/dist/gsap.js';
import './index-FGi92GG-.mjs';
import './node-04k6j4dz.mjs';
import './preview-CnUVFxMb.mjs';

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

export { _sfc_main as default };
//# sourceMappingURL=ContentRenderer-BB1IMM1p.mjs.map
