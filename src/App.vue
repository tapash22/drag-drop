<template>
  <div id="App">
    <div class="drop-zone" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
      <div class="drag-el" v-for="item in listOne" :key="item.title" draggable @dragstart="startDrag($event, item)">
        {{ item.title }}
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
      <div class="drag-el" v-for="item in listTwo" :key="item.title" draggable  @dragstart="startDrag($event, item)">
        {{ item.title }}
      </div>
    </div>
    <div>
      <CustomEditor />
    </div>
  </div>
</template>

<script>
import CustomEditor from './components/CustomEditor.vue'
export default {
  data() {
    return {
      items: [{
        id: 0,
        title: 'Item A',
        list: 1,
      },
      {
        id: 1,
        title: 'Item B',
        list: 1,
      },
      {
        id: 2,
        title: 'Item C',
        list: 2,
      },
      ],
    }
  },
  components:{
    CustomEditor
  },

  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },

  methods: {
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },

}
</script>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
  height: 20px;
}
</style>
