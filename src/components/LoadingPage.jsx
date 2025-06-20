import LoadingImg from "../assets/images/loading-page.png"
const LoadingPage = () => {
  return (
    <div className="absolute left-[200px] top-0 w-full h-full flex items-center justify-center">
        <img src={LoadingImg} alt="Loading..." width={100} height={100}/>
    </div>
  )
}

export default LoadingPage