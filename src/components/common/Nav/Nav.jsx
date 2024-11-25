import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signature from "../../../assets/Images/signature.png"
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';




const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#FCB143',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#2ECA45',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));


const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
    setTimeout(() => {
      setShowDropdown(false);
    }, 2000); 
  };
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Change '/about-me' to the actual path of your "About Me" page
  };

  return (
    <nav className="shadow-md sticky top-0 bg-[#F8F7F3]">
      <div className="flex justify-between items-center py-3 cursor-pointer w-11/12 mx-auto">
        <div>
          <h1 className="font-bold text-orange-400">PORTFOLIO</h1>
          {/* <img  onClick={handleClick} src={Signature} alt=""  className="h-[46px]"/> */}

        </div>
        <div className="">
          <ul className="flex gap-7 text-xs cursor-pointer">
            {/* HOME */}
            <Link to={"/"}>
              <span className=" text-orange-400 font-semibold">HOME</span>
            </Link>

            {/* ABOUT */}
            <div className="relative group cursor-pointer  hover:text-black">
              <Link to={"/about"}>
                <span className="uppercase">ABOUT</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-orange-400 absolute bottom-[-5px] left-0" />
            </div>

            {/* SERVICES */}
            <div className="relative group cursor-pointer hover:text-black">
              <Link to={"/services"}>
                <span className="uppercase">SERVICES</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-orange-400 absolute bottom-[-5px] left-0" />
            </div>

            {/* PORTFOLIO */}
            <div className="relative group cursor-pointer  hover:text-black">
              <Link to={"/portfolio"}>
                <span className="uppercase">PROJECTS</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-orange-400 absolute bottom-[-5px] left-0" />
            </div>

            {/* PRICING */}
            <div className="relative group cursor-pointer  hover:text-black">
              <Link to={"/pricing"}>
                <span className="uppercase">PRICING</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-orange-400 absolute bottom-[-5px] left-0" />
            </div>

            {/* BLOG (with Dropdown) */}
            <div
              className="relative group cursor-pointer  hover:text-black"
              onMouseEnter={handleMouseEnter}
            >
              <Link to={"/blog"}>
                <span className="uppercase">BLOG</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-orange-400 absolute bottom-[-5px] left-0" />

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute w-[200px] left-0 px-5 bg-white shadow-md rounded-md mt-2 z-10">
                  <ul className="py-2 ">
                    <li className="px-5 py-2 hover:text-[#60A5FA] ">
                      <Link to={"/bloghome"}>Blog Home</Link>
                    </li>
                    <li className="px-5 py-2 hover:text-[#60A5FA]">
                      <Link to={"/blog/category-2"}>Blog Single</Link>
                    </li>
                  
                  </ul>
                </div>
              )}
            </div>

            {/* PAGES */}
            <div className="relative group cursor-pointer  hover:text-black">
              <Link to={"/pages"}>
                <span className="uppercase">PAGES</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-orange-400 absolute bottom-[-5px] left-0" />
            </div>

            {/* CONTACT */}
            <div className="relative group cursor-pointer hover:text-black">
              <Link to={"/contact"}>
                <span className="uppercase">CONTACT</span>
              </Link>
              <span className="block w-0 group-hover:w-8/12 transition-all duration-300 ease-out h-0.5 bg-orange-400 absolute bottom-[-5px] left-0" />
            </div>
          </ul>
        </div>
        <FormGroup>
      
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label=""
      />
     
    </FormGroup>
      </div>
    </nav>
  );
};

export default Nav;
