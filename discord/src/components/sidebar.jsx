import React from 'react';
import { discord, company_logo } from '../assets';
import '../index.css'
function sidebar() {
  return (
    <>
      <div className='w-[75px] h-[100vh] fixed flex flex-col black_color items-center'>
        <img data-tooltip-target="tooltip-right" data-tooltip-placement="right" className='discord_logo logo_img icon1 cursor-pointer' src={discord} alt="" />
        <div id="tooltip-right" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Direct message
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div className="guildSeparator-a4uisj"></div>
        <img data-tooltip-target="tooltip-right" data-tooltip-placement="right" className='company_logo logo_img cursor-pointer' src={company_logo} alt="" />
        <div id="tooltip-right" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          BlueWillow AI to create...
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div data-tooltip-target="tooltip-right" data-tooltip-placement="right" className='icon cursor-pointer'><svg className="circleIcon-3489FI" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"></path></svg></div>
        <div id="tooltip-right" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Add a Server
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div data-tooltip-target="tooltip-right" data-tooltip-placement="right" className='icon cursor-pointer'><svg aria-hidden="true" role="img" className="circleIcon-3489FI" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"></path></svg></div>
        <div id="tooltip-right" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Explore all Servers
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div className="guildSeparator-a4uisj mb-5"></div>
        <div data-tooltip-target="tooltip-right" data-tooltip-placement="right" className='icon cursor-pointer'><svg className="circleIcon-3489FI" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M16.293 9.293L17.707 10.707L12 16.414L6.29297 10.707L7.70697 9.293L11 12.586V2H13V12.586L16.293 9.293ZM18 20V18H20V20C20 21.102 19.104 22 18 22H6C4.896 22 4 21.102 4 20V18H6V20H18Z"></path></svg></div>
        <div id="tooltip-right" role="tooltip" className="absolute z-50 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          Download
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>

    </>
  )
}

export default sidebar