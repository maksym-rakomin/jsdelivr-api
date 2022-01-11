<template>
  <div class="table-result glassmorphism-box">
    <v-simple-table>
      <template v-slot:default>
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
            @click="handleClickTableItem(item.name)"
          >
            <td>{{ item.package.name }}</td>
            <td>{{ item.package.version }}</td>
            <td>
              <div>{{ item.package.publisher.username }}</div>
              <div>{{ item.package.publisher.email }}</div>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    itemList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClickTableItem(id) {
      console.log(id)
    },
  },
}
</script>

<style lang="scss">
.table-result {
  padding: 16px;
  margin-bottom: 32px;
}
</style>
