import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true,
  },
  {
    userName: 'JmanuelDev',
    name: 'Jose Manuel Hernandez',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'PabloH.',
    isFollowing: false,
  },
]

/**
 * It's a function that returns a section with two TwitterFollowCard components.
 * @returns A React component.
 */
export function App() {
  // const format = userName => `@${userName}`

  //const formattedUserName = <span>@{userName}</span>

  // const midudev = { isFollowing: false, userName: 'midudev' }
  // const pheralb = { isFollowing: true, userName: 'pheralb' }
  return (
    <section className="App">
      {users.map(user => {
        const { userName, name, isFollowing } = user
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            key={userName}>
            {name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
