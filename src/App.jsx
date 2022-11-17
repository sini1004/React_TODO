//다크모드 사용을 위해 만들어놓은 컨텍스트 적용

import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { DarkModeProvider } from "./components/context/DarkModeContext";

//어떤 필터가 있는지 컴포넌트 밖에서 정의
const filters = ["all", "active", "completed"];

function App() {
	const [filter, setFilter] = useState(filters[0]);
	//초기값으로는 필터중에 all로 시작

	return (
		<DarkModeProvider>
			<Header filters={filters} filter={filter} onFilterChange={setFilter} />
			<TodoList filter={filter} />
		</DarkModeProvider>
	);
}

export default App;
