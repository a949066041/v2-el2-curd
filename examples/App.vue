<template>
  <div>
    <DemoSort>
      <Target />
      <Target />
    </DemoSort>
  </div>
</template>

<script>
import Target from './demo/target'
import DemoSort from './components/DemoSort.jsx'
export default {
  components: { DemoSort, Target }
}
</script>
