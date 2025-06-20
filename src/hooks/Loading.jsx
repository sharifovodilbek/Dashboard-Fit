import LoadingImg from "../assets/images/loading.png"

const Loading = ({extrClass}) => {
  return (
    <img className={`${extrClass}`} src={LoadingImg} alt="Loading..." width={30} height={30}/>
  )
}

export default Loading