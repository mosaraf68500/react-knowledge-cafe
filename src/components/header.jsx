
import profile from '../assets/images/profile.png';
const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between py-3 items-center  border-b-2'>


<h1 className=' text-3xl'>Knowledge Cafe</h1>
<img src={profile} alt="" />


        </div>
        
    );
};

export default Header;