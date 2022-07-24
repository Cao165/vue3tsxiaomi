import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      count:100,
      shaps:[] as any,
    }
  },
  getters:{
    getcounts():any{
      return this.count
    },
    getshapss():any{
      return this.shaps.length
    },
    getshapssle():any{
      return this.shaps
    }
  },
  actions:{
    setcounts(value:any){
      this.count=value
    },
    setshapss(values:any){
      this.shaps.push(values)
    }
  },
   persist: {
    enabled: true,
  }
})
