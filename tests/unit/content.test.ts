import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'
import Hero from '../../src/components/sections/Hero'
describe('Hero progressive enhancement', () => {
  it('provides all workflow controls and useful content before WebGL loads', () => {
    const html = renderToStaticMarkup(createElement(Hero))
    expect(html).toContain('Your next lead.')
    expect(html).toContain('href="#solution"')
    expect(html.match(/aria-pressed=/g)).toHaveLength(4)
    expect(html).toContain('nexus-static')
    expect(html).not.toContain('<canvas')
  })
})
