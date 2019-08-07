const data = [
  {
    title: 'Python',
    contents: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
    image: 'js/templates/Python.jpg'
  },
  {
    title: 'Python package Numpy',
    contents: "NumPy is Python's library that makes it easy to process matrix or generally large multi-dimensional arrays. In addition to the data structure, NumPy provides an efficiently implemented capability for numerical calculations.",
    image: 'js/templates/Numpy.jpg'
  },
  {
    title: 'Go',
    contents: "Go, also known as Golang, is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
    image: 'js/templates/Go.jpg'
  },
  {
    title: 'Java',
    contents: "Java is a general-purpose programming language that is class-based, object-oriented (although not a pure object-oriented language, as it contains primitive types[16]), and designed to have as few implementation dependencies as possible. It is intended to let application developers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.",
    image: 'js/templates/Java.jpg'
  },
  {
    title: 'JavaScript',
    contents: "JavaScript often abbreviated as JS, is a high-level, interpreted scripting language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    image: 'js/templates/JavaScript.jpg'
  },
  {
    title: 'C++',
    contents: "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or 'C with Classes'. The language has expanded significantly over time, and modern C++ has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, and IBM, so it is available on many platforms.",
    image: 'js/templates/C++.jpg'
  },
  {
    title: 'Vue',
    contents: "Vue.js is an open source progressive JavaScript framework used to create user interfaces for Web applications. It is designed to facilitate the introduction of Vue.js in web application projects using different JavaScript libraries, because they are designed to be adopted incrementally. Meanwhile, Vue.js is available for deploying high-performance, single-page applications (SPA).",
    image: 'js/templates/Vue.jpg'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  },

  find(query){
    var res = new Array()
    for (var i=0; i<data.length; i++){
      if (data[i].title.indexOf(query) != -1){
        var id = res.length + 1
        var title = data[i].title
        var contents = data[i].contents
        var image = data[i].image
        res.push({id, title, contents, image})
      }
    }
    return res
  }
}