import Inputbox from '../../Components/Inputbox/Inputbox'
import './Infos.css'
import { TbLockPassword } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";
import Button from '../../Components/Button/Button';
import useTitle from '../../hooks/useTitle';
import { FormEvent, useRef } from 'react';



function Infos() {
  useTitle("اطلاعات")

  

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // console.log(formData.g);
    // for (const [key, value] of formData) {
    //   console.log('»', key, value)
    // }
      formData.forEach((element) => {
        return console.log(element)
      });
      
    // console.log(key , value);
    

  }
  return (
    <div className='infos__container'>
      <div className='userInfo'>
        <div className='userInfo__header'>
          <span className='userInfo__header--content'>اطلاعات شما</span>
        </div>
        <form  onSubmit={handleSubmitForm} name='formInfo' className='infos__form'>
          <div className='infos__form--data'>
            <Inputbox
              name='firstName'
              label='نام'

              icon={<FaRegUser />}
            />
            <Inputbox
              name='lastName'
              label='نام خانوادگی'
              icon={<MdFamilyRestroom />}
            />
            <Inputbox
              name='nickName'
              label='نام کاربری'
              icon={<FaRegUser />} />

            <Inputbox
              label='ایمیل'
              name='email'
              icon={<RiMailSendLine />} />

          </div>
          <div className='infos__form--pass'>
            <Inputbox
              name='password'
              label='رمز جاری'

              icon={<TbLockPassword />} />
            <Inputbox
              name='newPassword'
              label='رمز جدید'

              icon={<TbLockPassword />} />
            <Inputbox
              name='currentPassword'
              label='تکرار رمز'

              icon={<TbLockPassword />} />
          </div>
          <div className='info__profile'>
            <div className='info__profile--img-box'>
              <img className='info__profile--img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksR3Lt2Iy2rlmUKvJmc27GcXpe297gINhTA&s" alt="" />
              <span className='info__profile--img-box-text'>پروفایل</span>
            </div>
            <div className='info__profile--banner-box'>
              <img className='info__profile--banner' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AisGh6SudM-fSDH54jLPmyGEMSBdJIY--g&s" alt="" />
              <span className='info__profile--banner-box-text'>بنر</span>
            </div>
          </div>

          <Button
            type='submit'
            color='blue'
            variant='solid'
            size='lg'>
            آپدیت اطلاعات
          </Button>
        </form>

      </div>
      <div className='info__team'>
        <span className='info__team-content'>اطلاعات تیم</span>
      </div>
    </div>
  )
}

export default Infos