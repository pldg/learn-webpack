// https://github.com/vxna/mini-html-webpack-template/blob/master/src/index.js#L57
function generateTags(attributes = [], type = '') {
  const closing = type === ('script' || 'style') ? `></${type}>` : '>';
  return attributes
    .map(attr => `<${type}${generateAttributes(attr)}${closing}`)
    .join('');
}

// https://github.com/styleguidist/mini-html-webpack-plugin/blob/master/src/index.ts#L56
function generateAttributes(attributes = {}) {
  const stringAttributes = Object.entries(attributes);

  if (stringAttributes.length === 0) return '';

  return ' ' + stringAttributes
      .map((attr) => {
        if (attr[1] === true) return attr[0];
        return `${attr[0]}="${attr[1]}"`;
      })
      .join(' ');
}

function generateHeadTags(head = {}) {
  const {
    meta = [],
    links = [],
    style = [],
    scripts = [],
    snippet = ''
  } = head;
  let tags = '';

  // Tags will appear in html following the same order as below
  if (head) {
    if (meta) tags += generateTags(meta, 'meta');
    if (links) tags += generateTags(links, 'link');
    if (style) tags += generateTags(style, 'style');
    if (scripts) tags += generateTags(scripts, 'script');
    if (snippet) tags += snippet;
  }

  return tags;
}

function generateBodyTags(body = {}) {
  const {
    scripts = [],
    snippet = ''
  } = body;
  let tags = '';

  if (body) {
    if (scripts) tags += generateTags(scripts, 'script');
    if (snippet) tags += snippet;
  }

  return tags;
}

function generateWebpackCSSReferences(files, webpackConfig, attributes) {
  let css = '';

  for (const key in files.css) {
    if (files.cssIntegrity) {
      css += `
        <link${generateAttributes(attributes)}
          href="${files.css[key]}"
          rel="stylesheet"
          integrity="${files.cssIntegrity[key]}"
          crossorigin="${webpackConfig.output.crossOriginLoading}"/>`;
    } else {
        css += `<link${generateAttributes(attributes)}
          href="${files.css[key]}"
          rel="stylesheet"/>`;
    }
  }

  return css;
}

function generateWebpackJSReferences(files, webpackConfig, attributes) {
  let js = '';

  for (const key in files.js) {
    if (files.jsIntegrity) {
      js += `<script${generateAttributes(attributes)}
        src="${files.js[key]}"
        type="text/javascript"
        integrity="${files.jsIntegrity[key]}"
        crossorigin="${webpackConfig.output.crossOriginLoading}"></script>`;
    } else {
      js += `<script${generateAttributes(attributes)}
      src="${files.js[key]}"
      type="text/javascript"></script>`;
    }
  }

  return js;
}

module.exports = {
  generateAttributes,
  generateHeadTags,
  generateBodyTags,
  generateWebpackCSSReferences,
  generateWebpackJSReferences
}