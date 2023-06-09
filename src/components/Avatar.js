import classes from './Avatar.module.css'

const Avatar = props => {
  return (
    <img src={props.src} alt={props.alt} className={`${classes.avatar} ${props.className}`}></img>
  )
};

export default Avatar
