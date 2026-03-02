<template>
  <div class="table-result glassmorphism-box">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Version</th>
          <th class="text-left">Publisher</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in itemList"
          :key="item.package.name"
          @click="handleClickTableItem(item)"
        >
          <td>{{ item.package.name }}</td>
          <td>{{ item.package.version }}</td>
          <td>
            <div>{{ item.package.publisher.username }}</div>
            <div>{{ item.package.publisher.email }}</div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
const props = defineProps({
  itemList: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['set-current-item'])

const handleClickTableItem = item => {
  emit('set-current-item', item)
}
</script>

<style lang="scss">
.table-result {
  padding: 16px;
  margin-bottom: 32px;
}
</style>
