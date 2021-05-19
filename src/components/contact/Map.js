import styles from './Map.module.scss';

export default function Map() {
    return <iframe className={styles.map}
                   title="Map"
                   src="https://yandex.ru/map-widget/v1/?um=constructor%3A4e133fe87520be40efb9c8e4b9455ab5272b5f23159df7aaaeb6e1940ba1c706&amp;source=constructor"
                   // width="700"
                   // height="350"
                   frameBorder="0"/>
}