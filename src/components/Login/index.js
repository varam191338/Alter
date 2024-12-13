import './index.css'

const Login = props => {
  const {details} = props
  const {imageUrl, altText} = details

  return (
    <li>
      <img src={imageUrl} alt={altText} className="post-image" />
    </li>
  )
}

export default Login
