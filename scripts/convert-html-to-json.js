const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')

const inputFile = path.join(process.cwd(), 'data/standards.html')
const outputFile = path.join(process.cwd(), 'data/standards.json')

const htmlContent = fs.readFileSync(inputFile, 'utf-8')
const dom = new JSDOM(htmlContent)
const document = dom.window.document
const table = document.querySelector('table')
const rows = table.querySelectorAll('tr')

let headers = []
const data = []

rows.forEach((row, rowIndex) => {
  const cells = row.querySelectorAll('th, td')

  if (rowIndex === 2) {
    headers = Array.from(cells).map(cell => cell.textContent)
  } else {
    const obj = {}
    cells.forEach((cell, cellIndex) => {
      if (headers[cellIndex] && cellIndex > 0) {
        const link = cell.querySelector('a')
        if (link) {
          obj[headers[cellIndex].toLowerCase()] = {
            url: link.getAttribute('href'),
            description: link.textContent
          }
        } else {
          obj[headers[cellIndex].toLowerCase()] = cell.textContent
        }
      }
    })
    if (Object.values(obj).some(value => value !== null && value !== '')) {
      data.push(obj)
    }
  }
})

const json = JSON.stringify(data, null, 2)
fs.writeFileSync(outputFile, json)

console.log(`Table data has been extracted to ${outputFile}`)
