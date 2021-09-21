<template>
  <section class="code-box">
    <section class="code-box__demo">
      <slot name="component" />
    </section>
    <section class="code-box__meta">
      <slot name="description" />
      <div class="code-box__meta-tools">
        <el-tooltip effect="dark" content="复制">
          <i class="el-icon-document-copy"></i>
        </el-tooltip>
        <el-tooltip effect="dark" content="代码" placement="top-start">
          <i class="el-icon-magic-stick" @click="codeExpand = !codeExpand"></i>
        </el-tooltip>
      </div>
    </section>
    <transition appear name="el-fade-in-linear">
      <section v-show="codeExpand" v-html="getCode()" class="code-box__code" />
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    jsfiddle: Object,
    isIframe: Boolean
  },
  data() {
    return {
      codeExpand: false
    }
  },
  computed: {
    sourceCode() {
      return this.jsfiddle && decodeURIComponent(escape(window.atob(this.jsfiddle.sourceCode)))
    }
  },
  methods: {
    getCode() {
      const { $slots } = this
      console.log(this)
      return decodeURIComponent(
        escape(window.atob(($slots.code && $slots.code[0] && $slots.code[0].text) || ''))
      )
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-box {
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 0 0 16px;
    border: 1px solid #ebedf0;
    border-radius: 2px;
    transition: all 0.2s;

    &__demo {
      padding: 42px 24px 50px;
      color: rgba(0, 0, 0, 0.65);
      border-bottom: 1px solid #ebedf0;
    }

    &__meta {
      position: relative;

      > h4 {
        position: absolute;
        top: -16px;
        margin: 0;
        margin-left: 16px;
        color: #777;
        font-size: 14px;
        background: #fff;

        .anchor {
          opacity: 0;
          transition: opacity 0.2s;
        }

        &:hover {
          .anchor {
            opacity: 1;
          }
        }
      }

      > p {
        box-sizing: border-box;
        width: 100%;
        margin: 0.5em 0;
        padding: 18px 24px 12px;
        font-size: 12px;
        word-break: break-word;
      }

      &-tools {
        margin-bottom: 10px;
        text-align: center;

        .el-tooltip {
          margin-right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }

    &__code {
      overflow: hidden;
    }
  }
</style>

<style lang="scss">

.language-html {
  overflow: auto;
}

pre {
  width: auto;
  margin: 0;
}

pre code {
  display: block;
  padding: 16px 32px;
  color: #314659;
  font-size: 14px;
  font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  line-height: 2;
  white-space: pre;
  background: white;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
}

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  line-height: 1.5;
  direction: ltr;
  white-space: pre;
  text-align: left;
  word-wrap: normal;
  word-break: normal;
  word-spacing: normal;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  background: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  margin: 16px 0;
  padding: 12px 20px;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f2f4f5;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  white-space: normal;
  border-radius: 0.3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #f81d22;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #0b8235;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #0b8235;
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #008dff;
}

.token.function {
  color: #f81d22;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

</style>
