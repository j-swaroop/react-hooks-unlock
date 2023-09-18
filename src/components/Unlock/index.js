// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  ResponsiveContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const lockImgUrl = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const unlockImgUrl = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const imgUrl = isLocked ? lockImgUrl : unlockImgUrl
  const altText = isLocked ? 'lock' : 'unlock'

  const onClickBtn = () => setLock(prevState => !prevState)

  return (
    <MainContainer>
      <ResponsiveContainer>
        <Image src={imgUrl} alt={altText} />
        <Text>
          {isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'}{' '}
        </Text>
        <Button type="button" onClick={onClickBtn}>
          {' '}
          {isLocked ? 'Unlock' : 'Lock'}{' '}
        </Button>
      </ResponsiveContainer>
    </MainContainer>
  )
}

export default Unlock
