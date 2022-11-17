import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./Todo.module.css";

const Todo = ({ todo, onUpdate, onDelete }) => {
	const { id, text, status } = todo; //간편한 사용을 위해 todo에서 할당
	const handleChange = (e) => {
		//받아온게 아님 이 컴포넌트 내부에서만 사용
		const status = e.target.checked ? "completed" : "active";
		onUpdate({ ...todo, status }); //브라우저 Conponents에서 status변하는거 확인!
	};
	const handleDelete = () => onDelete(todo);

	return (
		<li className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				id={id}
				checked={status === "completed"}
				onChange={handleChange}
			/>
			<label className={styles.text} htmlFor={id}>
				{text}
			</label>
			<span className={styles.icon}>
				<button className={styles.button} onClick={handleDelete}>
					<AiOutlineDelete />
				</button>
			</span>
		</li>
	);
};

export default Todo;
