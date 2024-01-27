import React from 'react'
import library from '../assets/library.jpg'

export default function About () {
  return (
    <div>
      <div>
      
        <img className='items-center h-90 w-90' src={library} alt='' />
        <h1 className=' font-bold text-center text-fuchsia-600 p-5'>WELCOME</h1>
        <p className=' text-black text-center justify-center '>
          {' '}
          “You are going to fall down, but the world does not care how many
          times you fall down, as long as its one fewer than the numbers of
          times you get back up.
        </p>
        <p className=' text-black text-center justify-center'>
          Welcome final year students! Be respectful, loving, and caring as you
          embark on your final journey in college. As you finish your final year
          of college, you will be entering into a new world with not only great
          memories but a sense of pride and accomplishment. We are proud of you!
        </p>
        <h1 className='  text-fuchsia-600 text-center font-bold p-10'>
          MISSION AND VISION
        </h1>
        <h2 className='  text-green-400 text-center font-semibold p-3 '>
          Our Mission
        </h2>
        <p className=' text-black text-center'>
          {' '}
          College provides students with quality educational experiences and
          support services that lead to the successful completion of degrees,
          transfer, certificates, career/technical education and basic skills
          proficiency. The college fosters academic and career success through
          the development of critical thinking, effective communication,
          creativity, and cultural awareness in a safe, accessible and
          affordable learning environment. In meeting the needs of our
          demographically diverse student population, we embrace equity and
          accountability through measurable learning outcomes, ethical
          data-driven decisions and student achievement.
        </p>
        <h2 className='  text-green-400 text-center font-semibold p-3 '>
          Vision
        </h2>
        <p className=' text-black text-center'>
          College is driven to provide excellent educational opportunities that
          are responsive to the needs of our students, and empower them to meet
          and exceed challenges as active participants in shaping the future of
          our world.
        </p>
        <h2 className='  text-green-400 text-center font-semibold p-3 '>
          Values
        </h2>
        <ul  className='text-black  text-center'>
          <li >
           <b>Student Success and Completion:</b>  Meeting student needs by creating an
            educational environment in which students can attain a variety of
            goals.
          </li>
          <li >
           <b>Excellence: </b> Maintaining a high standard of integrity and performance
            leading to the achievement of academic and career goals.
          </li>
          <li >
            <b>Collaboration:</b>Seeking input from all sectors of the college and the
            community.
          </li>
          <li >
            <b>Diversity:</b> Fostering a learning community in which the diverse
            values, goals, and learning styles of all students are recognized
            and supported.
          </li>
          <li >
            <b>Life-Long Learning:</b> Encouraging enthusiastic, independent thinkers
            and learners striving for personal growth.
          </li>
          <li  >
           <b>Integrity:</b>  Behaving ethically in all interactions at all levels.
          </li>
          <li  >
            <b>Technological Advancement: </b>Implementing cutting-edge technology that
            enhances instruction and prepares students for life-long success.
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  )
}
