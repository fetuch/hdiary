<template>
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Rodzaj wpisu
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Nazwa leku
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Data wpisu
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Data podania dawki
        </th>
        <th
          scope="col"
          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Dawka
        </th>
        <th
          scope="col"
          class="relative px-6 py-3"
        >
          <span class="sr-only">Edit</span>
        </th>
        <th
          scope="col"
          class="relative px-6 py-3"
        >
          <span class="sr-only">Remove</span>
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="(entry, index) in entries"
        :id="entry.id"
        :key="index"
        class="bg-white"
      >
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium @if($entry->type === 'prevention') text-primary @else text-alert @endif">
          {{ entry.type }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium @if(mb_strtolower($entry->injections[0]->drug) !== 'novo8') text-red-600 @else text-lighter-gray @endif">
          {{ entry.drug }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-lighter-gray">
          {{ entry.created_at }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-lighter-gray">
          {{ entry.date }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-lighter-gray">
          {{ entry.dose }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <a href="">Zmień</a>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <a href="">Usuń</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      entries: {
        type: Array,
        required: false,
        default: () => []
      }
    },
  }
</script>
