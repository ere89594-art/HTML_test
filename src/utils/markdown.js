function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function processInline(text) {
  let result = text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
  return result
}

export function renderMarkdown(text) {
  const lines = text.split('\n')
  const output = []
  let inCodeBlock = false
  let codeContent = []
  let inList = null
  let listItems = []

  function flushList() {
    if (inList && listItems.length > 0) {
      const tag = inList === 'ul' ? 'ul' : 'ol'
      output.push(`<${tag}>${listItems.join('')}</${tag}>`)
      listItems = []
      inList = null
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        const escaped = codeContent.map(escapeHtml).join('\n')
        output.push(`<pre><code>${escaped}</code></pre>`)
        codeContent = []
        inCodeBlock = false
      } else {
        flushList()
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      codeContent.push(line)
      continue
    }

    const trimmed = line.trim()

    if (trimmed === '') {
      flushList()
      continue
    }

    if (trimmed.startsWith('---') && trimmed.replace(/-/g, '') === '') {
      flushList()
      output.push('<hr>')
      continue
    }

    const h3Match = trimmed.match(/^### (.+)/)
    if (h3Match) {
      flushList()
      output.push(`<h3>${processInline(h3Match[1])}</h3>`)
      continue
    }

    const h2Match = trimmed.match(/^## (.+)/)
    if (h2Match) {
      flushList()
      output.push(`<h2>${processInline(h2Match[1])}</h2>`)
      continue
    }

    const h1Match = trimmed.match(/^# (.+)/)
    if (h1Match) {
      flushList()
      output.push(`<h1>${processInline(h1Match[1])}</h1>`)
      continue
    }

    const ulMatch = trimmed.match(/^- (.+)/)
    if (ulMatch) {
      if (inList !== 'ul') {
        flushList()
        inList = 'ul'
      }
      listItems.push(`<li>${processInline(ulMatch[1])}</li>`)
      continue
    }

    const olMatch = trimmed.match(/^\d+\. (.+)/)
    if (olMatch) {
      if (inList !== 'ol') {
        flushList()
        inList = 'ol'
      }
      listItems.push(`<li>${processInline(olMatch[1])}</li>`)
      continue
    }

    if (trimmed.startsWith('> ')) {
      flushList()
      output.push(`<blockquote>${processInline(trimmed.slice(2))}</blockquote>`)
      continue
    }

    flushList()
    output.push(`<p>${processInline(trimmed)}</p>`)
  }

  flushList()
  return output.join('')
}
