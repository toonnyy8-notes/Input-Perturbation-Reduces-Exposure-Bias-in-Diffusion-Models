<!--

Simple Arrow

<arrow x1="10" y1="20" x2="100" y2="200" color="green" width="3" />

<arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }"/>

-->

<script setup lang="ts">
import { customAlphabet } from 'nanoid'

defineProps<{
  x1: number | string
  y1: number | string
  x2: number | string
  y2: number | string
  width?: number | string
  color?: string
}>()

const nanoid = customAlphabet('abcedfghijklmn', 10)

const id = nanoid()

const _default = (x, val) => {return isNaN(x) ? _default(val, 0) : x}

</script>

<template>
  <svg
    class="absolute left-0 top-0 pointer-events-none"
    :width="Math.max(_default(+x1, 0), _default(+x2, 0)) + 50"
    :height="Math.max(_default(+y1, 0), _default(+y2, 0)) + 50"
  >
    <defs>
      <marker
        :id="id"
        markerUnits="strokeWidth"
        :markerWidth="10"
        :markerHeight="7"
        refX="9"
        refY="3.5"
        orient="auto"
      >
      </marker>
    </defs>
    <line
      :x1="_default(+x1, +x2)"
      :y1="_default(+y1, +y2)"
      :x2="_default(+x2, +x1)"
      :y2="_default(+y2, +y1)"
      :stroke="color || 'currentColor'"
      :stroke-width="width || 2"
      :marker-end="`url(#${id})`"
    />
  </svg>
</template>