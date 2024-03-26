// @vitest-environment nuxt
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import AppNumber from './AppNumber.vue'

mockNuxtImport('useState', () => {
  return () => 3
})

describe('AppNumber', () => {
  it('can mount the component', async () => {
    const component = await mountSuspended(AppNumber)
    expect(component.html()).toContain('Number')
  })
  it('returns the state', async () => {
    const component = await mountSuspended(AppNumber)
    expect(component.text()).toContain('Number: 3Refresh')
  })
})