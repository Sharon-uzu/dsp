import React from 'react';
import one from '../Images/one.png';
import { Courses } from '../utils/Data';
const CoursesOffered = () => {
  return (
    <div className='courses'>
        <h1>Courses Offered</h1>

        <section>
            {
                Courses && Courses.map(item =>(
                    <div className='course-card' key={item.id}>
                        <div>
                            <img src={item.image} alt="" />
                            <h3>{item.course}</h3>
                            <p>{item.info} </p>

                        </div>
                    </div>

                ))
            }

            

        </section>
        
    </div>
  )
}

export default CoursesOffered