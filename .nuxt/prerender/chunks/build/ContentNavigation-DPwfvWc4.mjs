import { u as useContentDisabled, a as useAsyncData, q as queryContent, w as withContentBase, e as encodeQueryParams, b as addPrerenderPath, s as shouldUseClientDB, j as jsonStringify } from './query-DGjaTtaU.mjs';
import { V as useState, U as hash, R as useRuntimeConfig } from './server.mjs';
import { u as useContentPreview } from './preview-CnUVFxMb.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BTWhkcaa.mjs';
import { defineComponent, toRefs, computed, useSlots, useSSRContext, h } from 'file:///Users/christoph/Desktop/try-out%202/node_modules/.pnpm/vue@3.4.35_typescript@5.5.4/node_modules/vue/index.mjs';
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

const fetchContentNavigation = async (queryBuilder) => {
  const { content } = useRuntimeConfig().public;
  if (typeof (queryBuilder == null ? void 0 : queryBuilder.params) !== "function") {
    queryBuilder = queryContent(queryBuilder);
  }
  const params = queryBuilder.params();
  const apiPath = content.experimental.stripQueryParameters ? withContentBase(`/navigation/${`${hash(params)}.${content.integrity}`}/${encodeQueryParams(params)}.json`) : withContentBase(`/navigation/${hash(params)}.${content.integrity}.json`);
  {
    addPrerenderPath(apiPath);
  }
  if (shouldUseClientDB()) {
    const generateNavigation = await import('./client-db-u9EKDS_a.mjs').then((m) => m.generateNavigation);
    return generateNavigation(params);
  }
  const data = await $fetch(apiPath, {
    method: "GET",
    responseType: "json",
    params: content.experimental.stripQueryParameters ? void 0 : {
      _params: jsonStringify(params),
      previewToken: useContentPreview().getPreviewToken()
    }
  });
  if (typeof data === "string" && data.startsWith("<!DOCTYPE html>")) {
    throw new Error("Not found");
  }
  return data;
};
const ContentNavigation = defineComponent({
  name: "ContentNavigation",
  props: {
    /**
     * A query to be passed to `fetchContentNavigation()`.
     */
    query: {
      type: Object,
      required: false,
      default: void 0
    }
  },
  async setup(props) {
    const {
      query
    } = toRefs(props);
    const queryBuilder = computed(() => {
      var _a;
      if (typeof ((_a = query.value) == null ? void 0 : _a.params) === "function") {
        return query.value.params();
      }
      return query.value;
    });
    if (!queryBuilder.value && useState("dd-navigation").value) {
      const { navigation: navigation2 } = useContentDisabled();
      return { navigation: navigation2 };
    }
    const { data: navigation } = await useAsyncData(
      `content-navigation-${hash(queryBuilder.value)}`,
      () => fetchContentNavigation(queryBuilder.value)
    );
    return { navigation };
  },
  /**
   * Navigation empty fallback
   * @slot empty
   */
  render(ctx) {
    const slots = useSlots();
    const { navigation } = ctx;
    const renderLink = (link) => h(__nuxt_component_0, { to: link._path }, () => link.title);
    const renderLinks = (data, level) => h(
      "ul",
      level ? { "data-level": level } : null,
      data.map((link) => {
        if (link.children) {
          return h("li", null, [renderLink(link), renderLinks(link.children, level + 1)]);
        }
        return h("li", null, renderLink(link));
      })
    );
    const defaultNode = (data) => renderLinks(data, 0);
    return (slots == null ? void 0 : slots.default) ? slots.default({ navigation, ...this.$attrs }) : defaultNode(navigation);
  }
});
const _sfc_main = ContentNavigation;
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+content@2.13.2_nuxt@3.12.4_rollup@4.20.0_vue@3.4.35/node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentNavigation-DPwfvWc4.mjs.map
