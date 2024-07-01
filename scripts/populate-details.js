const { writeFileSync } = require('fs')
const path = require('path')

const standards = require('../data/standards.json')

const addContent = (content) => {
  if (typeof content === 'string') {
    return content
  }

  return `[${content.description}](${content.url})`
}
// Prepare the markdown files
standards.forEach((item, index) => {
  const fileContent = `---
sidebar_position: ${index + 1}
id: ${item.id}
title: ${item.id.charAt(0).toUpperCase() + item.id.slice(1)}
slug: /details/${item.id}
---

# ${item.id.charAt(0).toUpperCase() + item.id.slice(1)}

## Use Case

- Incubating: ${item.incubating}
- Active: ${item.active}
- Retiring: ${item.retiring}

## Description

${item.item}

## Details

- C-SCRM: ${item['c-scrm']}
- Priority Group: ${item['priority group']}
- Mitre: ${addContent(item.mitre)}
- Sources: ${addContent(item.sources)}
- How To: ${addContent(item['how to'])}

`
  const detination = path.join(process.cwd(), `docs/details/${item.id}.mdx`)
  writeFileSync(detination, fileContent)
})
