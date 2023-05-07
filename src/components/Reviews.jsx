import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Reviews = () => {
  return (
    <div>
        <motion.div id='div1'><h3><i>Отзывы наших путешественников</i></h3></motion.div>
          <motion.div id='div2'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/review.jpg'
            className='banner'
            width={650}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>

          </motion.div>
          <div className='reviewText'>
            <h4>Ольга</h4>
            <p>Самое невероятное путешествие! Самые замечательные люди! Невероятная атмосфера! До скорых встреч</p>
          </div>
          <div id='divImg'>
          <motion.div id='div3'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/review2.jpg'
            className='banner2'
            width={650}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>

          </motion.div>
          <div className='reviewText2'>
            <h4>Виталий</h4>
            <p>Прекрасное путешествие! Всем советую</p>
          </div>
          <motion.div id='div4'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/review3.jpg'
            className='banner3'
            width={650}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>
          </motion.div>
          <div className='reviewText3'>
            <h4>Виктор</h4>
            <p>Теперь путешествую только с вами!</p>
          </div>
      </div>
    </div>
  )
}

export default Reviews