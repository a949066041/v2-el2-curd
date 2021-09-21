const Prism = require('prismjs')
require('prismjs/components/prism-jsx.min.js')
require('prismjs/components/prism-bash.min.js')
require('prismjs/components/prism-json.min.js')
require('prismjs/components/prism-diff.min.js')
require('prismjs/components/prism-less.min.js')
const Token = require('markdown-it/lib/token')
const cheerio = require('cheerio')

const fetch = (str, tag, scoped) => {
  const $ = cheerio.load(str, {
    decodeEntities: false,
    xmlMode: true
  })
  if (!tag) {
    return str
  }
  if (tag === 'style') {
    return scoped
      ? $(`${tag}[scoped]`).html()
      : $(`${tag}`)
        .not(`${tag}[scoped]`)
        .html()
  }
  return $(tag).html()
}

/**
 * `{{ }}` => `<span>{{</span> <span>}}</span>`
 * @param  {string} str
 * @return {string}
 */
const replaceDelimiters = function(str) {
  return str.replace(/({{|}})/g, '<span>$1</span>')
}

/**
 * renderHighlight
 * @param  {string} str
 * @param  {string} lang
 */

const renderHighlight = function(str, lang) {
  if (!(lang && Prism.languages[lang])) {
    return ''
  }
  try {
    return replaceDelimiters(Prism.highlight(str, Prism.languages[lang], lang))
  } catch (err) {}
}

const md = require('markdown-it')('default', {
  html: true,
  breaks: true,
  highlight: renderHighlight
}).use(require('markdown-it-anchor'), {
  level: 2,
  slugify: string =>
    string
      .trim()
      .split(' ')
      .join('-'),
  permalink: true,
  // renderPermalink: (slug, opts, state, permalink) => {},
  permalinkClass: 'anchor',
  permalinkSymbol: '#',
  permalinkBefore: false
})
// md.renderer.rules.fence = wrap(md.renderer.rules.fence)
// eslint-disable-next-line prefer-regex-literals
const cnReg = new RegExp('<(cn)(?:[^<]|<)+</\\1>', 'g')
// eslint-disable-next-line prefer-regex-literals
const usReg = new RegExp('<(us)(?:[^<]|<)+</\\1>', 'g')
md.core.ruler.push('update_template', function replace({ tokens }) {
  let cn = ''
  let us = ''
  let template = ''
  let script = ''
  let style = ''
  let scopedStyle = ''
  let code = ''
  let sourceCode = ''
  tokens.forEach(token => {
    if (token.type === 'html_block') {
      if (token.content.match(cnReg)) {
        cn = fetch(token.content, 'cn')
        token.content = ''
      }
      if (token.content.match(usReg)) {
        us = fetch(token.content, 'us')
        token.content = ''
      }
    }
    if (token.type === 'fence' && token.info === 'vue' && token.markup === '```') {
      sourceCode = token.content
      code = '```html\n' + token.content + '```'
      template = fetch(token.content, 'template')
      script = fetch(token.content, 'script')
      style = fetch(token.content, 'style')
      scopedStyle = fetch(token.content, 'style', true)
      token.content = ''
      token.type = 'html_block'
    }
  })
  if (template) {
    let jsfiddle = {
      us,
      cn,
      sourceCode: Buffer.from(sourceCode).toString('base64')
    }
    jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle))
    const codeHtml = code ? md.render(code.replace(/@/g, '__at__')).replace(/__at__/g, '@') : ''
    const cnHtml = cn ? md.render(cn) : ''
    let newContent = `
      <template>
        <demo-box :jsfiddle="${jsfiddle}">
          <template slot="component">${template}</template>
          <template slot="description">${cnHtml}</template>
          <template slot="code">${Buffer.from(codeHtml).toString('base64')}</template>
        </demo-box>
      </template>`
    newContent += script
      ? `
      <script>
      ${script || ''}
      </script>
      `
      : ''
    newContent += style ? `<style>${style || ''}</style>` : ''
    newContent += scopedStyle ? `<style scoped>${scopedStyle || ''}</style>` : ''
    const t = new Token('html_block', '', 0)
    t.content = newContent
    tokens.push(t)
  }
})

module.exports = md
