import {useCounterStore} from './store/counterStore';
import { useEffect } from 'react';

export default function App() {

  const {count,title,posts} = useCounterStore((state)=>({
    count: state.count,
    title: state.title,
    posts: state.posts,
  }))

  const {increment,getPosts,clearStore,multiply} = useCounterStore() // destruturing de metodo que necesitamso saber el estado

  useEffect(()=>{
   getPosts()
 },[])

  return (
    <div>
      <h1>Contador: {count}</h1>
      <h2>Titulo: {title}</h2>
      <button
        onClick={()=>{
          increment(10)
        }}
      >
        Incremento de 10 en 10
      </button>
      <br /><br />
      <button
        onClick={()=>clearStore()}
      >
        Clear State
      </button>
      <hr /><br /><br />
      <button
        onClick={()=>multiply(2)}
      >
        multiplicar por 2
      </button>
      <h1>Listado de Posts</h1>
      <ul>
        {
          posts && (
            posts.map((post)=>(
              <li key={post.id}>
                <h3>{post.id}--{post.title}</h3> - {post.body}
              </li>
            ))
          )
        }
      </ul>
    </div>
  )
}
