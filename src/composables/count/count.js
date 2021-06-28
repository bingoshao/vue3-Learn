import { ref} from 'vue'

export default function calcCount (count) {
  count = ref(count)
  const add = () => {
    count.value++
  }
  const increase = () => {
    count.value--
  }
  return {count,add,increase}
}