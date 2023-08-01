import Logo from '../components/Logo/Logo'

function Landing() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center w-[20.4375rem] h-[33.938rem]
       bg-[#15263F] rounded-xl ">
        <Logo name='Bitcamp'/>
      </div>
    </div>
  )
}

export default Landing