import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {
  state: () => ({
    todos: [{
        id: 1,
        title: 'thor',
        description: 'The best game in town',
        prix: 15,
        amount: 8,
        picture:'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzNzU4Mjl8MHwxfHNlYXJjaHwzfHxoYW1tZXJ8ZW58MHx8fHwxNjY4Nzk2NzA4&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080&quot'
        
      },
      {
        id: 2,
        title: 'Figurine Yoda',
        description: 'The best game in town',
        prix: 25,
        amount: 9,
        picture:'https://images.unsplash.com/photo-1603621760091-d7b12c66549a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Mjl8MHwxfHNlYXJjaHwxMnx8ZmlndXJpbmV8ZW58MHx8fHwxNjY4Nzk2OTYz&ixlib=rb-4.0.3&q=80&w=1080'
      },
      {
        id: 3,
        title: 'Miel',
        description: 'The best game in town',
        prix: 15,
        amount: 15,
        picture:'https://picsum.photos/id/312/3888/2592'
        
      },
      {
        id: 4,
        title: 'yeezy',
        description: 'The best shooes',
        prix: 25,
        amount: 3,
        picture:'https://images.unsplash.com/photo-1606297199333-e93f7d726cab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Mjl8MHwxfHNlYXJjaHwxMXx8eWVlenl8ZW58MHx8fHwxNjY4Nzk3MjEx&ixlib=rb-4.0.3&q=80&w=1080'
      },
      {
        id: 5,
        title: 'The best car',
        description: 'The best game in town',
        prix: 25,
        amount: 1,
        picture:'https://images.unsplash.com/photo-1502877338535-766e1452684a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Mjl8MHwxfHNlYXJjaHw0fHxjYXJ8ZW58MHx8fHwxNjY4Nzk3MzM4&ixlib=rb-4.0.3&q=80&w=1080'
      },
      {
        id: 6,
        title: 'Moto',
        description: 'The best game in town',
        prix: 25,
        amount: 2,
        picture:'https://images.unsplash.com/photo-1609630875171-b1321377ee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Mjl8MHwxfHNlYXJjaHwyfHxtb3RvfGVufDB8fHx8MTY2ODc5NzM3NQ&ixlib=rb-4.0.3&q=80&w=1080'
      },
      {
        id: 7,
        title: 'Iphone',
        description: 'The best game in town',
        prix: 25,
        amount: 3,
        picture:'https://images.unsplash.com/photo-1574678301308-b6a9d8c33635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Mjl8MHwxfHNlYXJjaHw5fHxzbWFydHBob25lJTIwaW4lMjB0aGUlMjBib3h8ZW58MHx8fHwxNjY4Nzk3NDM2&ixlib=rb-4.0.3&q=80&w=1080'
      },
      {
        id: 8 ,
        title: 'axe',
        description: 'The best game in town',
        prix: 25,
        amount: 4,
        picture:'https://images.unsplash.com/photo-1609177388167-6db8610bc26c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzU4Mjl8MHwxfHNlYXJjaHwxM3x8YXhlfGVufDB8fHx8MTY2ODc5NzQ4Ng&ixlib=rb-4.0.3&q=80&w=1080'
      }

    ],
  }),
//   getters: {
//     finishedTodos(state) {
//       // autocompletion! ✨
//       return state.todos.filter((todo) => todo.isFinished)
//     },
//     unfinishedTodos(state) {
//       return state.todos.filter((todo) => !todo.isFinished)
//     },
//     /**
//      * @returns {{ text: string, id: number, isFinished: boolean }[]}
//      */
//     filteredTodos(state) {
//       if (this.filter === 'finished') {
//         // call other getters with autocompletion ✨
//         return this.finishedTodos
//       } else if (this.filter === 'unfinished') {
//         return this.unfinishedTodos
//       }
//       return this.todos
//     },
//   },
  actions: {
    addTodo(text) {
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})