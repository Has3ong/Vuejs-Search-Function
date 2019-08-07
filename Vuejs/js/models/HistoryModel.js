export default {
  data: [
    {keyword: 'Python', date: '8.6' }
  ],

  list() {
    return Promise.resolve(this.data)
  },
  
  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return 
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    var temp = new Date()
    var date = temp.getMonth() + 1 + '.' + temp.getDate()
    
    this.data = [{keyword, date}, ...this.data]
  },
  
  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}