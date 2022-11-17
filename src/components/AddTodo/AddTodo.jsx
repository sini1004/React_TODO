import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

const AddTodo = ({ onAdd }) => {
	const [text, setText] = useState("");
	const handleChange = (e) => setText(e.target.value); //인풋에 입력할때 바뀌는 것은 인식
	const handleSubmit = (e) => {
		//form고유의 submit기능이 작동되면 발생하는 함수
		e.preventDefault(); //페이지가 리프레시 되지 않도록

		if (text.trim().length === 0) {
			return;
		}
		// trim() - 빈부분을 잘라줌
		//입력된게 없을때는 handleSubmit함수에서 빠져나감(!text - 스페이스여백은 못 걸러냄)

		onAdd({ id: uuidv4(), text, status: "active" }); //onAdd함수 실행
		setText(""); //서브밋버튼 누른후 인풋창 초기화
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type="text"
				placeholder="할일을 입력해주세요"
				value={text}
				onChange={handleChange} //변경될때마다 handleChange호출
			/>
			<button className={styles.button}>Add</button>
		</form>
	);
};

export default AddTodo;
