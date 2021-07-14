import {v4 as uuidv4} from "uuid";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import {useState} from "react";
import styles from "./Slider.module.scss";

export default function Slider({images}) {
    const [slideIndex, setSlideIndex] = useState(0);

    const imagesArr = images.split(' - ');//массив картинок
    const length = imagesArr.length - 1;

    const handleClickPrev = () => {
        slideIndex <= 0
            ? setSlideIndex(prevSlideIndex => prevSlideIndex + length)
            : setSlideIndex(prevSlideIndex => prevSlideIndex - 1)
    }

    const handleClickNext = () => {
        slideIndex >= length
            ? setSlideIndex(0)
            : setSlideIndex(prevSlideIndex => prevSlideIndex + 1)
    }

    return (
        imagesArr.length > 1
            ? <div className={styles.slides}>
                <NavigateBeforeIcon className={styles.prevBtn}
                                    fontSize="large"
                                    onClick={handleClickPrev}/>
                {imagesArr.map((img, index) => (
                    index === slideIndex
                        ? <img className={`${styles.slide} ${styles.show}`} alt="Фотоотчет" src={img} key={uuidv4()}/>
                        : <img className={`${styles.slide} ${styles.hide}`} alt="Фотоотчет" src={img} key={uuidv4()}/>
                ))}
                <NavigateNextIcon className={styles.nextBtn}
                                  fontSize="large"
                                  onClick={handleClickNext}/>
            </div>
            : imagesArr.map((img, index) => (
                index === slideIndex
                    ? <div className={styles.slides} key={uuidv4()}>
                        <img className={`${styles.slide} ${styles.show}`} alt="Фотоотчет" src={img} />
                    </div>
                    : <div className={styles.slides} key={uuidv4()}>
                        <img className={`${styles.slide} ${styles.hide}`} alt="Фотоотчет" src={img} />
                    </div>
            ))
    )
}