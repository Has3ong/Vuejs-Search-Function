export default {
  data: [
    {keyword: 'Python'}, 
    {keyword: 'Go'}, 
    {keyword: 'C++'}, 
    {keyword: 'Java'}, 
    {keyword: 'JavaScript'},
    {keyword: 'Vue'}
  ],

  list() {
    return new Promise(res => {
      setTimeout(() => {
        res(this.data)
      }, 200)
    })
  }
}
