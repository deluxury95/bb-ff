import axios from 'axios';
import React, { useEffect, useState } from 'react'

import Loading from '../../components/Loading';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { HiViewGridAdd } from "react-icons/hi";
import { MdOutlineManageHistory } from "react-icons/md";

const DashboardLayout = () => {
  
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/")
  }

  return (
    <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
    <aside className="hidden sm:flex sm:flex-col">
      <a href="/" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
        <img src="/fav-icon.png" alt="" />
      </a>
      <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
        <nav className="flex flex-col mx-4 my-6 space-y-4">
          <a href="#" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Folders</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </a>
          <Link to="/dashboard" className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg">
            <span className="sr-only">Dashboard</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </Link>
          <Link to="/dashboard/add-new-book" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Add Book</span>
            <HiViewGridAdd className="h-6 w-6"/>
          </Link>
          <Link to="/dashboard/manage-books" className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Documents</span>
            <MdOutlineManageHistory className="h-6 w-6"/>
          </Link>
        </nav>
        <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
          <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
            <span className="sr-only">Settings</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
    <div className="flex-grow text-gray-800">
      <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
        <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
          <span className="sr-only">Menu</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div className="relative w-full max-w-md sm:-ml-2">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input type="text" role="search" placeholder="Search..." className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg" />
        </div>
        <div className="flex flex-shrink-0 items-center ml-auto">
          <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
            <span className="sr-only">User Menu</span>
            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
              <span className="font-semibold">Deng Luxury</span>
              <span className="text-sm text-gray-600">Lecturer</span>
            </div>
            <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
              <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAKCxAQEBAJEBAJDQoQDQkJDRsICQgKIB0iIiAdHx8kKDQsJCYxJx8fLTItMT03NzBDIx8zQDMtNygtLisBCgoKDg0OFQ4PFTcZFh4rKzcrKzcrKystNzcrKys3LTc3LS0rKysrKzc3LSsrKy0tNys3LTctKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABKEAACAQMCBAQBBwYKCQUBAAABAgMABBEFEgYTITEiQVFhcQcUFSMygZFCUpKh0fAWJDNTVGJjcpOxF0VVZIKUosHhNUSj0vFD/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EACcRAAICAQQCAQQDAQAAAAAAAAABAhEDEhMhMQRBURQiQlIyYXEF/9oADAMBAAIRAxEAPwDJ8Q2ofZkdULD4UJ+Ypjt+utJrqdCfRlPxoKTXNktOzfF0UzYofL9eDXPmCen681bpVjrZpSKh09PQ/jU9vbiLOB3981JTs0tTYUkdAyaHvrEKkgmTIJHRemav7h6+lQcGGBdRnWa2juQ0b7Y5TtVGz3rXDjT7IyTaKv03Cf538KcNZh/tP0c1tZksJgR9Exjo3VJeWOlUJbC0jbC6aGHQ5+dsCDXR9PEw3pGbOsQBftPk+W3FRfTMPrJ+jWrisrbv9EIw9TemmjTbVj/6R69r2mvGiyfqKMzFrEHXLOCASvh3AtQdpYQSxErszE7c8uMCvQV0u1XvpDdf99rv0Ta/7Ik+69yauOBR6Jeazzme8V02iKNPPcpLGq8bV6dJpFo3+p5unml53NM+hLU/6ouvuvKegncR5wHXv3xij1lrkUSBTzOgHfxAVqPoK1PX6JvQMgbjeAIDUNzpdhFgNp14p69WvAVIpOCXZVgoa9bH8px7bCBQLU5RLOWUMRLgpgdWWtIINND9bK5CjuPnWSf1Uasr7S4o9osZ2bcNrST7mjT2NToQ9R5q2T0Hf07EVNBGY2OemRmjuvabFLJJLC4Q7vDbu2919s1QfTJ0UMyk5A6r4ulRPo0x9lbNPDUxlKnqCP8AOm5rno6iRmxSqJjSppDTPQtWIaI9euxSfLrWba6QdNyDHv51ziHWSCkanzG9vbNZi4k8bfFq2nDUcsJVwaJr5B+UtQtqCA96Ahs1IsTN2BPw61G0jTcDX0inqakS6DDoaER6dO/aKU/Bc5pXNpPZ4Mkcke/sHGNwpbPwLcDJmqXg9h9NY6fWpMOvbOM0JE3Y+uKvcJvjWYP67EfeRTwqpBmf2nqS2+1D1iPhbwodzCgEUjbMc9AAjeA5OF9K0apgdPce9QW8EDL0jtD9oZkOJC3nXS2cKZnYlLKcOD4j0JK4qeFWUYG39P8A8VW1u+itbjG5FSRDhI+q7s1TkS5vIVktTOybmUsjbDmr1zirRjPFJsMgMe+On9f/AMVMpb0XH9/t/wBNZtbDUh5Xf+IKivVv7WPfK9zGmQu9nyN1T9RkI2Z+jS28TqMbl+0xPjwDn7qkZHXqzqB4vyj0H4VkZtVlk5Kxzy7iiqQG2lpc0VisLwhxNJMAB4ld96mq3snsqGGd8kmocQ+HbEG9C0h3pu9R0rPSSsxySxPU7m6nNTywBDgftpcus55G3ydyj6ZWJJPXvXADn9xVxYs+VShBUWVoBxGe/wD+mpIZWjPQsMfeKuNECPKq72+KHyKmuh07xzjEijP85H4WB96Eanp5gG9WDKeuR6VeJ/f1pkkrKrAbTvVhh+oFLSit1oz5npVC8RXuPMj2zSo0oNxlzVx1B9yKoy9/jiiWrjK/eDQxvL4VS6JfZJbDJ69hRHDxRK4yOY2B7mq+lQiWRVZ44w7AGaXJjjHqcVoY7m3hjmtZRHcRqx5V5a5QK/qM0ySppeoyrI0JYqxxiT7ZjaiPFhM9mjElmtyoLHuwoTpMFv8AO15kzxRsx3XGznPGvwrQ6wlu1uywTvPvSUFpIvmxXHbpTBmMSToKvcPSbdUtj/bwj9dDE7D2qxp8uy6hP5s0J+/NZpcmsuYnuYHUfGgKxIWbKXDHfKN0ZIUfqrRkdemPI/AUGlISZwZJE8bEJGMr8a0OQxfFFuzSJsjkbAbJwXIFHeC2C2RV/qyJX8D4RsfeKra5qBs2UpufmblO7KAD7qGDiR/5oH/jINTJN8G8YRa5ZuRIn84n4r+ys9xtKWto0TxiSXLhAHIx27CqWna61xOkZi2iVsb9xfbRu7jeGGSQEMIUZtvVN366y0U+SZLHF05GL0ezkN3F9Www6lncHaF8zWn13USzFVPhUkDHnTbfVTNCG2shcEEbi+aHXLbjmtX0XpS6ZU6savW1mWxnOKgtlGetGoWCgYqS0RtZACqc8G3980Yd+lUrgdKYwZtIqKSrhGahkjpksGTeHrVdmzVu7WqdBmVrpAUYEZJOVx5GlUkgOenmCKVAFW/6xfctCvKi8y7ovuIoQB4T7EVMOi5dlmz7H2/yrW8I8Hza1ucMkUMJO6eX7P3CspYLuVwO+3PxFe28Oac2ocIcm1ZVnYOGCnaWfPbPwrDyssscftdWEavkzWo/J4qRE21xa3LIMvEi8qUfAgmsfbyGCURksVbcAX6Oh8wa9I4I4ZvreXNxGtusEfLCZ8V0/rWC40KDWJhGQVW5ONn2S2OtZeL5EnkljctSXsc1xZmpBtdh+azCo84YH0Kmp7tcTP8A3qruO3xFdq7F6PY+cQit/GW3onSNNzAfjXYbuRc4S5Xec4MO4k0OsrTUJoojG9oBJFEV6kuy48+lWvojVfz7b9fX9VbqLOe0ihxBZS3yrt54MbE4aIoDQQcO3OO0n6JrWDSdXHnbY/vHr/00vozVfzrT9I//AFo0MTyRXszlhotzBPHIVc8l1bbjGR+FapJGudyPauFmG0npkfqqEabqo/Ks/wBI/sqezs9USVSxs8AjOGO7H4UniZm3CTuwNqdr81laMDAjIAHmBQyQ5NEeKL9vnUhcLncRkdc1npLvJ9KzlwdkaoJRgZ7+lEIzgf5UAjkJGc9a619Igx1qSzRrJ064FQSSg/v3rNfO5HPVj8O2KJ2hYrncpx5Z60BZacZ7VxhURudpwf1dasJIGFMmQNulxnIoa3ejd2Mr+/ShUignuMetBLHWMEUjqJCRuYDIOMClSFozsNo8xgnoKVc87saBcYzH99CD0LD49KNWv2WHsKE3ERDsfUmtMbRcotsfYTGKQEYPqvdWFbnhTiWfSyWtWDRnHMs5OssR9MefxrAQHDjrjrjPpVvlyI5AKdPyw2CRVzjGSqSM+Ueja98o97PGURI4S4YGREPNC/fWCjjJfe2SxOfUk1EYpn7yqPi2cU9LE56zoPbrg1GPFjxXoVDbb7KtyczN8abyS5AAyXZQqjqS1WJoC00hXqI9uWHUVCpZHUgkFWBDA7WU1Xs0ilpN1a8A6qFQrLtyikAysmxfSrP8BdY/pH/zvWZGvXXLObvU+Zu6ATHl7a7a69c7H5l1qZbb9Vy5zt3+9bajJxXwaf8AgNrP9JP/ADDih/EGgarpdsZ5bmTapA8E7MS1C01uflruutW5hLbyJjs2+WOtVxqM9ykkUs13IkiA4lczBWz3pan8k6E/QP8Apy7/AKTc/wCIelT2vEdxG+WmuHHTH1xQA0KntyhxnNMROv4UtT+QcI/qbS7JlZW8bfOQrLuO8YqnLGclSuGU4ozbW261hOVOEOG/KHWo4dOLEsdx25JY9BUNmijxwU7OLbjPqPwow8KEDIFDo4XdjgE4PTHarAneI+JWI/yqTTSUp7RUmDFSy56oDtOKa9nG8pZHeNDj6s5Zs0VYCUZH/kVCsJJxToKGQWMeM7nJ9+lWVQL2qeODaOtRMAKoiSIp4iyketUBAIhlhnHaisjdMVX2B+hx4sdT0FNkoHHEynY+2RM7Ruxn7qVLUYRzF2lSydNyDBI96VZ2Mn0vQSQZDtO8sApOMVZm4Y5mchR8DVW8leC7MYZwOd2BwNpohdRvy+jSA+LsfKuTZySdqVHbHLjiqaBjcEknIYj2zmpE4J9Wb8cVmn1OdSRzp8gt+WelavR5ZH0kScyQtNemN3LFmhULkD2zV7eZ9SFuYe9JJHwco77j8XwKlfg5HXAXB/OByRRO0tS0Ds0ko5aFg27Pi9Kwd/qdzDcMOdcbd5x4yMVOxm9yDew/qeh2ehQQsGECEvHsk6+GRPPNCrng9JHYiPGWJGHxgVj5NUuh/wD3uR/xmoRq13n+Xuf0zQ8WV/mNZcS/E3CcLRrgFMe5YmpTwoh7RoffeQTWGbWbnGOdcZ9d5OK01nqjtYMOe3OEJKh32Mz+lLZyvqY9/D+oS/ggpH8mv6Z6VPacNG3JMccYLgrktu8NZeC31iRFdU1VlcAh40Lqw9qcbXWv5vV/jy2AFH02f9hryMP6By74PExyYo8+qPsyaqjgIZ7MO3QPkmhaWusg9YtX7j8hsYou1lqbaegCajzRL4vCyybKawZ1+RMs+F/iErnR2soItwbGWUEnJIoBqlxJvwhO0D7A7GiNjbaj1W5i1Exxx+CWYEpG3nmq7JjJI6n7q6oxaVM5nJegbFeSBdoyN3n2xXY4p4/EJC4bujHIAqysG49+lTCAjz6VVBZyAlMHz8/Sr6MD1qiRTkk2UwLckhPSq7GmvLTC4NBL6JM5FVbpwMA+Z9M1OrCm3iBlHt60EFUwHaWUHaOhkA8IpUG167dVVQzhfF0BwCaVZ6WxxlwFeJpAl6SPyuU331rDEHgJAzlVb7qwHGMuy8aMPHIIgF5kfYmtBLxEsNguOrtDGMee6riq7Kna4MXqacu4lX813HwrXfJrLzPnMD4aK4SItE3XxDzHvQn5qJi0jjrOd2D1IqxYRG2YtGzRkjBdOhNUomTker6FwfHLMpkmlkjRlb5sBsVz5Zry/jeJItRvY/COXdTbR22infwku7fIiurtH7kr1JFA7wtey82aSV5blmLyuvU1Uo2CkUYrnuGPbGD3p3zhc9/1U/5mvcFvt7Qdhwa41oPH1k+rKjqMCs9A9QySdT51NbTeMEAHCt54G6uiwVnKjedqqcbepNHrfQEZQeX17E4zmmoULUBH1m6hUKtxeIF+ykc7Kq/ronY6xdSWzE3V+SMf+4bP+dWPomMDBjT29SK69ksELFY93UDlg7QaHF1wVDKr5Bx1u68ru+/5hv21BLrt4va7v/8AHb9tSMn+5J+niuY/3KP9Onp+WK7I7XiC6Mq77m8ZScFXnYqR+NFhcyzYC5J/EGqVtaRz5BhjQqASvciiXLWBBsOCFO5ezA0ULVyNSGXqG5nU9NhwBVj5lOgyWGPIE5YVSF6/uasLcu/t+yps1THBHU9SK6XNOGcdc/E1G1IB3M6UzmGmEVC8gWgGW0mxUxk3Ch0ILGraDH796ZBm+IGYS7T2wCtKifEVtzIdwGTH1z57a7TEZuM73BPUlhnzya9Z1zgOOHSbe6LYYxxlk/nGrBWFu880abLcAyxA8sdck17p8oNu/wAwtLaNJHP1YKxruxgVLOiPX+nk4gzgdh0+4VVvYDlcMwAOWA7ba9G0n5PLicb53SBMdATvlNZ/iDQltpWhSeN93QvENzIK0jIwli41GQEu992fDMCkXiwA1N3iMKSSRa7hIAepl8q0P8Gkituc8u2OyOVHLzvY+dV20SHbCnOnP0s6soEOZXOfMelWY9gcqeik5K5mk8WQYu/T16V0kuCARuvWzH4vCAPI1otS4bS1vRbyTS8+8QIEjhBEUVU49OtkjaYTT7dJkWMZhG1pSfj1NIfJU09Oa7upysYCbc7m5lbmLh5VlSIm6AFq0s+IULRN5Y69u9CJdBj0exWaSWbl3hR1zD9Y7n76uRWyG+itebc828jV0HLz4D1GetMOSC40lYLKGb+MbrhmwjqFiEfl75oHqcO+MKfCu8HfnqT8K0c9lHHdm1aScyRRNJjl7kVR99U1mt/m6TB7jZNPyVzEC3NpWTTsy/0TFn+WbIJpp0qPH8q/UHyrd69Yx6bJCs0kgN46rGY4h9o0rLTIrm/ls1lm51ojM6tF4Soo4K5Mjp+mC3JIZ25irjd3C1PJBu3HYc7SBKD0J9MUckjtla6XmXG7Sl3ToIhnbny602GO2kksl5s+NYGYGMQVc5xg9afAubMnkKcHy8vQ1bikGKPcU8Icu7WOCSESz422Uz7JZGHTpWdg0W8kZ1jheQwHEggIkMZ9+tZNG/RMZRVaScVQupXidkcFWjJDIe6tVYSkmpoLL01znoPOoYwWNNQZ/ftVmHpRQuy/AuBT8VDFJ0p7P0oQxlw4x17YOQeoIpVWmlUEbs7dy7gvRivtXKok9f4V+S6OzkR7qd5ZIyrCBDtQMP8AOtDxVxWNPlEMcSyS7QcsdscArK8ETTXeuRvJNLLy7R5HLNhFY48qGcZaZHqmqTyO8q8htihH2A1KR0zXf9Ir32s6lqE7fOHCQJnZHbHasvxqFlEa9vTCr1LNTLDh+C0YuJZD0OTLLvAFbPhDQlb+O3PhhgDGCOToCv5xrVaYo5kpT5fQJveCy+m826kdSxRktAfCD5DHma7wbwjdNqb3d3EIxbIFtEcjaTjp8Kh1b5Qi+ol1tefFbZW3Dy8pS35xGKvWHyk3eoTLBDYRB5iQrGYuIvc9KzT9mz5WlICy8G6pLd3120eZwrJbBnyJFPmKjh+T6+WOxgMX1Ty8+7O8AxyeWfWthrGs3fD0YMkkd202SIJPqpN/nj2oIflaucf+nxffOT/2qlyRKNFvjzhO81G/skiUPaQtEGYNtWMD1FO4Z4Su4uIZ7u4TEcKMttLu3KRjAwKqD5Wbn/Z8HT+2P7K7/pZuv6BB/jH9lOiLRRl4L1Jr3UZmRd8kLLbPv8MynyFV4uAL7kaXHysrBO0l0ofxRNmip+Ve6/oFv/jHt+FIfKtdf7Pt/wDFb9lPSwtFnj7hK71LU7KWJVeC3lQSeLY0WCPKncNcKXdpxFfXMyjlTxSrFcBsqxNVB8qt30/iFv0/tT+yl/pTvDn+IWvX+1PX9VGlhZT/AIBX/wA61U7YyNQgIgk3+Gc57VFbcBXwj0hyI1OmOedGz9UXfmiP+lK8/oNn2x/Kt2p0Xyk3s3hFhZnoenOK4FFATca8K3F3rFneW5idLWVeau8RyRpuzmsFrWpDRbu/js5+Y+ouwmuI/BHBFnOB6n3o3r/yi3EkEkQtraB5gRzo3LyIvtXm5BJyTknrk9WJqWNs4x3nr1JySx6sTTguK5nAyaQekSTRVKHxVcNiniSkwsto9Sl8iqKGrG1mjZlDERgFmHURr70h3Zw3IVZUMcbcxV2yP0aE+opVX1G8adgW2+FFUbRtXFKnYmzdcB62+hXDvPDI63KKhlj8bwrQTWknvLyaVFJWeRmUk7GK1tOSPQfh3p/JGOirnBx8a+Iv+hI9D9JH0Dfk24TbUJ2muP5KzYfVhsrLJRT5ReIJrz+J2YxDD4ZXU7FkYeQ9qM/JrqEZtJrJmEdwskxw3haRT5iopeFLyJyiR27puJWR32YHvXfkyTcIyhycMYQWRxnwkeVfRd1kKFYlyqqobJZq9e4b0qHhfTzcXHiuJgM58chbyUUQ0vh+LSwbq7eN3iBK48MNuPb3oBqN0+pTc6QEIMi3gPaNPU+5qMmZ4YXL+RWPEss9MP4/J5vxbqF9qN008iuoOdihukMfpWr4D+TyS9snuLtpl5ynkw7sEL60b0PQhqlzuIxa2rZd+y3Uo8h7UV1rj+G0uo7GzRJp5HWIDOLeA1t485TjcuDPOlF6Y+jy3W+Cr2EHkJqDLHJJ9ZL9WrR+WPOoYOBr6VFPzuwG9CxVp23x+x6V7BNqeqHdDJbWqiXwi+gffFAPUg0L0yC43zG2MRt9P3RyGdQTqDnqxz7V1KVHO8amr6PNxwFf4B+eWHijaQYmbOwfdVTTeEr26hEnzmCLLsvLuXeOUoD9rt2r3HTJ/nNskvLKktsMZAObb29qtbAB2DEMFGACZLU+Q9q0Ts5mtLo8QXgW/YnF5ZHBHUSPkp69u1R2XCd4880DThTaKr/ODIyW1wn9U7a9zaMAkL12FVXAB51r5gewp7x4DAYO0qqBQMSW3mooA8RbgC9LeG8szmPmKDK5Zl/ChOtaFc6TNAs86uLlXcfNpGwqj1yK+gLiVLWOSZ2RI7TB+cEAKbX80fhXg/GPEkusXZkfASMsIIVG0QxGkwAkrls9zn1O4gVEEqROop2KgCvyubNHGDjmOq57YFd1CNYZ3jU5ETFR1zUaIHnALbOv8p32mmRjMjAnJJPiPUmpYDlkNP3ZFMaLr+/SljFMRPFlmCgZMhAUdstTpppbcyQksniCyxq3hJHkfWoplVYkYSZdy2YlGGiA7HNQE58yfUk7iTQhiB60q6BSpgegw8XAYDxk+6GilnxZZYO8XIPkNvhrzxnpIxzXG/BxfB1rzcvyb6e/sLxg3O5bqfDIuYpUPxolba9dWTxPFefOoovt2ssg3yLXmoXJ6inhB5fsNEPGcH9si35qkqnFM9evtUfWSrMrRwx7Stu5G6SX1PsKhis31C5FvGSFXBuLheoiT80e9eUq8i/ZklUjthiAa13DfHsmm2UsPKQyMGMdyOpL+9Zy8Ryya5uzaHlLb0wVG74kvxa25srMbRCjCaVO0KY7fE145oOqJpOsJczRzyC35jctPC7OfjTvp27BYiaX6wszdftt51E+rzN9ps+5GTXRCEtV+jmnljp0rs30Xyni9LQR2t5vvPBCJGBVWPTNaLie8j4c0KOE7i820Py+kkrH7VZn5JtLa9uzdSAcuxzs8O0NNT+KY7riPWDFbBuTZnZzm6RK3n1rZv2EY8JElp8qdsSscdhfE7FjRVZeq1qG1u5jiE7aeyxcrCoZQLtF/wAqitdIsOGIOfdOjzYzukAaQt6KK8/4p+UafUZdsI5UCkYjI3GX40amTULtmmk+VCAdFsbxXjDKG5ieAedPh+UaN2jIs7lFgSRQXddhJrFtxXI8e0pZDIAykIDUHm1Ddnr/ANqqEn7MZKN/aFuLuIZtQQhmxHnwWqeGKJayLnJqxcTFv371Tc4pt2QFNLjHKmkKoxgQAI5wAT51T8/361b0lhJEYh9u4dV3+USeZonrHDZsi5D71WNWV8YBY0gMsrATZYEgZyB0Y00NhicEd/iBXWGH98n9KnzyB8k/afHRQFUNQIaZs9v11JC8ZR+YJCxX6oR9FL586aXFvIjIySFQrdUygb0xUbNvYk92LEgeFQaBnBSxXaVAHV70qS96VNDQbl0O6TvFJ92GNVXt5Ij4klX+8uAKpji+9/n3/AVYtuJ72bI+cAbQTiXADVilk9nRJYn0OM+MVIlzUZvZLkoHaDxHxzMFQBfuoVe6htmblgBAxCg+LNaK/Zg4pdBzn04Sg0CXUV6dGz5+masRXqt5gfHoabJS5CxcGuxKZGCKMs5UKvmTW44C4PttVsHdpl5suV2A9YRWu07h/TOFojPPIjyAdJJsO5PoBU8s6NtLk0PCGhrpmlxwnGSm6U5xljWY4n4+tdIVoLJYnl8WWTpDE3ufM1ieMflJn1MtFBmGDqPCcTzD3rCl/ifj1JNBLko22EdX1SbUJjLPI7sc43HKx/ChpakX6UynRk5OXY8vTd+KaxxUTNk0xErPUJJ/fypUsfv3oAOcKW6SSPvcIoQs7+keetHr7iZA2+Ib+YQBDMMxRRr2NBrXQ7uSMbYJALhYtig5MgopHwnLaJzLqC4GGXATDoF96BGVu5WvLrJ5Ye4dQRGNirn0rcDhmCS2dFG1+WV5h8TFgM1lbrURcXsb8uGNYpFCpCmw7c+Z9a2d1eskJEYzJcBlXPQKD51nJ8lwprk81zjp0ypI+BrhNTz2EsJfcrfUuQ7dwGquP3+FWSxCu4pCu1SHRGTSrhNKgQJFSUqVDGzgXNcIxSpUAcpZpUqAQQsdVntP5KSRD/VO2rU+rTXODM8r+hdt4FKlUtFa5VREt0p6dc+tTK5IztbH52Mg0qVBKOgswOAenfp2qLmgeYzSpUwOGXPnmq8lzjsufQn1pUqBHV1Ar3VD7etJtTcnoEXsMAd6VKmkOj2/glmkZZ9t0oeCNTzDiIMB5CtVqkXNhcfnqR8WpUqolng5jK3xbkl+RKxe3iy3Y1YvNfk+drKIuWLcEC1cnaR70qVQ1yCBWp6i97KZH2gtjKxjYhFVRSpUDR2u0qVCKIXrlKlQyGf/2Q==" alt="user profile photo" className="h-full w-full object-cover"/>
            </span>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="hidden sm:block h-6 w-6 text-gray-300">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg> 
          </button>
          <div className="border-l pl-3 ml-3 space-x-1">
            <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Notifications</span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button
            onClick={handleLogout}
            className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
              <span className="sr-only">Log out</span>
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="p-6 sm:p-10 space-y-6 ">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
            <h2 className="text-gray-600 ml-0.5">Book Store Inventory</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
            <Link to="/dashboard/manage-books" className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Manage Books
            </Link>
            <Link to="/dashboard/add-new-book" className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add New Book
            </Link>
          </div>
        </div>
       <Outlet/>
      </main>
    </div>
  </section>
  )
}

export default DashboardLayout