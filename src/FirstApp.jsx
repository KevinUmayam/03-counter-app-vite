import PropTypes from 'prop-types'
const FirstApp = ({title, subTitle}) => {

  if(!title) {
    throw new Error('no title found')
  }
  // console.log(title);
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
    

  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}

export default FirstApp
