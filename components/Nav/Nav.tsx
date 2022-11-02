import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'
import { createClient, configureChains, defaultChains, useAccount } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
 
const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
])
 
const client = createClient({
  provider,
  webSocketProvider,
})


const Nav = () => {

  const {address} = useAccount()

  return (
    <div className='flex w-full content-center 
    justify-center bg-greenLengs text-black border-black border
    h-20
    '>
        <div className='w-1/5 h-full text-center border-black border-r grid place-items-center'>
            <Image
          src="/img/logo.svg"
          alt="Lenstags Logo"
          width={100}
          height={60}
          
        />
        </div>
        <div className="w-1/2 h-full border-r-black border-r"></div>
        <div className='w-1/4 h-full text-center grid place-items-center'
            onClick={()=>{
                console.log("CONECTANDO")
            }}
        ><ConnectButton/></div>  
    </div>
  )
}

export default Nav