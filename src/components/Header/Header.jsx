//다크모드 콘텍스트 연결
import styles from "./Header.module.css";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext"; //만들어놓은 hooks를 가져옴

export default function Header({ filters, filter, onFilterChange }) {
	const { darkMode, toggleDarkMode } = useDarkMode();

	return (
		<header className={styles.header}>
			<button className={styles.toggle} onClick={toggleDarkMode}>
				{!darkMode && <BsFillMoonFill />}
				{darkMode && <BsFillSunFill />}
			</button>
			<ul className={styles.filters}>
				{filters.map((value, index) => (
					<li key={index}>
						<button
							className={`${styles.filter}  ${
								filter === value && styles.selected
							}`}
							onClick={() => onFilterChange(value)}
						>
							{value}
						</button>
					</li>
				))}
			</ul>
		</header>
	);
}
