import { ref,computed,reactive,toRefs } from 'vue'

export default function useComputed (a) {
  const state = reactive({
    age:18,
    name:'SMJ',
    lowerCaseUsername:computed(() => state.name.toLowerCase())
  })

  const stateToRefs = toRefs(state)
  //$emit=>context中的emit
  setTimeout(() => {
    state.age = 25
  },3000)
  return stateToRefs
}